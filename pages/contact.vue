<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="relative py-16 md:py-20 bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-4">
          <span class="w-2 h-2 bg-theqa-gold rounded-full animate-pulse"></span>
          <span class="text-white/80 text-sm font-medium">تواصل معنا</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-white mb-4">
          نحن هنا <span class="text-theqa-gold">لخدمتك</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          تواصل مع فريقنا للحصول على استشارة مجانية أو حجز موعد فحص
        </p>
      </div>
    </section>

    <!-- ===== CONTENT SECTION ===== -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          
          <!-- ===== CONTACT FORM ===== -->
          <div class="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
            <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
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
                  <option value="pre-purchase">فحص ما قبل الشراء</option>
                  <option value="makdoum">خدمة مخدوم</option>
                  <option value="traveler">فحص المسافر</option>
                  <option value="other">خدمة أخرى</option>
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
                class="w-full bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-theqa-gold/30 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>إرسال</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </form>
          </div>

          <!-- ===== CONTACT INFO ===== -->
          <div class="space-y-8">
            <div class="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 class="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
                معلومات التواصل
              </h3>
              
              <div class="space-y-5">
                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold text-xl group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">الهاتف</p>
                    <a href="tel:+201090718857" class="font-bold text-primary-800 hover:text-theqa-gold transition-colors" dir="ltr">+2 01090718857</a>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold text-xl group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">البريد الإلكتروني</p>
                    <a href="mailto:info@theqa.com" class="font-bold text-primary-800 hover:text-theqa-gold transition-colors">info@theqa.com</a>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold text-xl group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">العنوان</p>
                    <p class="font-bold text-primary-800">الرياض - المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group p-4 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer">
                  <div class="w-12 h-12 bg-theqa-gold/10 rounded-xl flex items-center justify-center text-theqa-gold text-xl group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <p class="text-xs text-gray-400">ساعات العمل</p>
                    <p class="font-bold text-primary-800">السبت - الخميس 9:00 ص - 10:00 م</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ===== WHATSAPP CARD ===== -->
            <div class="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-3xl p-8 border border-[#25D366]/20 text-center">
              <div class="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg shadow-[#25D366]/30">
                💬
              </div>
              <h4 class="text-xl font-bold text-primary-900 mb-2">تواصل عبر واتساب</h4>
              <p class="text-gray-500 text-sm mb-4">احصل على رد سريع عبر واتساب</p>
              <a 
                href="https://wa.me/201090718857?text=أهلاً%20بكم%20في%20ثقة%20لحص%20السيارات%20أريد%20الاستفسار%20عن%20خدماتكم" 
                target="_blank"
                class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/30"
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
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  // منطق إرسال النموذج
  console.log('Form submitted:', form.value)
  // يمكن إضافة API call هنا
  alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>