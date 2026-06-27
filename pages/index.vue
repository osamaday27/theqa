<template>
  <div dir="rtl" class="bg-white text-primary-900 overflow-x-hidden">
    <!-- ============================================ -->
    <!-- ===== HERO SECTION - 2026 STYLE ===== -->
    <!-- ============================================ -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- خلفية الفيديو/الصورة المتحركة -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/90 to-primary-800/80 z-10"></div>
        <!-- صورة خلفية متحركة (تأثير بارالاكس) - مركز صيانة سيارات -->
        <div
          class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat scale-110 animate-slow-zoom">
        </div>
        <!-- دوائر ضوئية متحركة -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-theqa-gold/10 rounded-full blur-3xl animate-pulse-slow">
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style="animation-delay: 2s"></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full animate-spin-slow">
        </div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow"
          style="animation-direction: reverse; animation-duration: 25s"></div>
      </div>

      <!-- محتوى الهيرو -->
      <div class="container mx-auto px-4 relative z-20 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- النص -->
          <div class="animate-fade-in-up">
            <div
              class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-6">
              <span class="w-2.5 h-2.5 bg-theqa-gold rounded-full animate-ping"></span>
              <span class="text-white/90 text-sm font-medium">✓ معتمد - خبرة 12+ عام</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              فحص سيارتك
              <span class="relative inline-block">
                <span class="text-theqa-gold">بثقة</span>
                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4 Q50 8 100 4 Q150 0 200 4" stroke="#D4AF37" stroke-width="3" stroke-linecap="round" />
                </svg>
              </span>
              <br />
              <span class="text-white/70 text-3xl sm:text-4xl md:text-5xl">قبل الشراء أو السفر</span>
            </h1>

            <p class="text-lg md:text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
              فحص شامل ودقيق لجميع أنواع السيارات مع تقارير مفصلة وفيديوهات
              توضيحية،
              <span class="text-theqa-gold font-semibold">لراحة بالك</span>
            </p>

            <div class="flex flex-wrap gap-4">
              <a href="#services"
                class="group relative overflow-hidden bg-theqa-gold text-primary-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-theqa-gold/30 hover:shadow-theqa-gold/50 hover:scale-105">
                <span class="relative z-10 flex items-center gap-2">
                  أطلب الخدمة الآن
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span
                  class="absolute inset-0 bg-gradient-to-r from-theqa-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
              <a href="#why-us"
                class="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center gap-2">
                <span>تعرف علينا</span>
                <span class="group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>

            <!-- إحصائيات -->
            <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 max-w-lg">
              <div class="text-center">
                <div class="text-3xl font-black text-theqa-gold">12+</div>
                <div class="text-sm text-white/50">سنوات خبرة</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-3xl font-black text-theqa-gold">5K+</div>
                <div class="text-sm text-white/50">سيارة مفحوصة</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-theqa-gold">98%</div>
                <div class="text-sm text-white/50">رضا العملاء</div>
              </div>
            </div>
          </div>
          <!-- صورة جانبية متحركة - فحص سيارة في مركز صيانة -->
          <div class="hidden lg:block relative animate-float-slow">
  <div class="relative">
    <!-- هالة الإضاءة الخلفية للسيارة -->
    <div class="absolute -inset-4 bg-theqa-gold/20 rounded-3xl blur-2xl"></div>
    
    <!-- تم تصحيح المسار بحذف كلمة public والبدء بالسلاش مباشرة -->
    <img 
      src="/1.jpg"
      alt="فحص سيارة"
      class="relative rounded-3xl shadow-2xl border border-white/10 w-full h-[500px] object-cover" 
    />
              <div
                class="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-theqa-gold/20 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-theqa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"
                        d="M10.5 6a4.5 4.5 0 104.5 4.5M16.5 4.5L21 9m-4.5-4.5L12 9m6 7.5L9 21l-3-3 4.5-4.5" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-white font-bold text-sm">فحص احترافي</p>
                    <p class="text-white/50 text-xs">تقرير دقيق 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- سهم للأسفل -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-slow">
        <a href="#services" class="text-white/30 hover:text-white/60 transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== SERVICES SECTION ===== -->
    <!-- ============================================ -->
    <section id="services" class="py-24 px-4 bg-white relative">
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-50 to-transparent"></div>

      <div class="container mx-auto">
        <div class="text-center mb-16">
          <span
            class="inline-flex items-center gap-2 text-theqa-gold font-bold text-sm tracking-wider bg-theqa-gold/10 px-5 py-2.5 rounded-full mb-4">
            <span class="w-1.5 h-1.5 bg-theqa-gold rounded-full"></span>
            خدماتنا
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-primary-900 mb-4">
            نقدم لك <span class="text-theqa-gold">أفضل</span> حلول الفحص
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto text-lg">
            خدمات متكاملة تلبي احتياجاتك وتضمن لك أعلى مستويات الدقة والجودة
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- كارد 1 -->
          <div
            class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-primary-100">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-theqa-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            </div>
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theqa-gold to-primary-600"></div>
            <div class="relative p-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-white transition-all duration-500 mb-6 shadow-lg group-hover:shadow-primary-500/30 text-primary-700">
                <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"
                    d="M11 4a7 7 0 104.95 11.95A7 7 0 0011 4z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 21l-4.3-4.3" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary-900 mb-3">
                فحص الشراء
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                فحص جميع أجزاء المركبة المستعملة لمعرفة واكتشاف الأعطال والعيوب
                قبل اتخاذ قرار الشراء.
              </p>
              <ul class="space-y-2 mb-6">
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  فحص جميع الأجزاء
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  تقرير مفصل بالفيديو
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  نقاط ولاء مجانية
                </li>
              </ul>
              <a href="/contact"
                class="inline-flex items-center gap-2 text-primary-600 font-bold group-hover:text-theqa-gold transition-all duration-300 group-hover:gap-3">
                أطلب الأن
                <span class="group-hover:translate-x-1 transition-transform">←</span>
              </a>
            </div>
          </div>

          <!-- كارد 2 (مميز) -->
          <div
            class="group relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-theqa-gold/20">
            <div
              class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50">
            </div>
            <div class="absolute top-0 right-0 w-32 h-32 bg-theqa-gold/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div class="relative p-8">
              <div
                class="w-20 h-20 bg-theqa-gold/20 rounded-2xl flex items-center justify-center group-hover:bg-theqa-gold group-hover:text-primary-900 transition-all duration-500 mb-6 backdrop-blur-sm border border-theqa-gold/20 text-theqa-gold">
                <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"
                    d="M3.5 8.5L12 4l8.5 4.5L12 13z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3.5 8.5V16L12 20.5V13" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M20.5 8.5V16L12 20.5" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">خدمة الفحص المتنقل</h3>
              <p class="text-primary-200/80 leading-relaxed mb-4">
             فحص شامل للسيارة نغطى جميع أنحاء الرياض مع تسهيل إجراءات النقل
              </p>
              <ul class="space-y-2 mb-6">
                <li
                  class="flex items-center gap-2 text-sm text-primary-200/80 group-hover:text-white transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  نغطي الرياض بالكامل 
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-primary-200/80 group-hover:text-white transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                 يوجد خدمة فحص السيارة في المزادات
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-primary-200/80 group-hover:text-white transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  نقل ملكية وتأمين
                </li>
              </ul>
              <a href="/contact"
                class="inline-flex items-center gap-2 text-theqa-gold font-bold group-hover:text-white transition-all duration-300 group-hover:gap-3">
                أطلب الأن
                <span class="group-hover:translate-x-1 transition-transform">←</span>
              </a>
            </div>
          </div>

          <!-- كارد 3 -->
          <div
            class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden border border-primary-100">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-theqa-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            </div>
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-theqa-gold"></div>
            <div class="relative p-8">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-white transition-all duration-500 mb-6 shadow-lg group-hover:shadow-primary-500/30 text-primary-700">
                <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 21l2-18h2l2 18" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 13h2" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10.4 7h3.2" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary-900 mb-3">
                فحص المسافر
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                فحص مخصص قبل السفر للتأكد من سلامة السيارة على الطريق.
              </p>
              <ul class="space-y-2 mb-6">
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  فحص الزيوت والسوائل
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  فحص الكفرات والفرامل
                </li>
                <li
                  class="flex items-center gap-2 text-sm text-gray-700 group-hover:text-primary-800 transition-colors">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  فحص أدوات السلامة
                </li>
              </ul>
              <a href="/contact"
                class="inline-flex items-center gap-2 text-primary-600 font-bold group-hover:text-theqa-gold transition-all duration-300 group-hover:gap-3">
                أطلب الأن
                <span class="group-hover:translate-x-1 transition-transform">←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== INSPECTION STEPS - CAR STYLE ===== -->
    <!-- ============================================ -->
    <section class="py-24 px-4 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-theqa-gold/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div class="container mx-auto relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-flex items-center gap-2 text-theqa-gold font-bold text-sm tracking-wider bg-theqa-gold/10 px-5 py-2.5 rounded-full mb-4">
            <span class="w-1.5 h-1.5 bg-theqa-gold rounded-full"></span>
            مراحل الفحص
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-primary-900 mb-4">
            خطوات <span class="text-theqa-gold">الفحص</span> الاحترافية
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto text-lg">
            نتبع منهجية دقيقة ومتكاملة لضمان أعلى مستويات الدقة
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div v-for="(step, index) in steps" :key="index"
            class="group bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-primary-100 hover:border-theqa-gold/50 cursor-pointer">
            <div class="relative inline-block mb-3">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-800 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-primary-500/30 text-primary-700"
                v-html="step.icon"></div>
              <span
                class="absolute -top-2 -right-2 w-7 h-7 bg-theqa-gold text-primary-900 text-xs rounded-full flex items-center justify-center font-black shadow-lg">
                {{ index + 1 }}
              </span>
            </div>
            <h4 class="font-bold text-primary-800 text-sm mb-1 group-hover:text-theqa-gold transition-colors">
              {{ step.title }}
            </h4>
            <p class="text-gray-400 text-xs">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== BRAND SHOWCASE SECTION ===== -->
    <!-- ============================================ -->
    <section
      class="relative py-20 md:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 overflow-hidden flex items-center justify-center text-center">
      <div class="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-5xl font-black text-white tracking-wide mb-6 leading-tight">
            مِعـيَار الفَحص الإِحتِرَافي المـعتَمَد
          </h2>
          <div
            class="h-1 w-20 bg-gradient-to-r from-transparent via-theqa-gold to-transparent mx-auto rounded-full mb-6">
          </div>
          <p class="text-primary-200/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            في منصة <span class="text-theqa-gold font-bold">ثقة</span> نضع بين
            يديك خلاصة خبرتنا الطويلة لنضمن لك قراراً صائباً وفحصاً شاملاً.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== WHY US - 2026 STYLE ===== -->
    <!-- ============================================ -->
    <section id="why-us" class="py-24 px-4 bg-white relative">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <span
            class="inline-flex items-center gap-2 text-theqa-gold font-bold text-sm tracking-wider bg-theqa-gold/10 px-5 py-2.5 rounded-full mb-4">
            <span class="w-1.5 h-1.5 bg-theqa-gold rounded-full"></span>
            لماذا ثقة؟
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-primary-900 mb-4">
            لماذا <span class="text-theqa-gold">تتعامل</span> مع ثقة؟
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto text-lg">
            نقدم لك مزايا استثنائية تجعلنا الخيار الأمثل لفحص سيارتك
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(item, index) in whyUs" :key="index"
            class="group bg-gradient-to-br from-white to-primary-50 p-8 rounded-3xl border border-primary-100 hover:border-theqa-gold/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 text-center">
            <div
              class="flex items-center justify-center mb-4 text-primary-700 group-hover:text-theqa-gold group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
              v-html="item.icon"></div>
            <div
              class="w-12 h-1 bg-gradient-to-r from-theqa-gold to-primary-600 mx-auto rounded-full mb-3 group-hover:w-16 transition-all duration-300">
            </div>
            <h4 class="text-xl font-bold text-primary-800 mb-2 group-hover:text-theqa-gold transition-colors">
              {{ item.title }}
            </h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== TESTIMONIALS SECTION ===== -->
    <!-- ============================================ -->
    <section class="py-24 px-4 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-theqa-gold/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto relative z-10">
        <div class="text-center mb-16">
          <span
            class="inline-flex items-center gap-2 text-theqa-gold font-bold text-sm tracking-wider bg-theqa-gold/10 px-5 py-2.5 rounded-full mb-4">
            <span class="w-1.5 h-1.5 bg-theqa-gold rounded-full"></span>
            آراء العملاء
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-primary-900 mb-4">
            ماذا يقولون <span class="text-theqa-gold">عن ثقة؟</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            class="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-r-4 border-theqa-gold hover:border-r-8">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M10 1.5l2.6 5.8 6.3.6-4.8 4.2 1.4 6.2L10 15.1l-5.5 3.2 1.4-6.2L1.1 7.9l6.3-.6L10 1.5z" />
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed mb-5 text-sm italic">
              "{{ testimonial.comment }}"
            </p>
            <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div
                class="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {{ testimonial.avatar }}
              </div>
              <div>
                <h5 class="font-bold text-primary-800">
                  {{ testimonial.name }}
                </h5>
                <p class="text-gray-400 text-xs">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== CTA & WHATSAPP SECTION ===== -->
    <!-- ============================================ -->
    <section
      class="py-24 px-4 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/5 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
        <!-- جزيئات متحركة -->
        <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-theqa-gold/30 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-3 h-3 bg-theqa-gold/20 rounded-full animate-float-slow"
          style="animation-delay: 1.5s"></div>
        <div class="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-float-slow"
          style="animation-delay: 3s"></div>
      </div>

      <div class="container mx-auto text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-4">
          مستعد لفحص <span class="text-theqa-gold">سيارتك</span> بثقة؟
        </h2>
        <p class="text-primary-200/80 text-lg mb-10 max-w-2xl mx-auto">
          تواصل معنا الآن واحصل على فحص شامل ودقيق مع تقرير مفصل
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="/contact"
            class="group bg-theqa-gold hover:bg-yellow-500 text-primary-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-theqa-gold/30 hover:shadow-theqa-gold/50 hover:scale-105 inline-flex items-center gap-2">
            تواصل معنا
            <span class="group-hover:translate-x-1 transition-transform">←</span>
          </a>

          <!-- واتساب -->
          <a href="https://wa.me/+966533000983?text=أهلاً%20بكم%20في%20ثقة%20لفحص%20السيارات%20أريد%20الاستفسار%20عن%20خدماتكم"
            target="_blank"
            class="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 inline-flex items-center gap-3">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52 -.075 -.149 -.669 -1.612 -.916 -2.207 -.242 -.579 -.487 -.5 -.669 -.51 -.173 -.008 -.371 -.0１ -.5７ -.０１ -.１９８ ０ -.５２ .０７４ -.７９２ .３７２ -.２７２ .２９７ -１．０４ １．０１６ -１．０４ ２．４７９ ０ １．４６２ １．０６５ ２．８７５ １．２１３ ３．０７４．１４９．１９８ ２．０９６ ３．２ ５．０７７ ４．４８７．７０９．３０６ １．２６２．４８９ １．６９４．６２５．７１２．２２７ １．３６．１９５ １．８７１．１１８．５７１－．０８５ １．７５８－．７１９ ２．００６－１．４¹³－．０⁷⁴－．¹²⁴－．²⁷²－．¹⁹⁸－．⁵⁷－．³⁴⁷z" />
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            واتساب
          </a>
        </div>

        <!-- رقم واتساب للتواصل -->
        <div class="mt-6 text-primary-300/50 text-sm">
          <span class="flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +2 +966533000983
          </span>
        </div>
      </div>

      <!-- لوجو واتساب ثابت في الأسفل -->
      <a href="https://wa.me/966533000983?text=أهلاً%20بكم%20في%20ثقة%20لفحص%20السيارات%20أريد%20الاستفسار%20عن%20خدماتكم"
        target="_blank" class="fixed bottom-6 left-6 z-50 group">
        <div class="relative">
          <div
            class="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse">
          </div>
          <div
            class="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 flex items-center justify-center">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            <span
              class="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></span>
          </div>
          <span
            class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#25D366] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            تواصل الآن
          </span>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
