<template>
  <div class="min-h-screen flex flex-col bg-white font-arabic">
    <!-- استدعاء الهيدر باسمه المباشر -->
    <AppHeader />
    
    <!-- محتوى الصفحات الفرعية والصفحة الرئيسية -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- استدعاء الفوتر باسمه المباشر -->
    <AppFooter />
  </div>
</template>
