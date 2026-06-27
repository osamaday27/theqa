import { defineEventHandler, readBody } from 'h3'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

// الحصول على مسار الملف الحالي
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// مسار ملف البيانات
const dataFilePath = path.join(process.cwd(), 'data.txt')

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // التحقق من صحة البيانات
    if (!body.name || !body.email || !body.message) {
      return {
        success: false,
        message: 'الرجاء ملء جميع الحقول المطلوبة'
      }
    }

    // إنشاء سجل البيانات
    const timestamp = new Date().toLocaleString('ar-EG', {
      timeZone: 'Africa/Cairo'
    })
    
    const record = `
========================================
📅 التاريخ: ${timestamp}
👤 الاسم: ${body.name}
📧 البريد الإلكتروني: ${body.email}
📱 رقم الجوال: ${body.phone || 'غير مدخل'}
🛠️ نوع الخدمة: ${body.service || 'غير محدد'}
💬 الرسالة: ${body.message}
💬 التعليق: ${body.comment}
----------------------------------------
`

    // التحقق من وجود الملف وإنشاؤه إذا لم يكن موجوداً
    if (!fs.existsSync(dataFilePath)) {
      // إنشاء ملف جديد مع رأس
      const header = '==================== بيانات العملاء ====================\n'
      fs.writeFileSync(dataFilePath, header + record, 'utf-8')
    } else {
      // إضافة البيانات إلى الملف الموجود
      fs.appendFileSync(dataFilePath, record, 'utf-8')
    }
    
    return {
      success: true,
      message: 'تم حفظ بياناتك بنجاح'
    }
    
  } catch (error: any) {
    console.error('Error saving contact data:', error)
    return {
      success: false,
      message: error.message || 'حدث خطأ أثناء حفظ البيانات'
    }
  }
})