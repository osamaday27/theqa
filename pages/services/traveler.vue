<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32 overflow-x-hidden">

    <!-- ===== HERO ===== -->
    <section class="relative py-16 md:py-24 bg-gradient-to-r from-primary-900 via-primary-900 to-primary-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
        <div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(rgba(212,175,55,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.6) 1px, transparent 1px); background-size: 48px 48px;"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] border border-white/5 rounded-full animate-spin-slow" style="animation-direction: reverse; animation-duration: 22s;"></div>
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-theqa-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>
        <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-theqa-gold/40 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-slow" style="animation-delay: 1.5s;"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-5">
          <span class="relative flex w-2 h-2">
            <span class="absolute inset-0 bg-theqa-gold rounded-full animate-ping"></span>
            <span class="relative w-2 h-2 bg-theqa-gold rounded-full"></span>
          </span>
          <span class="text-white/80 text-sm font-medium">خدماتنا</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          فحص <span class="text-theqa-gold">المسافر</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          فحص مخصص قبل السفر للتأكد من سلامة السيارة على الطريق
        </p>
      </div>
    </section>

    <!-- ===== CONTENT ===== -->
    <section class="py-16 md:py-20 relative">
      <div class="absolute top-1/4 right-0 w-72 h-72 bg-theqa-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-12">

          <!-- ===== CHECK ITEMS ===== -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6 flex items-center gap-2.5">
              <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
              ماذا يشمل الفحص؟
            </h2>

            <div class="grid sm:grid-cols-2 gap-3">
              <div v-for="(item, index) in checkItems" :key="index"
                   class="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-theqa-gold/30 hover:bg-primary-50 hover:shadow-md transition-all duration-300">
                <span class="w-9 h-9 bg-theqa-gold/10 rounded-lg flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </span>
                <span class="text-gray-700 text-sm font-medium">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- ===== SIDEBAR ===== -->
          <div class="space-y-6">
            <div class="relative bg-gradient-to-br from-primary-50 to-white rounded-[1.75rem] p-8 border border-gray-100 overflow-hidden">
              <div class="absolute -top-8 -right-8 w-40 h-40 bg-theqa-gold/5 rounded-full blur-3xl"></div>
              <h3 class="relative text-xl font-bold text-primary-900 mb-5 flex items-center gap-2.5">
                <span class="w-9 h-9 bg-theqa-gold/15 rounded-lg flex items-center justify-center text-theqa-gold flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 21l2-18h2l2 18"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 13h2"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10.4 7h3.2"/>
                  </svg>
                </span>
                نصائح السفر
              </h3>
              <ul class="relative space-y-3 text-sm text-gray-600">
                <li v-for="(tip, i) in tips" :key="i" class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-theqa-gold mt-1.5 flex-shrink-0"></span>
                  {{ tip }}
                </li>
              </ul>
            </div>

            <NuxtLink
              to="/contact"
              class="group block text-center bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-theqa-gold/30 hover:shadow-theqa-gold/50"
            >
              <span class="inline-flex items-center gap-2">
                احجز الفحص الآن
                <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8l-4 4m0 0l4 4m-4-4h18"/></svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const checkItems = [
  'فحص الزيوت والسوائل',
  'فحص الكفرات والفرامل',
  'فحص الأنوار والإشارات',
  'فحص أدوات السلامة',
  'فحص المساحات والزجاج',
  'فحص نظام التبريد',
  'فحص البطارية والشحن',
  'فحص نظام التوجيه',
  'فحص المحرك والأداء',
  'تجربة السيارة على الطريق'
]

const tips = [
  'تأكد من صلاحية الإطارات',
  'افحص مستويات الزيوت',
  'تأكد من أدوات السلامة',
  'احمل مستندات السيارة'
]
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.08); }
}
@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow, .animate-pulse-slow, .animate-spin-slow, .animate-fade-in-up {
    animation: none !important;
  }
}
</style>