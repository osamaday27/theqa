import { defineEventHandler, readBody } from 'h3'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// ===== إعدادات المسار =====
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFilePath = path.join(process.cwd(), 'data.txt')

// ===== التحقق من صحة البريد الإلكتروني =====
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// ===== تنظيف النص من الأحرف الخطرة =====
const sanitizeText = (text: string): string => {
  return text.replace(/[<>{}|\\^~[\]`]/g, '').trim()
}

export default defineEventHandler(async (event) => {
  try {
    // ===== قراءة البيانات =====
    const body = await readBody(event)
    
    // ===== التحقق من الحقول المطلوبة =====
    const errors: string[] = []
    
    if (!body.name || body.name.trim().length < 2) {
      errors.push('الاسم يجب أن يكون至少 حرفين')
    }
    
    if (!body.email) {
      errors.push('البريد الإلكتروني مطلوب')
    } else if (!isValidEmail(body.email)) {
      errors.push('البريد الإلكتروني غير صحيح')
    }
    
    if (!body.message || body.message.trim().length < 5) {
      errors.push('الرسالة يجب أن تكون على الأقل 5 أحرف')
    }
    
    // ===== إذا存在 أخطاء =====
    if (errors.length > 0) {
      return {
        success: false,
        message: 'يرجى تصحيح الأخطاء التالية:',
        errors: errors
      }
    }

    // ===== تنظيف البيانات =====
    const cleanedData = {
      name: sanitizeText(body.name),
      email: body.email.toLowerCase().trim(),
      phone: body.phone ? sanitizeText(body.phone) : 'غير مدخل',
      service: body.service ? sanitizeText(body.service) : 'غير محدد',
      message: sanitizeText(body.message),
      comment: body.comment ? sanitizeText(body.comment) : 'لا يوجد'
    }

    // ===== إنشاء سجل البيانات =====
    const timestamp = new Date().toLocaleString('ar-EG', {
      timeZone: 'Africa/Cairo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    
    const separator = '='.repeat(48)
    const record = `
${separator}
📅 التاريخ: ${timestamp}
👤 الاسم: ${cleanedData.name}
📧 البريد الإلكتروني: ${cleanedData.email}
📱 رقم الجوال: ${cleanedData.phone}
🛠️ نوع الخدمة: ${cleanedData.service}
💬 الرسالة: ${cleanedData.message}
📝 التعليق: ${cleanedData.comment}
${separator}
`

    // ===== حفظ البيانات في الملف =====
    try {
      // التحقق من وجود الملف
      if (!fs.existsSync(dataFilePath)) {
        // إنشاء ملف جديد مع رأس
        const header = `==================== 📋 سجل بيانات العملاء ====================\n`
        fs.writeFileSync(dataFilePath, header + record, 'utf-8')
      } else {
        // إضافة البيانات إلى الملف الموجود
        fs.appendFileSync(dataFilePath, record, 'utf-8')
      }
    } catch (fileError: any) {
      console.error('Error writing to file:', fileError)
      return {
        success: false,
        message: 'حدث خطأ أثناء حفظ البيانات في الملف'
      }
    }
    
    // ===== إرجاع رسالة نجاح =====
    return {
      success: true,
      message: '✅ تم حفظ بياناتك بنجاح! سنتواصل معك قريباً.'
    }
    
  } catch (error: any) {
    console.error('Error in contact API:', error)
    return {
      success: false,
      message: '❌ حدث خطأ في الخادم. يرجى المحاولة مرة أخرى.'
    }
  }
})