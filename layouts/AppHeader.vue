<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm transition-all duration-300">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- اللوجو -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <div class="relative">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <span class="text-2xl font-black text-theqa-gold">ث</span>
            </div>
            <span class="absolute -top-1 -right-1 w-5 h-5 bg-theqa-gold rounded-full flex items-center justify-center text-[10px] text-primary-900 font-black border-2 border-white shadow-md">✓</span>
          </div>
          <div class="hidden sm:block">
            <span class="text-2xl font-black text-primary-900 leading-none">ثقة</span>
            <span class="block text-[10px] text-theqa-gold font-bold tracking-wider">فحص احترافي</span>
          </div>
        </div>

        <!-- الروابط - ديسكتوب -->
        <ul class="hidden lg:flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <NuxtLink 
              :to="link.path" 
              class="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-900 transition-all duration-300 rounded-full hover:bg-primary-50 group"
              active-class="text-primary-900 bg-primary-50"
            >
              {{ link.name }}
              <span class="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-theqa-gold to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- أزرار اليمين -->
        <div class="flex items-center gap-3">
          <a 
            href="https://wa.me/201090718857?text=أهلاً%20بكم%20في%20ثقة%20لحص%20السيارات" 
            target="_blank"
            class="hidden sm:flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
            </svg>
            <span class="hidden xl:inline">واتساب</span>
          </a>

          <NuxtLink 
            to="/contact" 
            class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-theqa-gold/25 hover:shadow-theqa-gold/40 hover:scale-105 transition-all duration-300"
          >
            <span>أطلب الأن</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>

          <!-- زر القائمة - موبايل -->
          <button 
            @click="toggleMenu" 
            class="lg:hidden p-2.5 rounded-xl hover:bg-primary-50 transition-colors relative"
            aria-label="القائمة"
          >
            <div class="w-6 h-5 flex flex-col justify-between">
              <span class="block w-full h-0.5 bg-primary-800 rounded-full transition-all duration-300" :class="{'rotate-45 translate-y-2': isOpen}"></span>
              <span class="block w-full h-0.5 bg-primary-800 rounded-full transition-all duration-300" :class="{'opacity-0': isOpen}"></span>
              <span class="block w-full h-0.5 bg-primary-800 rounded-full transition-all duration-300" :class="{'-rotate-45 -translate-y-2': isOpen}"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- القائمة المنسدلة - موبايل -->
      <div 
        v-show="isOpen" 
        class="lg:hidden py-4 border-t border-gray-100/50 animate-slide-down"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <NuxtLink 
              :to="link.path" 
              class="block px-4 py-3 text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
              @click="isOpen = false"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
          <li class="border-t border-gray-100/50 mt-2 pt-2">
            <NuxtLink 
              to="/contact" 
              class="block text-center bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-6 py-3 rounded-xl font-bold transition-all duration-300"
              @click="isOpen = false"
            >
              أطلب الأن
            </NuxtLink>
          </li>
          <li>
            <a 
              href="https://wa.me/201090718857?text=أهلاً%20بكم%20في%20ثقة%20لحص%20السيارات" 
              target="_blank"
              class="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-xl font-bold transition-all duration-300"
              @click="isOpen = false"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.528 3.659 1.448 5.177L2.25 22l4.835-1.197C8.342 21.472 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.795 0-3.439-.536-4.842-1.454l-.348-.206-3.547.879.94-3.493-.216-.357A8.034 8.034 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              تواصل عبر واتساب
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'خدماتنا', path: '/services/pre-purchase' },
  { name: 'تواصل معنا', path: '/contact' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out forwards;
}
</style>