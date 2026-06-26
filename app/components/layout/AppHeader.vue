<template>
  <header class="bg-primary-800 shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- اللوجو -->
      <div class="flex items-center gap-2">
        <img src="/logo.svg" alt="ثقة" class="h-12 w-auto" />
        <span class="text-white text-2xl font-bold tracking-wider">ثقة</span>
        <span class="bg-theqa-gold text-primary-900 text-xs px-2 py-1 rounded-full font-bold">✓</span>
      </div>

      <!-- الروابط -->
      <ul class="hidden md:flex gap-8 text-white font-medium">
        <li><NuxtLink to="/" class="hover:text-theqa-gold transition">الرئيسية</NuxtLink></li>
        <li><NuxtLink to="/services/pre-purchase" class="hover:text-theqa-gold transition">خدماتنا</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-theqa-gold transition">تواصل معنا</NuxtLink></li>
      </ul>

      <!-- زر طلب الخدمة -->
      <div class="hidden md:block">
        <a href="#services" class="bg-theqa-gold text-primary-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
          أطلب الأن
        </a>
      </div>

      <!-- Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden text-white text-2xl">
        ☰
      </button>
    </nav>

    <!-- القائمة المنسدلة -->
    <div v-if="isMenuOpen" class="md:hidden bg-primary-900 py-4 px-4 border-t border-primary-700">
      <ul class="flex flex-col gap-3 text-white text-center">
        <li><NuxtLink to="/" class="hover:text-theqa-gold block py-2" @click="closeMenu">الرئيسية</NuxtLink></li>
        <li><NuxtLink to="/services/pre-purchase" class="hover:text-theqa-gold block py-2" @click="closeMenu">خدماتنا</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-theqa-gold block py-2" @click="closeMenu">تواصل معنا</NuxtLink></li>
        <li><a href="#services" class="bg-theqa-gold text-primary-900 px-6 py-2 rounded-full font-bold inline-block" @click="closeMenu">أطلب الأن</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>