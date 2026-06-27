<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm transition-all duration-300">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- ===== LOGO ===== -->
        <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0 group">
          <div class="relative">
            <div class="w-20 h-17 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="شعار منصة ثقة لفحص السيارات" 
                class="w-full h-full object-contain"
              />
            </div>
            <span class="absolute -top-0.5 -right-0.5 w-5 h-5 bg-theqa-gold rounded-full flex items-center justify-center text-[10px] text-primary-900 font-black border-2 border-white shadow-md">✓</span>
          </div>
          <div class="hidden sm:block">
            <span class="text-2xl font-black text-primary-900 leading-none block">ثقة</span>
            <span class="block text-[10px] text-theqa-gold font-bold tracking-wider mt-1">فحص احترافي للسيارات</span>
          </div>
        </NuxtLink>

        <!-- ===== SEARCH BAR - DESKTOP ===== -->
        <div class="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <div class="relative w-full group">
            <input 
              type="text"
              v-model="searchQuery"
              placeholder="ابحث عن خدمات الفحص..."
              class="w-full py-2.5 px-5 pr-12 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-theqa-gold focus:bg-white focus:outline-none transition-all duration-300 text-sm placeholder:text-gray-400"
              @keyup.enter="handleSearch"
            />
            <button 
              @click="handleSearch"
              class="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-theqa-gold transition-colors duration-300"
            >
              <!-- أيقونة بحث -->
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
            <!-- نتائج البحث -->
            <div v-if="searchQuery && searchResults.length > 0" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
              <div v-for="result in searchResults" :key="result.id" class="px-4 py-3 hover:bg-primary-50 cursor-pointer transition-colors duration-200 border-b border-gray-50 last:border-0">
                <NuxtLink :to="result.path" class="flex items-center gap-3">
                  <span class="w-8 h-8 flex items-center justify-center text-theqa-gold" v-html="result.icon"></span>
                  <div>
                    <p class="font-medium text-primary-800 text-sm">{{ result.title }}</p>
                    <p class="text-gray-400 text-xs">{{ result.description }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== NAVIGATION LINKS ===== -->
        <ul class="hidden lg:flex items-center gap-1">
          
          <!-- ===== الرابط الرئيسي ===== -->
          <li>
            <NuxtLink 
              to="/" 
              class="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-900 transition-all duration-300 rounded-full hover:bg-primary-50 group"
              active-class="text-primary-900 bg-primary-50"
            >
              الرئيسية
              <span class="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-theqa-gold to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </NuxtLink>
          </li>

          <!-- ===== الخدمات والأسعار - DROPDOWN ===== -->
          <li class="relative group">
            <button 
              @click="toggleServicesDropdown"
              @mouseenter="openDropdown"
              @mouseleave="closeDropdown"
              class="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-900 transition-all duration-300 rounded-full hover:bg-primary-50 flex items-center gap-1.5 group"
              :class="{'text-primary-900 bg-primary-50': isServicesOpen}"
            >
              <span>الخدمات والأسعار</span>
              <svg 
                class="w-4 h-4 transition-transform duration-300"
                :class="{'rotate-180': isServicesOpen}"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span class="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-theqa-gold to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </button>

            <!-- ===== DROPDOWN MENU ===== -->
            <div 
              v-show="isServicesOpen"
              @mouseenter="openDropdown"
              @mouseleave="closeDropdown"
              class="absolute top-full right-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-down z-50"
            >
              <div class="py-2">
                <!-- فحص ما قبل الشراء -->
                <NuxtLink 
                  to="/services/pre-purchase"
                  class="flex items-center gap-4 px-5 py-3 hover:bg-primary-50 transition-all duration-200 group"
                  @click="closeDropdown"
                >
                  <span class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300">
                    <!-- أيقونة فحص -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </span>
                  <div>
                    <p class="font-bold text-primary-800 text-sm group-hover:text-theqa-gold transition-colors">فحص ما قبل الشراء</p>
                    <p class="text-gray-400 text-xs">فحص شامل قبل اتخاذ قرار الشراء</p>
                  </div>
                </NuxtLink>

                <!-- خدمة مخدوم -->
                <NuxtLink 
                  to="/services/makdoum"
                  class="flex items-center gap-4 px-5 py-3 hover:bg-primary-50 transition-all duration-200 group"
                  @click="closeDropdown"
                >
                  <span class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300">
                    <!-- أيقونة خدمة مخدوم -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l9-4 9 4M3 7l9 4 9-4M3 7v10l9 4 9-4V7"/>
                    </svg>
                  </span>
                  <div>
                    <p class="font-bold text-primary-800 text-sm group-hover:text-theqa-gold transition-colors">خدمة مخدوم</p>
                    <p class="text-gray-400 text-xs">فحص خارج المدن مع نقل الملكية</p>
                  </div>
                </NuxtLink>

                <!-- فحص المسافر -->
                <NuxtLink 
                  to="/services/traveler"
                  class="flex items-center gap-4 px-5 py-3 hover:bg-primary-50 transition-all duration-200 group"
                  @click="closeDropdown"
                >
                  <span class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white transition-all duration-300">
                    <!-- أيقونة مسافر -->
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </span>
                  <div>
                    <p class="font-bold text-primary-800 text-sm group-hover:text-theqa-gold transition-colors">فحص المسافر</p>
                    <p class="text-gray-400 text-xs">فحص مخصص قبل السفر</p>
                  </div>
                </NuxtLink>

                <!-- خط فاصل -->
                <div class="border-t border-gray-100 my-2"></div>

                <!-- عرض جميع الخدمات -->
                <NuxtLink 
                  to="#services"
                  class="flex items-center justify-center gap-2 mx-4 py-2.5 bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-theqa-gold/20"
                  @click="closeDropdown"
                >
                  <span>عرض جميع الخدمات</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </li>

          <!-- ===== تواصل معنا ===== -->
          <li>
            <NuxtLink 
              to="/contact" 
              class="relative px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-900 transition-all duration-300 rounded-full hover:bg-primary-50 group"
              active-class="text-primary-900 bg-primary-50"
            >
              تواصل معنا
              <span class="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-theqa-gold to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- ===== RIGHT BUTTONS ===== -->
        <div class="flex items-center gap-3">
          
          <!-- زر البحث - موبايل -->
          <button 
            @click="toggleSearchMobile"
            class="lg:hidden p-2.5 rounded-xl hover:bg-primary-50 transition-colors relative"
            aria-label="بحث"
          >
            <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>

          <!-- واتساب -->
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

          <!-- طلب الآن -->
          <NuxtLink 
            to="/contact" 
            class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-theqa-gold/25 hover:shadow-theqa-gold/40 hover:scale-105 transition-all duration-300"
          >
            <span>أطلب الآن</span>
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

      <!-- ===== SEARCH BAR - MOBILE ===== -->
      <div 
        v-show="isSearchMobileOpen"
        class="lg:hidden py-4 border-t border-gray-100/50 animate-slide-down"
      >
        <div class="relative w-full group">
          <input 
            type="text"
            v-model="searchQuery"
            placeholder="ابحث عن خدمات الفحص..."
            class="w-full py-3 px-5 pr-12 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-theqa-gold focus:bg-white focus:outline-none transition-all duration-300 text-sm placeholder:text-gray-400"
            @keyup.enter="handleSearch"
            ref="mobileSearchInput"
          />
          <button 
            @click="handleSearch"
            class="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-theqa-gold transition-colors duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          <div v-if="searchQuery && searchResults.length > 0" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            <div v-for="result in searchResults" :key="result.id" class="px-4 py-3 hover:bg-primary-50 cursor-pointer transition-colors duration-200 border-b border-gray-50 last:border-0">
              <NuxtLink :to="result.path" class="flex items-center gap-3" @click="closeSearch">
                <span class="w-8 h-8 flex items-center justify-center text-theqa-gold" v-html="result.icon"></span>
                <div>
                  <p class="font-medium text-primary-800 text-sm">{{ result.title }}</p>
                  <p class="text-gray-400 text-xs">{{ result.description }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== MOBILE DROPDOWN MENU ===== -->
      <div 
        v-show="isOpen" 
        class="lg:hidden py-4 border-t border-gray-100/50 animate-slide-down"
      >
        <ul class="flex flex-col gap-1">
          <li>
            <NuxtLink 
              to="/" 
              class="block px-4 py-3 text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
              @click="isOpen = false"
            >
              الرئيسية
            </NuxtLink>
          </li>
          
          <!-- ===== SERVICES - MOBILE ===== -->
          <li>
            <button 
              @click="toggleMobileServices"
              class="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
            >
              <span>الخدمات والأسعار</span>
              <svg 
                class="w-4 h-4 transition-transform duration-300"
                :class="{'rotate-180': isMobileServicesOpen}"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            
            <!-- الخدمات الفرعية - موبايل -->
            <div v-show="isMobileServicesOpen" class="mr-4 space-y-1 border-r-2 border-theqa-gold/30 pr-3">
              <NuxtLink 
                to="/services/pre-purchase" 
                class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200"
                @click="isOpen = false"
              >
                <!-- أيقونة فحص -->
                <svg class="w-4 h-4 text-theqa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                فحص ما قبل الشراء
              </NuxtLink>
              <NuxtLink 
                to="/services/makdoum" 
                class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200"
                @click="isOpen = false"
              >
                <!-- أيقونة خدمة مخدوم -->
                <svg class="w-4 h-4 text-theqa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l9-4 9 4M3 7l9 4 9-4M3 7v10l9 4 9-4V7"/>
                </svg>
                خدمة مخدوم
              </NuxtLink>
              <NuxtLink 
                to="/services/traveler" 
                class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200"
                @click="isOpen = false"
              >
                <!-- أيقونة مسافر -->
                <svg class="w-4 h-4 text-theqa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                فحص المسافر
              </NuxtLink>
            </div>
          </li>

          <li>
            <NuxtLink 
              to="/contact" 
              class="block px-4 py-3 text-gray-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 font-medium"
              @click="isOpen = false"
            >
              تواصل معنا
            </NuxtLink>
          </li>

          <li class="border-t border-gray-100/50 mt-2 pt-2">
            <NuxtLink 
              to="/contact" 
              class="block text-center bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-6 py-3 rounded-xl font-bold transition-all duration-300"
              @click="isOpen = false"
            >
              أطلب الآن
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
// ===== STATE =====
const isOpen = ref(false)
const isSearchMobileOpen = ref(false)
const isServicesOpen = ref(false)
const isMobileServicesOpen = ref(false)
const searchQuery = ref('')
const dropdownTimer = ref<NodeJS.Timeout | null>(null)

// ===== SEARCH DATA - مع أيقونات SVG =====
const searchData = [
  { 
    id: 1, 
    title: 'فحص الشراء', 
    description: 'فحص شامل قبل الشراء', 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`, 
    path: '/services/pre-purchase' 
  },
  { 
    id: 2, 
    title: 'خدمة مخدوم', 
    description: 'فحص خارج المدن', 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l9-4 9 4M3 7l9 4 9-4M3 7v10l9 4 9-4V7"/></svg>`, 
    path: '/services/makdoum' 
  },
  { 
    id: 3, 
    title: 'فحص المسافر', 
    description: 'فحص قبل السفر', 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`, 
    path: '/services/traveler' 
  },
  { 
    id: 4, 
    title: 'تواصل معنا', 
    description: 'احجز موعد فحص', 
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`, 
    path: '/contact' 
  },
]

// ===== COMPUTED =====
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  const query = searchQuery.value.toLowerCase().trim()
  return searchData.filter(item => 
    item.title.includes(query) || 
    item.description.includes(query)
  )
})

// ===== METHODS =====
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleServicesDropdown = () => {
  isServicesOpen.value = !isServicesOpen.value
}

const toggleMobileServices = () => {
  isMobileServicesOpen.value = !isMobileServicesOpen.value
}

const openDropdown = () => {
  if (dropdownTimer.value) {
    clearTimeout(dropdownTimer.value)
    dropdownTimer.value = null
  }
  isServicesOpen.value = true
}

const closeDropdown = () => {
  dropdownTimer.value = setTimeout(() => {
    isServicesOpen.value = false
  }, 200)
}

const toggleSearchMobile = () => {
  isSearchMobileOpen.value = !isSearchMobileOpen.value
  if (isSearchMobileOpen.value) {
    nextTick(() => {
      const input = document.querySelector('[ref="mobileSearchInput"]') as HTMLInputElement
      if (input) input.focus()
    })
  }
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value)
  }
}

const closeSearch = () => {
  searchQuery.value = ''
  isSearchMobileOpen.value = false
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

input:focus {
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
}
</style>