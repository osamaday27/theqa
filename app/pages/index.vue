<template>
  <div dir="rtl" class="bg-white text-primary-900">
    <!-- الهيدر -->
    <AppHeader />

    <!-- القسم الرئيسي (Hero) -->
    <section class="bg-gradient-to-l from-primary-800 to-primary-600 text-white py-20 px-4">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
         <span class="text-accent-gold">ثقة</span> لفحص السيارات
        </h1>
        <p class="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto mb-8">
          فحص دقيق وشامل لجميع أنواع السيارات قبل الشراء أو السفر
        </p>
        <a href="#services" class="bg-accent-gold text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-xl inline-block">
          أطلب الخدمة الآن
        </a>
      </div>
    </section>

    <!-- خدماتنا (Cards) -->
    <section id="services" class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-4">خدماتنا</h2>
        <p class="text-center text-gray-500 mb-12">نقدم لك أفضل حلول فحص السيارات بثقة واحترافية</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- فحص الشراء -->
          <ServiceCard :points="['فحص جميع الأجزاء', 'تقرير مفصل', 'نقاط ولاء']">
            <template #icon>🔍</template>
            <template #title>فحص الشراء</template>
            <template #description>فحص جميع أجزاء المركبة المستعملة لمعرفة واكتشاف الأعطال والعيوب قبل اتخاذ قرار الشراء.</template>
          </ServiceCard>

          <!-- خدمة مخدوم -->
          <ServiceCard :points="['حضور المالك للفرع', 'تقرير فيديو', 'نقل ملكية وتأمين']">
            <template #icon>📦</template>
            <template #title>خدمة مخدوم</template>
            <template #description>فحص شامل للسيارة خارج مدينتك مع تسهيل نقل الملكية والتأمين والشحن.</template>
          </ServiceCard>

          <!-- فحص المسافر -->
          <ServiceCard :points="['فحص الزيوت والسوائل', 'فحص الكفرات والفرامل', 'فحص أدوات السلامة']">
            <template #icon>🛣️</template>
            <template #title>فحص المسافر</template>
            <template #description>فحص مخصص قبل السفر للتأكد من سلامة السيارة على الطريق.</template>
          </ServiceCard>
        </div>
      </div>
    </section>

    <!-- أجزاء ومراحل الفحص (Cards شبكية) -->
    <section class="py-16 px-4 bg-primary-50">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">أجزاء ومراحل الفحص</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <InspectionStepCard v-for="step in steps" :key="step.title">
            <template #icon>{{ step.icon }}</template>
            <template #title>{{ step.title }}</template>
            <template #description>{{ step.description }}</template>
          </InspectionStepCard>
        </div>
      </div>
    </section>

    <!-- لماذا تتعامل معنا -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">لماذا تتعامل معنا ؟</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <WhyUsCard>
            <template #icon>🏆</template>
            <template #title>خبرة أكثر من 10+</template>
            <template #description>تمتد خبرتنا لأكثر من 12 عامًا في فحص السيارات بدقة استثنائية.</template>
          </WhyUsCard>
          <WhyUsCard>
            <template #icon>🚗</template>
            <template #title>فحص جميع السيارات</template>
            <template #description>نفحص جميع أنواع السيارات الكبيرة والصغيرة سواء تعمل بالبنزين أو الكهرباء.</template>
          </WhyUsCard>
          <WhyUsCard>
            <template #icon>🎁</template>
            <template #title>نقاط ولاء للعملاء</template>
            <template #description>كل زيارة تحصل على رصيد مجاني تستفيد منه في الفحص القادم.</template>
          </WhyUsCard>
          <WhyUsCard>
            <template #icon>✅</template>
            <template #title>ضمان صحة التقارير</template>
            <template #description>التزامًا بالجودة نقدم ضمانًا لسلامة وصحة نتائج تقاريرنا.</template>
          </WhyUsCard>
        </div>
      </div>
    </section>

    <!-- آراء العملاء -->
    <section class="py-16 px-4 bg-primary-50">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-12">آراء العملاء</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard>
            <template #comment>فحص روعه ماشاء الله ويطلع لك كل كبيره وصغيره وكنت ابي اشتري موتر وطلع كل العيوب الي فيها والله صرفها عني واحب اشكر ابو خالد المدير</template>
            <template #name>عبدالله الراجحي</template>
            <template #avatar>ع</template>
          </TestimonialCard>
          <TestimonialCard>
            <template #comment>خدمة ممتازة وفريق محترف، التقرير كان مفصل جداً وساعدني في اتخاذ القرار الصحيح</template>
            <template #name>محمد السالم</template>
            <template #avatar>م</template>
          </TestimonialCard>
          <TestimonialCard>
            <template #comment>أفضل مركز فحص سيارات في الرياض، أنصح به بشدة لكل من يريد شراء سيارة مستعملة</template>
            <template #name>فهد العتيبي</template>
            <template #avatar>ف</template>
          </TestimonialCard>
        </div>
      </div>
    </section>

    <!-- نموذج التواصل -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-8">تواصل معنا</h2>
        <form class="bg-white shadow-xl rounded-2xl p-8">
          <div class="mb-4">
            <label class="block text-primary-700 font-bold mb-2">الاسم</label>
            <input type="text" placeholder="ادخل اسمك" class="w-full p-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
          <div class="mb-4">
            <label class="block text-primary-700 font-bold mb-2">البريد الالكتروني</label>
            <input type="email" placeholder="ادخل بريدك الالكتروني" class="w-full p-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none">
          </div>
          <div class="mb-6">
            <label class="block text-primary-700 font-bold mb-2">رسالة</label>
            <textarea rows="4" placeholder="اكتب رسالتك" class="w-full p-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
          </div>
          <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition shadow-lg">
            إرسال
          </button>
        </form>
      </div>
    </section>

    <!-- الفوتر -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const steps = [
  { icon: '📝', title: 'تسجيل بيانات المركبة', description: 'تسجيل كامل البيانات' },
  { icon: '⚙️', title: 'فحص ميكانيكا المحرك والقير', description: 'فحص شامل للمحرك' },
  { icon: '💻', title: 'فحص الحساسات بالكمبيوتر', description: 'فحص إلكتروني دقيق' },
  { icon: '🛡️', title: 'فحص سلامة الوسائد الهوائية', description: 'فحص الأمان' },
  { icon: '🔧', title: 'فحص ميكانيكا أسفل السيارة', description: 'فحص القاعدة' },
  { icon: '🧪', title: 'فحص الزيوت والسوائل والتسريبات', description: 'فحص السوائل' },
  { icon: '🛞', title: 'فحص أنظمة الفرامل والتعليق', description: 'فحص الفرامل' },
  { icon: '🚘', title: 'فحص الهيكل والسمكرة', description: 'فحص الهيكل' },
  { icon: '🪑', title: 'فحص الديكور والداخلية', description: 'فحص المقصورة' },
  { icon: '🔩', title: 'فحص سلامة الإطارات', description: 'فحص الكفرات' },
  { icon: '🛣️', title: 'تجربة المركبة على الطريق', description: 'اختبار القيادة' },
  { icon: '📄', title: 'طباعة التقرير وشرحه', description: 'تقرير مفصل' },
]
</script>

<style scoped>
/* تخصيصات إضافية */
.container {
  max-width: 1280px;
}
</style>