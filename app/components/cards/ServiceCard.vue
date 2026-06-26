<template>
  <div class="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border-t-4 border-primary-500 group hover:-translate-y-2">
    <div class="p-6 bg-primary-50 flex justify-center items-center h-32">
      <slot name="icon">
        <div class="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-3xl">
          🔧
        </div>
      </slot>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-primary-800 mb-3">
        <slot name="title">عنوان الخدمة</slot>
      </h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        <slot name="description">وصف الخدمة</slot>
      </p>

      <ul class="space-y-2 mb-6">
        <li v-for="(point, index) in points" :key="index" class="flex items-start gap-2 text-sm text-gray-700">
          <span class="text-theqa-gold mt-0.5">✓</span>
          {{ point }}
        </li>
      </ul>

      <NuxtLink to="/contact" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-full transition shadow-md hover:shadow-lg">
        أطلب الأن
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  points: string[]
}>()
</script>