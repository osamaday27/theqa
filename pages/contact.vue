<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32">

    <!-- ===== HERO SECTION ===== -->
    <section class="relative py-16 md:py-24 bg-gradient-to-r from-primary-900 via-primary-900 to-primary-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
        <div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(rgba(212,175,55,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.6) 1px, transparent 1px); background-size: 48px 48px;"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-theqa-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-5">
          <span class="relative flex w-2 h-2">
            <span class="absolute inset-0 bg-theqa-gold rounded-full animate-ping"></span>
            <span class="relative w-2 h-2 bg-theqa-gold rounded-full"></span>
          </span>
          <span class="text-white/80 text-sm font-medium">تواصل معنا</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          نحن هنا <span class="text-theqa-gold">لخدمتك</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          تواصل مع فريقنا للحصول على استشارة مجانية أو حجز موعد فحص
        </p>
      </div>
    </section>

    <!-- ===== CONTENT SECTION ===== -->
    <section class="py-16 md:py-20 relative">
      <div class="absolute top-1/3 right-0 w-72 h-72 bg-theqa-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="container mx-auto px-4 relative">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-12">

          <!-- ===== CONTACT FORM ===== -->
          <div class="bg-white rounded-[1.75rem] shadow-xl shadow-primary-900/5 p-6 md:p-10 border border-gray-100">
            <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
              أرسل <span class="text-theqa-gold">رسالتك</span>
            </h2>
            <p class="text-gray-500 mb-8">سنقوم بالرد عليك في أقرب وقت ممكن</p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-primary-700 font-bold mb-2 text-sm">الاسم</label>
                <input
                  type="text"
                  v-model="form.name"
                  placeholder="ادخل اسمك"
                  class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-theqa-gold focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label class="block text-primary-700 font-bold mb-2 text-sm">البريد الإلكتروني</label>
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="ادخل بريدك الإلكتروني"
                  class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-theqa-gold focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div>
                <label class="block text-primary-700 font-bold mb-2 text-sm">رقم الجوال</label>
                <input
                  type="tel"
                  v-model="form.phone"
                  placeholder="ادخل رقم جوالك"
                  class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-theqa-gold focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label class="block text-primary-700 font-bold mb-2 text-sm">نوع الخدمة</label>
                <select
                  v-model="form.service"
                  class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-theqa-gold focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="فحص ما قبل الشراء">فحص ما قبل الشراء</option>
                  <option value="خدمة مخدوم">خدمة مخدوم</option>
                  <option value="فحص المسافر">فحص المسافر</option>
                  <option value="أخرى">خدمة أخرى</option>
                </select>
              </div>

              <div>
                <label class="block text-primary-700 font-bold mb-2 text-sm">الرسالة</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  class="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-theqa-gold focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="group w-full bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-theqa-gold/30 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">إرسال</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري الإرسال...
                </span>
                <svg v-if="!isSubmitting" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8l-4 4m0 0l4 4m-4-4h18"/>
                </svg>
              </button>

              <!-- ===== رسائل الحالة ===== -->
              <div v-if="successMessage" class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                ✅ {{ successMessage }}
              </div>
              <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">
                ❌ {{ errorMessage }}
              </div>
            </form>
          </div>

          <!-- ===== CONTACT INFO ===== -->
          <div class="space-y-8">
            <div class="bg-gradient-to-br from-primary-50 to-white rounded-[1.75rem] p-6 md:p-8 border border-gray-100">
              <h3 class="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-2.5">
                <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
                معلومات التواصل
              </h3>

              <div class="space-y-3">
                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="pt-1">
                    <p class="text-xs text-gray-400">الهاتف</p>
                    <a href="tel:+201090718857" class="font-bold text-primary-800 hover:text-theqa-gold transition-colors" dir="ltr">+2 01090718857</a>
                  </div>
                </div>

                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="pt-1">
                    <p class="text-xs text-gray-400">البريد الإلكتروني</p>
                    <a href="mailto:info@theqa.com" class="font-bold text-primary-800 hover:text-theqa-gold transition-colors">info@theqa.com</a>
                  </div>
                </div>

                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="pt-1">
                    <p class="text-xs text-gray-400">العنوان</p>
                    <p class="font-bold text-primary-800">القاهرة - مصر</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="pt-1">
                    <p class="text-xs text-gray-400">ساعات العمل</p>
                    <p class="font-bold text-primary-800">السبت - الخميس 9:00 ص - 10:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===== WHATSAPP CARD ===== -->
            <div class="relative bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-[1.75rem] p-8 border border-[#25D366]/20 text-center overflow-hidden">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#25D366]/10 rounded-full blur-3xl"></div>
              <div class="relative w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#25D366]/30">
                <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </div>
              <h4 class="relative text-xl font-bold text-primary-900 mb-2">تواصل عبر واتساب</h4>
              <p class="relative text-gray-500 text-sm mb-5">احصل على رد سريع عبر واتساب</p>
              <a
                href="https://wa.me/201090718857?text=أهلاً%20بكم%20في%20ثقة%20لحص%20السيارات%20أريد%20الاستفسار%20عن%20خدماتكم"
                target="_blank"
                class="relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/30"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue' 
// ===== تعريف الواجهات =====
interface ContactForm {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface ApiResponse {
  success: boolean
  message?: string
  data?: any
}

// ===== STATE =====
const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref<boolean>(false)
const successMessage = ref<string>('')
const errorMessage = ref<string>('')

// ===== METHODS =====
const handleSubmit = async (): Promise<void> => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await $fetch<ApiResponse>('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      successMessage.value = '✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      // إعادة تعيين النموذج
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      }
    } else {
      errorMessage.value = '❌ ' + (response.message || 'حدث خطأ أثناء الإرسال')
    }
  } catch (error: any) {
    errorMessage.value = '❌ ' + (error.message || 'حدث خطأ في الاتصال بالخادم')
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.08); }
}
.animate-spin-slow {
  animation: spin-slow 30s linear infinite;
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}
</style>