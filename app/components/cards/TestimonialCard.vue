<template>
  <div class="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-theqa-gold relative">
    <div class="text-6xl text-primary-200 absolute -top-4 right-4">"</div>
    <p class="text-gray-700 leading-relaxed mb-4 relative z-10">
      <slot name="comment">التعليق</slot>
    </p>
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
        <slot name="avatar">ع</slot>
      </div>
      <div>
        <h5 class="font-bold text-primary-800"><slot name="name">الاسم</slot></h5>
        <div class="text-yellow-400 text-sm">★★★★★</div>
      </div>
    </div>
  </div>
</template>