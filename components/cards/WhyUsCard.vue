<template>
  <div class="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-md border border-primary-200 text-center transition hover:shadow-xl">
    <div class="text-4xl mb-3"><slot name="icon">⭐</slot></div>
    <h4 class="text-xl font-bold text-primary-800"><slot name="title">ميزة</slot></h4>
    <p class="text-gray-600 mt-2 text-sm leading-relaxed"><slot name="description">وصف الميزة</slot></p>
  </div>
</template>