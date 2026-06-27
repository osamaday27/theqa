<template>
  <footer class="bg-primary-900 text-white relative overflow-hidden">
    <!-- زخارف خلفية خفيفة لتطابق هوية باقي الصفحة -->
    <div class="absolute top-0 right-0 w-72 h-72 bg-theqa-gold/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <!-- ===== PAYMENT METHODS ===== -->
    <div class="relative border-b border-primary-800/50">
      <div class="container mx-auto px-4 py-5">
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <span class="text-primary-400 text-xs md:text-sm font-semibold w-full text-center md:w-auto md:text-right mb-1 md:mb-0">
            طرق الدفع الآمنة:
          </span>

          <!-- tabby -->
          <div class="flex items-center gap-2 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <span class="text-[#1AAE9F] font-black text-sm md:text-base tracking-tight">tabby</span>
          </div>

          <!-- تمارا (Tamara) -->
          <div class="flex items-center gap-2 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <span class="text-[#1A1A2E] font-black text-sm md:text-base tracking-tight">تمارا</span>
          </div>

          <!-- Mastercard -->
          <div class="flex items-center gap-2 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <span class="relative flex items-center -space-x-2.5 ml-0.5">
              <span class="w-4 h-4 md:w-4.5 md:h-4.5 rounded-full bg-[#EB001B]"></span>
              <span class="w-4 h-4 md:w-4.5 md:h-4.5 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply"></span>
            </span>
            <span class="text-slate-700 font-bold text-[11px] md:text-xs">Mastercard</span>
          </div>

          <!-- VISA -->
          <div class="flex items-center gap-2 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <span class="text-[#1A1F71] font-black italic text-sm md:text-base tracking-tight">VISA</span>
          </div>

          <!-- Apple Pay -->
          <div class="flex items-center gap-1.5 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <svg class="w-4 h-4 md:w-4.5 md:h-4.5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.38 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.42zM20.92 17.07c-.05.12-.83 1.65-2.42 3.39-1.44 1.6-2.86 2.4-4.3 2.4-1.1 0-1.94-.38-2.78-.38-.85 0-1.74.4-2.86.4-1.34 0-2.85-.85-4.28-2.6C2.83 18.4 1.5 15.66 1.5 13.06c0-3.96 2.6-6.06 5.16-6.06 1.18 0 2.31.5 3.13.5.78 0 2.05-.55 3.46-.55.74 0 2.96.07 4.46 2.17-.12.08-2.65 1.55-2.65 4.7 0 3.6 3.16 4.85 3.36 4.95-.02.06-.4 1.36-1.66 1.3z"/>
            </svg>
            <span class="text-slate-900 font-semibold text-[11px] md:text-xs">Pay</span>
          </div>

          <!-- مدى (mada) -->
          <div class="flex items-center gap-2 bg-white px-3.5 md:px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-black/10">
            <span class="flex gap-0.5">
              <span class="w-1.5 h-4 md:h-4.5 bg-[#00A19A] rounded-sm"></span>
              <span class="w-1.5 h-4 md:h-4.5 bg-[#5B8C2A] rounded-sm"></span>
            </span>
            <span class="text-slate-700 font-bold text-[11px] md:text-xs">مدى</span>
          </div>

          <!-- شعار الأمان -->
          <div class="flex items-center gap-1.5 text-primary-400 text-[10px] md:text-xs border-r border-primary-800 pr-3 md:pr-4">
            <svg class="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-12V7a4 4 0 10-8 0v2"/>
            </svg>
            <span>دفع آمن 100%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== FOOTER CONTENT ===== -->
    <div class="container relative mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

        <!-- ===== Column 1: Logo & Social ===== -->
        <div class="sm:col-span-2 lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 md:gap-4 group mb-4 w-fit">
            <div class="relative flex-shrink-0">
              <img
                src="/logo.png"
                alt="ثقة - فحص السيارات"
                class="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <!-- علامة توثيق -->
              <span class="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-theqa-gold rounded-full flex items-center justify-center border-2 border-primary-900 shadow-lg shadow-theqa-gold/30">
                <svg class="w-3.5 h-3.5 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </span>
            </div>
            <div>
              <span class="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-none transition-colors group-hover:text-theqa-gold">
                ثقة
              </span>
              <span class="block text-[10px] md:text-xs lg:text-sm text-theqa-gold font-bold tracking-wider">
                فحص احترافي للسيارات
              </span>
            </div>
          </NuxtLink>

          <p class="text-primary-400 text-sm leading-relaxed mb-4 max-w-xs">
            مركز متخصص في فحص السيارات قبل الشراء أو السفر، نقدم تقارير دقيقة وفيديوهات توضيحية.
          </p>

          <div class="flex gap-3">
            <a href="#" aria-label="تويتر" class="w-10 h-10 md:w-11 md:h-11 bg-primary-800 rounded-full flex items-center justify-center text-primary-400 hover:bg-theqa-gold hover:text-primary-900 transition-all duration-300 hover:scale-110 hover:-rotate-6">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="#" aria-label="انستغرام" class="w-10 h-10 md:w-11 md:h-11 bg-primary-800 rounded-full flex items-center justify-center text-primary-400 hover:bg-theqa-gold hover:text-primary-900 transition-all duration-300 hover:scale-110 hover:rotate-6">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://wa.me/201090718857" target="_blank" aria-label="واتساب" class="w-10 h-10 md:w-11 md:h-11 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:-rotate-6">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- ===== Column 2: Services ===== -->
        <div>
          <h4 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-6 bg-theqa-gold rounded-full"></span>
            خدمات ثقة
          </h4>
          <ul class="space-y-2.5 text-primary-400">
            <li>
              <a href="/services/pre-purchase" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                فحص ما قبل الشراء
              </a>
            </li>
            <li>
              <a href="/services/makdoum" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                خدمة مخدوم
              </a>
            </li>
            <li>
              <a href="/services/traveler" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                فحص المسافر
              </a>
            </li>
          </ul>
        </div>

        <!-- ===== Column 3: Quick Links ===== -->
        <div>
          <h4 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-6 bg-theqa-gold rounded-full"></span>
            روابط مهمة
          </h4>
          <ul class="space-y-2.5 text-primary-400">
            <li>
              <a href="/" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                الرئيسية
              </a>
            </li>
            <li>
              <a href="/contact" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                الاسترجاع والاستبدال
              </a>
            </li>
            <li>
              <a href="/contact" class="flex items-center gap-2 hover:text-theqa-gold transition-colors group">
                <span class="w-1 h-1 bg-theqa-gold/30 rounded-full group-hover:bg-theqa-gold transition-colors"></span>
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        <!-- ===== Column 4: Contact ===== -->
        <div>
          <h4 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-6 bg-theqa-gold rounded-full"></span>
            تواصل معنا
          </h4>
          <ul class="space-y-3.5 text-primary-400">
            <li class="flex items-start gap-3 group hover:text-white transition-colors">
              <svg class="w-5 h-5 text-theqa-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div>
                <p class="text-xs text-primary-500">الهاتف</p>
                <a href="tel:+966533000983" class="font-bold hover:text-theqa-gold transition-colors" dir="ltr">+966 53 300 0983</a>
              </div>
            </li>
            <li class="flex items-start gap-3 group hover:text-white transition-colors">
              <svg class="w-5 h-5 text-theqa-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p class="text-xs text-primary-500">البريد الإلكتروني</p>
                <a href="mailto:info@theqa.com" class="font-bold hover:text-theqa-gold transition-colors">info@theqa.com</a>
              </div>
            </li>
            <li class="flex items-start gap-3 group hover:text-white transition-colors">
              <svg class="w-5 h-5 text-theqa-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div>
                <p class="text-xs text-primary-500">العنوان</p>
                <p class="font-bold hover:text-white transition-colors">الرياض - معارض القادسية</p>
              </div>
            </li>
            <li class="flex items-start gap-3 group hover:text-white transition-colors">
              <svg class="w-5 h-5 text-theqa-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-xs text-primary-500">ساعات العمل</p>
                <p class="font-bold hover:text-white transition-colors">السبت - الخميس 9:00 ص - 10:00 م</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ===== Copyright ===== -->
      <div class="border-t border-primary-800 mt-8 md:mt-12 pt-6 md:pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-primary-400 text-sm text-center md:text-right">
            © 2025 <span class="text-theqa-gold font-bold">ثقة</span> - جميع الحقوق محفوظة
          </p>
          <div class="flex items-center gap-4 text-primary-500 text-xs">
            <a href="#" class="hover:text-theqa-gold transition-colors">سياسة الخصوصية</a>
            <span class="w-px h-4 bg-primary-800"></span>
            <a href="#" class="hover:text-theqa-gold transition-colors">شروط الاستخدام</a>
            <span class="w-px h-4 bg-primary-800"></span>
            <a href="#" class="hover:text-theqa-gold transition-colors">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>