// بيانات مراحل الفحص (أيقونات SVG حديثة بدل الإيموجي)
const steps = [
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14 3v4h4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12h6M9 15.5h6M9 8.5h2"/></svg>',
    title: "تسجيل بيانات المركبة",
    description: "تسجيل كامل البيانات",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 13h2.5l1.5-3h4l1.5 3H16"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M16 13h2a2 2 0 012 2v2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6.5 13v5a1 1 0 001 1h9a1 1 0 001-1v-1"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 19v1.5M14 19v1.5"/></svg>',
    title: "فحص ميكانيكا المحرك والقير",
    description: "فحص شامل للمحرك",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 5h16v10H4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 19h6"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15v4"/></svg>',
    title: "فحص الحساسات بالكمبيوتر",
    description: "فحص إلكتروني دقيق",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 3l8 4v5c0 5.25-3.5 8.5-8 10-4.5-1.5-8-4.75-8-10V7l8-4z"/></svg>',
    title: "فحص سلامة الوسائد الهوائية",
    description: "فحص الأمان",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 17l2-7h14l2 7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 17h14"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 10V6h8v4"/></svg>',
    title: "فحص ميكانيكا أسفل السيارة",
    description: "فحص القاعدة",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z"/></svg>',
    title: "فحص الزيوت والسوائل",
    description: "فحص السوائل والتسريبات",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke-width="1.75"/><circle cx="12" cy="12" r="3" stroke-width="1.75"/></svg>',
    title: "فحص أنظمة الفرامل والتعليق",
    description: "فحص الفرامل",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 16l1.5-5.5A2 2 0 016.4 9h11.2a2 2 0 011.9 1.5L21 16"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 16h18v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 9V6h10v3"/></svg>',
    title: "فحص الهيكل والسمكرة",
    description: "فحص الهيكل",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 4h8v6H6z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 10v9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14 10l3 2v7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 19h11"/></svg>',
    title: "فحص الديكور والداخلية",
    description: "فحص المقصورة",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke-width="1.75"/><circle cx="12" cy="12" r="3" stroke-width="1.75"/><path stroke-linecap="round" stroke-width="1.75" d="M12 4v2M12 18v2M5.6 6.6l1.4 1.4M17 16l1.4 1.4M4 12h2M18 12h2M5.6 17.4l1.4-1.4M17 8l1.4-1.4"/></svg>',
    title: "فحص سلامة الإطارات",
    description: "فحص الكفرات",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke-width="1.75"/><circle cx="12" cy="12" r="4" stroke-width="1.75"/><path stroke-linecap="round" stroke-width="1.75" d="M12 4v4M5.6 17.4L8.5 14.5M18.4 17.4l-2.9-2.9"/></svg>',
    title: "تجربة المركبة على الطريق",
    description: "اختبار القيادة",
  },
  {
    icon: '<svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14 3v4h4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12h6M9 15.5h6M9 8.5h2"/></svg>',
    title: "طباعة التقرير وشرحه",
    description: "تقرير مفصل",
  },
];

