<template>
  <div class="min-h-screen flex flex-col bg-slate-50 font-arabic" dir="rtl">
    
    <!-- شريط التنقل العلوي (الهيدر) -->
    <AppHeader />

    <!-- المحتوى المتغير لكل صفحة -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- الفوتر السفلي للموقع -->
    <AppFooter />

  </div>
</template>

<script setup lang="ts">
// استدعاء صريح للمكونات لضمان القراءة الفورية ومقاومة أخطاء الكاش
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
