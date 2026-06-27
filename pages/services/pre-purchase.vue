<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32">
    
    <!-- ===== HERO ===== -->
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
          فحص <span class="text-theqa-gold">ما قبل الشراء</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          فحص شامل ودقيق لجميع أجزاء المركبة قبل اتخاذ قرار الشراء
        </p>
      </div>
    </section>

    <!-- ===== CONTENT ===== -->
    <section class="py-16 md:py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <!-- ===== FEATURES ===== -->
          <div class="lg:col-span-2 space-y-8">
            <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
                ماذا يشمل الفحص؟
              </h2>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="(item, index) in inspectionItems" :key="index" 
                     class="flex items-start gap-3 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300 group cursor-pointer">
                  <span class="w-8 h-8 bg-theqa-gold/10 rounded-full flex items-center justify-center text-theqa-gold text-sm font-bold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                    ✓
                  </span>
                  <p class="text-gray-700 font-medium">{{ item }}</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 class="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                📋 التقرير
              </h3>
              <ul class="space-y-3">
                <li class="flex items-center gap-3 text-gray-700">
                  <span class="text-theqa-gold">▸</span>
                  تقرير مفصل بجميع النتائج
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <span class="text-theqa-gold">▸</span>
                  فيديو توضيحي لحالة السيارة
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <span class="text-theqa-gold">▸</span>
                  توصيات ونصائح للشراء
                </li>
                <li class="flex items-center gap-3 text-gray-700">
                  <span class="text-theqa-gold">▸</span>
                  تقييم عام للسيارة
                </li>
              </ul>
            </div>
          </div>

          <!-- ===== SIDEBAR ===== -->
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-theqa-gold/10 to-yellow-500/5 rounded-3xl p-8 border border-theqa-gold/20 text-center">
              <div class="text-5xl mb-4">🔍</div>
              <h4 class="text-xl font-bold text-primary-900 mb-2">احجز فحصك الآن</h4>
              <p class="text-gray-500 text-sm mb-6">احصل على تقرير مفصل قبل الشراء</p>
              <NuxtLink 
                to="/contact" 
                class="inline-block bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-theqa-gold/30"
              >
                أطلب الأن
              </NuxtLink>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
              <h5 class="font-bold text-primary-900 mb-4 flex items-center gap-2">
                <span class="text-theqa-gold">💡</span>
                نصائح مهمة
              </h5>
              <ul class="space-y-3 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  تأكد من فحص جميع الأجزاء
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  استفسر عن تاريخ الصيانة
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-theqa-gold">•</span>
                  قم بتجربة القيادة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const inspectionItems = [
  'فحص المحرك والقير',
  'فحص الهيكل والسمكرة',
  'فحص الفرامل والتعليق',
  'فحص الحساسات الإلكترونية',
  'فحص الزيوت والسوائل',
  'فحص الإطارات والعجلات',
  'فحص الديكور والداخلية',
  'فحص الوسائد الهوائية',
  'فحص أنظمة التبريد',
  'فحص العادم والأداء',
  'فحص نظام التوجيه',
  'فحص البطارية والكهرباء'
]
</script>