// بيانات لماذا ثقة (أيقونات SVG حديثة بدل الإيموجي)
const whyUs = [
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 4h8v4a4 4 0 01-8 0V4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 6H4.5A1.5 1.5 0 003 7.5 3.5 3.5 0 006.5 11M18 6h1.5A1.5 1.5 0 0121 7.5 3.5 3.5 0 0117.5 11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10 13.8V16h4v-2.2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 20h8M9 16h6v4H9z"/></svg>',
    title: "خبرة أكثر من 12 عاماً",
    description: "تمتد خبرتنا لأكثر من 12 عامًا في فحص السيارات بدقة استثنائية",
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 16l1.4-5.6A2 2 0 017.3 9h9.4a2 2 0 011.9 1.4L20 16"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 16h16v2.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V17H7v1.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V16z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M8 13h2M14 13h2"/></svg>',
    title: "فحص جميع السيارات",
    description:
      "نفحص جميع أنواع السيارات الكبيرة والصغيرة سواء تعمل بالبنزين أو الكهرباء",
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 9h16v3H4z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 12h14v8H5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 9v11"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 9c-1-2.5-4-3-5-1.5S8 9 12 9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 9c1-2.5 4-3 5-1.5S16 9 12 9z"/></svg>',
    title: "نقاط ولاء للعملاء",
    description: "كل زيارة تحصل على رصيد مجاني تستفيد منه في الفحص القادم",
  },
  {
    icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12.75l1.5 1.5L15 9.75M12 3l8 4v5c0 5.25-3.5 8.5-8 10-4.5-1.5-8-4.75-8-10V7l8-4z"/></svg>',
    title: "ضمان صحة التقارير",
    description: "التزامًا بالجودة نقدم ضمانًا لسلامة وصحة نتائج تقاريرنا",
  },
];

