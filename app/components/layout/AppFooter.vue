<template>
  <footer class="bg-primary-900 text-white pt-12 pb-6 px-4">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 class="text-2xl font-bold text-theqa-gold mb-4">ثقة</h3>
        <p class="text-primary-300 text-sm">مركز ثقة لفحص السيارات</p>
        <div class="flex gap-4 mt-4">
          <a href="#" class="text-primary-300 hover:text-theqa-gold transition text-2xl">📘</a>
          <a href="#" class="text-primary-300 hover:text-theqa-gold transition text-2xl">🐦</a>
          <a href="#" class="text-primary-300 hover:text-theqa-gold transition text-2xl">📺</a>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-theqa-gold">فروعنا</h4>
        <ul class="space-y-2 text-primary-300">
          <li>القاهرة</li>
          <li>طنطا</li>
      
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-theqa-gold">خدمات ثقة</h4>
        <ul class="space-y-2 text-primary-300">
          <li><NuxtLink to="/services/pre-purchase" class="hover:text-theqa-gold transition">فحص ما قبل الشراء</NuxtLink></li>
          <li><NuxtLink to="/services/makdoum" class="hover:text-theqa-gold transition">خدمة مخدوم</NuxtLink></li>
          <li><NuxtLink to="/services/traveler" class="hover:text-theqa-gold transition">فحص المسافر</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 text-theqa-gold">روابط مهمة</h4>
        <ul class="space-y-2 text-primary-300">
          <li><NuxtLink to="/" class="hover:text-theqa-gold transition">الرئيسية</NuxtLink></li>
          <li><a href="#" class="hover:text-theqa-gold transition">الأحكام والخصوصية</a></li>
          <li><a href="#" class="hover:text-theqa-gold transition">الاسترجاع والاستبدال</a></li>
          <li><NuxtLink to="/contact" class="hover:text-theqa-gold transition">تواصل معنا</NuxtLink></li>
        </ul>
        <div class="mt-4 text-primary-300 text-sm">
          <p>خدمة العملاء</p>
          <p class="text-theqa-gold font-bold">+2 123 456 7890</p>
        </div>
      </div>
    </div>
    <div class="border-t border-primary-700 mt-8 pt-4 text-center text-primary-400 text-sm">
      © 2025 ثقة - جميع الحقوق محفوظة
    </div>
  </footer>
</template>