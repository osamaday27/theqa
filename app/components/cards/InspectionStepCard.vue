<template>
  <div class="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center transition hover:shadow-lg hover:scale-105 duration-300 border border-primary-100">
    <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-3xl mb-4">
      <slot name="icon">🔍</slot>
    </div>
    <h4 class="font-bold text-primary-800 text-lg"><slot name="title">الخطوة</slot></h4>
    <p class="text-gray-500 text-sm mt-1"><slot name="description">وصف مختصر</slot></p>
  </div>
</template>