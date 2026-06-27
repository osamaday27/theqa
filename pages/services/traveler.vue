<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32">
    
    <section class="relative py-16 md:py-20 bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-4">
          <span class="w-2 h-2 bg-theqa-gold rounded-full animate-pulse"></span>
          <span class="text-white/80 text-sm font-medium">خدماتنا</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-white mb-4">
          فحص <span class="text-theqa-gold">المسافر</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          فحص مخصص قبل السفر للتأكد من سلامة السيارة على الطريق
        </p>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6 flex items-center gap-2">
              <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
              ماذا يشمل الفحص؟
            </h2>
            
            <div class="grid gap-4">
              <div v-for="(item, index) in checkItems" :key="index" 
                   class="flex items-center gap-3 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300">
                <span class="w-8 h-8 bg-theqa-gold/10 rounded-full flex items-center justify-center text-theqa-gold text-sm flex-shrink-0">✓</span>
                <span class="text-gray-700">{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 class="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                🛣️ نصائح السفر
              </h3>
              <ul class="space-y-3 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  تأكد من صلاحية الإطارات
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  افحص مستويات الزيوت
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  تأكد من أدوات السلامة
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  احمل مستندات السيارة
                </li>
              </ul>
            </div>

            <NuxtLink 
              to="/contact" 
              class="block text-center bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-theqa-gold/30"
            >
              احجز الفحص الآن
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
</script>