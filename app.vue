<template>
  <div>
    <!-- استدعاء نظام التخطيطات العام للموقع -->
    <NuxtLayout>
      <!-- حقن محتويات الصفحات مثل index.vue -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// لا تحتاج لكتابة أي كود هنا حاليًا
</script>

<style>
/* تأثيرات حركية خفيفة وسلسة عند التنقل بين الصفحات */
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