const testimonials = [
  {
    name: "عبد الله الشافعي",
    avatar: "ع",
    role: "عميل متميز",
    comment: "ما شاء الله تبارك الله، فحص بذمة وأمانة وعطاني الصدق من الآخر! فحص كل صغيرة وكبيرة بالسيارة وطلّع صدمات وعيوب حتى راعيها نفسه ما كان يدري عنها. بجد وفّر عليّ فلوس كثيرة كانت بتروح هدر، بيّض الله وجهك يا مهندس ثامر وما قصرت."
  },
  
  {
    name: "محمد مصطفى",
    avatar: "م",
    role: "عميل متميز",
    comment:
      "خدمة ممتازة وفريق عمل محترف وعلى أعلى مستوى. التقرير الفني اللي استلمته كان مفصل جداً وموضح بالصور والفيديو لكل جزء في الموتور والعفشة، وده ساعدني أخد القرار الصح وأنا مطمن ومن غير أي تردد.",
  },
  {
    name: "كريم المنشاوي",
    avatar: "ك",
    role: "عميل متميز",
    comment:
      "أفضل مركز فحص سيارات في القاهرة بلا منازع. دقة وأمانة وسرعة في التعامل، والمهندسين هناك فاهمين شغلهم بجد وبيشرحوا كل تفصيلة للمشتري. أنصح أي حد عاوز يشتري عربية مستعملة يروح ليهم وهو متطمن.",
  },
];

</script>

<style scoped>
/* ===== ANIMATIONS ===== */
@keyframes slow-zoom {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes bounce-slow {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== CLASSES ===== */
.animate-slow-zoom {
  animation: slow-zoom 20s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 30s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

/* ===== SCROLL MARGIN ===== */
section {
  scroll-margin-top: 80px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: 100vh;
  }

  .text-7xl {
    font-size: 3rem;
  }
}
</style>
