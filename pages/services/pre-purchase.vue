<template>
  <div dir="rtl" class="bg-white text-primary-900 pt-24 md:pt-28 lg:pt-32 overflow-x-hidden">

    <!-- ===== HERO ===== -->
    <section class="relative py-16 md:py-24 bg-gradient-to-r from-primary-900 via-primary-900 to-primary-800 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-theqa-gold/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-theqa-gold/5 to-transparent"></div>
        <div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(rgba(212,175,55,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.6) 1px, transparent 1px); background-size: 48px 48px;"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] border border-white/5 rounded-full animate-spin-slow" style="animation-direction: reverse; animation-duration: 22s;"></div>
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-theqa-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s"></div>
        <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-theqa-gold/40 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-slow" style="animation-delay: 1.5s;"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-5">
          <span class="relative flex w-2 h-2">
            <span class="absolute inset-0 bg-theqa-gold rounded-full animate-ping"></span>
            <span class="relative w-2 h-2 bg-theqa-gold rounded-full"></span>
          </span>
          <span class="text-white/80 text-sm font-medium">خدماتنا</span>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          فحص <span class="text-theqa-gold">ما قبل الشراء</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          فحص شامل ودقيق لجميع أجزاء المركبة قبل اتخاذ قرار الشراء
        </p>
      </div>
    </section>

    <!-- ===== CONTENT ===== -->
    <section class="py-16 md:py-20 relative">
      <div class="absolute top-1/4 right-0 w-72 h-72 bg-theqa-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative">
        <div class="grid lg:grid-cols-3 gap-8">

          <!-- ===== FEATURES ===== -->
          <div class="lg:col-span-2 space-y-8">
            <div class="bg-white rounded-[1.75rem] shadow-xl shadow-primary-900/5 p-6 md:p-8 border border-gray-100">
              <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6 flex items-center gap-2.5">
                <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
                ماذا يشمل الفحص؟
              </h2>

              <div class="grid sm:grid-cols-2 gap-3">
                <div v-for="(item, index) in inspectionItems" :key="index"
                     class="group flex items-start gap-3 p-4 rounded-xl border border-transparent hover:border-theqa-gold/30 hover:bg-primary-50 transition-all duration-300 cursor-pointer">
                  <span class="w-8 h-8 bg-theqa-gold/10 rounded-lg flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <p class="text-gray-700 font-medium pt-0.5">{{ item }}</p>
                </div>
              </div>
            </div>

            <div class="relative bg-gradient-to-br from-primary-50 to-white rounded-[1.75rem] p-6 md:p-8 border border-gray-100 overflow-hidden">
              <div class="absolute -top-8 -left-8 w-40 h-40 bg-theqa-gold/5 rounded-full blur-3xl"></div>
              <h3 class="relative text-xl font-bold text-primary-900 mb-4 flex items-center gap-2.5">
                <span class="w-9 h-9 bg-theqa-gold/15 rounded-lg flex items-center justify-center text-theqa-gold flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M14 3v4h4"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12h6M9 15.5h6M9 8.5h2"/>
                  </svg>
                </span>
                التقرير
              </h3>
              <ul class="relative space-y-3">
                <li v-for="(point, i) in reportPoints" :key="i" class="flex items-center gap-3 text-gray-700">
                  <svg class="w-4 h-4 text-theqa-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8l-4 4m0 0l4 4m-4-4h18"/></svg>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>

          <!-- ===== SIDEBAR ===== -->
          <div class="space-y-6">
            <div class="relative bg-gradient-to-br from-theqa-gold/10 to-yellow-500/5 rounded-[1.75rem] p-8 border border-theqa-gold/20 text-center overflow-hidden">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-theqa-gold/10 rounded-full blur-3xl"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-theqa-gold to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-theqa-gold/30 rotate-3">
                <svg class="w-10 h-10 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 4a7 7 0 104.95 11.95A7 7 0 0011 4z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 21l-4.3-4.3"/>
                </svg>
              </div>
              <h4 class="relative text-xl font-bold text-primary-900 mb-2">احجز فحصك الآن</h4>
              <p class="relative text-gray-500 text-sm mb-6">احصل على تقرير مفصل قبل الشراء</p>
              <NuxtLink
                to="/contact"
                class="relative inline-block bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-theqa-gold/30"
              >
                أطلب الآن
              </NuxtLink>
            </div>

            <div class="bg-white rounded-[1.75rem] p-6 border border-gray-100 shadow-lg shadow-primary-900/5">
              <h5 class="font-bold text-primary-900 mb-4 flex items-center gap-2.5">
                <span class="w-8 h-8 bg-theqa-gold/10 rounded-lg flex items-center justify-center text-theqa-gold flex-shrink-0">
                  <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 3a4.5 4.5 0 014.5 4.5c0 2.1-1.2 3.3-2 4.3-.5.6-.8 1-1 1.7h-3c-.2-.7-.5-1.1-1-1.7-.8-1-2-2.2-2-4.3A4.5 4.5 0 0112 3z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9.75 17h4.5M10.5 20h3"/>
                  </svg>
                </span>
                نصائح مهمة
              </h5>
              <ul class="space-y-3 text-sm text-gray-600">
                <li v-for="(tip, i) in tips" :key="i" class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-theqa-gold mt-1.5 flex-shrink-0"></span>
                  {{ tip }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ===== PRICING SECTION — DARK PREMIUM ===== -->
    <!-- ============================================ -->
    <section class="relative py-20 md:py-28 bg-gradient-to-br from-[#0B1220] via-[#101a30] to-[#1a2540] overflow-hidden">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: linear-gradient(rgba(212,175,55,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.6) 1px, transparent 1px); background-size: 44px 44px;"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-theqa-gold/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style="animation-delay: 2s"></div>
      <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-theqa-gold/40 rounded-full animate-float-slow pointer-events-none"></div>
      <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-slow pointer-events-none" style="animation-delay: 1.2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-14">
          <span class="inline-flex items-center gap-2 text-theqa-gold font-bold text-sm tracking-wider bg-theqa-gold/10 border border-theqa-gold/20 px-5 py-2.5 rounded-full mb-4">
            <span class="w-1.5 h-1.5 bg-theqa-gold rounded-full animate-pulse"></span>
            باقات فحص ما قبل الشراء
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            اختر <span class="text-theqa-gold">الباقة</span> المناسبة لك
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-lg">باقات فحص دقيقة تناسب نوع السيارة وحجم الفحص المطلوب قبل الشراء</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          <PricingCard v-for="(plan, i) in pricingPlans" :key="i" :plan="plan" />
        </div>

        <p class="text-center text-slate-500 text-sm mt-10">جميع الأسعار شاملة ضريبة القيمة المضافة. الأسعار قابلة للتغيير دون إشعار مسبق.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

const inspectionItems = [
  'فحص المحرك والقير',
  'فحص الهيكل والسمكرة',
  'فحص الفرامل والتعليق',
  'فحص الحساسات الإلكترونية',
  'فحص الزيوت والسوائل',
  'فحص الإطارات والعجلات',
  'فحص الديكور والداخلية',
  'فحص الوسائد الهوائية',
  'فحص أنظمة التبريد',
  'فحص العادم والأداء',
  'فحص نظام التوجيه',
  'فحص البطارية والكهرباء'
]

const reportPoints = [
  'تقرير مفصل بجميع النتائج',
  'فيديو توضيحي لحالة السيارة',
  'توصيات ونصائح للشراء',
  'تقييم عام للسيارة'
]

const tips = [
  'تأكد من فحص جميع الأجزاء',
  'استفسر عن تاريخ الصيانة',
  'قم بتجربة القيادة'
]

/* ============================================ */
/* ============ PRICING PLANS DATA ============= */
/* ============================================ */
interface PricingPlan {
  name: string
  price: number
  oldPrice?: number
  discountLabel?: string
  highlighted?: boolean
  items: { label: string; included: boolean }[]
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'الأساسي',
    price: 1000,
    items: [
      { label: 'المحرك', included: true },
      { label: 'ناقل الحركة', included: true },
      { label: 'الدفرنس', included: true },
      { label: 'ميكانيكا أسفل السيارة', included: true },
      { label: 'الكمبيوتر والحساسات', included: true },
      { label: 'الهيكل الداخلي وتجربة السيارة', included: true },
      { label: 'الهيكل الخارجي والوسائد الهوائية', included: false },
      { label: 'الديكورات والملحقات الخارجية', included: false },
    ]
  },
  {
    name: 'الشامل',
    price: 1260,
    oldPrice: 1400,
    discountLabel: 'خصم 10%',
    highlighted: true,
    items: [
      { label: 'المحرك', included: true },
      { label: 'ناقل الحركة', included: true },
      { label: 'الدفرنس', included: true },
      { label: 'ميكانيكا أسفل السيارة', included: true },
      { label: 'الكمبيوتر والحساسات', included: true },
      { label: 'الهيكل الداخلي وتجربة السيارة', included: true },
      { label: 'الهيكل الخارجي والوسائد الهوائية', included: true },
      { label: 'الديكورات والملحقات الخارجية', included: true },
    ]
  },
  {
    name: 'المحركات',
    price: 650,
    items: [
      { label: 'المحرك', included: true },
      { label: 'ناقل الحركة', included: true },
      { label: 'الدفرنس', included: true },
      { label: 'ميكانيكا أسفل السيارة', included: true },
      { label: 'الكمبيوتر والحساسات', included: true },
      { label: 'الهيكل الداخلي وتجربة السيارة', included: false },
      { label: 'الهيكل الخارجي والوسائد الهوائية', included: false },
      { label: 'الديكورات والملحقات الخارجية', included: false },
    ]
  }
]

/* ============================================ */
/* ============ PRICING CARD COMPONENT ========= */
/* ============================================ */
const PricingCard = (props: { plan: PricingPlan }) => {
  const { plan } = props
  return h(
    'div',
    {
      class: `group relative rounded-[1.75rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        plan.highlighted
          ? 'md:-mt-4 md:mb-4 ring-1 ring-theqa-gold/40 shadow-2xl shadow-theqa-gold/20'
          : 'shadow-xl shadow-black/20'
      }`,
    },
    [
      plan.discountLabel
        ? h(
            'div',
            { class: 'absolute top-0 left-0 z-20 w-28 h-28 overflow-hidden pointer-events-none' },
            [
              h(
                'span',
                {
                  class:
                    'absolute -left-10 top-5 w-40 text-center rotate-[-45deg] bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold py-1 shadow-md',
                },
                plan.discountLabel
              ),
            ]
          )
        : null,

      plan.highlighted
        ? h('div', {
            class:
              'absolute -inset-[1.5px] bg-gradient-to-br from-theqa-gold via-yellow-400 to-theqa-gold rounded-[1.85rem] opacity-80 -z-10',
          })
        : null,

      h(
        'div',
        {
          class: `relative h-full flex flex-col bg-gradient-to-br ${
            plan.highlighted
              ? 'from-[#0d1a30] to-[#15233f]'
              : 'from-white/[0.04] to-white/[0.02]'
          } backdrop-blur-xl border ${
            plan.highlighted ? 'border-theqa-gold/30' : 'border-white/10'
          } rounded-[1.75rem]`,
        },
        [
          h(
            'div',
            {
              class: `relative text-center py-6 px-6 ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-theqa-gold to-yellow-500'
                  : 'bg-white/[0.03] border-b border-white/10'
              }`,
            },
            [
              h(
                'h3',
                {
                  class: `text-xl font-black ${plan.highlighted ? 'text-primary-900' : 'text-white'}`,
                },
                plan.name
              ),
            ]
          ),

          h('div', { class: 'text-center pt-8 pb-6 px-6' }, [
            h('div', { class: 'flex items-center justify-center gap-2' }, [
              h(
                'span',
                { class: `text-4xl md:text-5xl font-black ${plan.highlighted ? 'text-theqa-gold' : 'text-white'}` },
                String(plan.price)
              ),
              h('span', { class: 'text-sm text-slate-400 font-bold' }, 'ريال'),
            ]),
            plan.oldPrice
              ? h('div', { class: 'flex items-center justify-center gap-2 mt-2' }, [
                  h(
                    'span',
                    { class: 'text-xs bg-theqa-mint/15 text-theqa-mint px-2.5 py-1 rounded-full font-bold' },
                    `وفّر ${plan.oldPrice - plan.price} ريال`
                  ),
                  h('span', { class: 'text-sm text-slate-500 line-through' }, String(plan.oldPrice)),
                ])
              : null,
          ]),

          h(
            'ul',
            { class: 'flex-1 px-6 pb-6 space-y-3' },
            plan.items.map((item) =>
              h('li', { class: 'flex items-center justify-between gap-3 text-sm border-b border-white/5 pb-3' }, [
                h('span', { class: item.included ? 'text-slate-200' : 'text-slate-500' }, item.label),
                item.included
                  ? h(
                      'svg',
                      { class: 'w-5 h-5 text-theqa-mint flex-shrink-0', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                      [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2.5', d: 'M5 13l4 4L19 7' })]
                    )
                  : h(
                      'svg',
                      { class: 'w-5 h-5 text-red-400/70 flex-shrink-0', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                      [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2.5', d: 'M6 18L18 6M6 6l12 12' })]
                    ),
              ])
            )
          ),

          h('div', { class: 'p-6 pt-0' }, [
            h(
              'a',
              {
                href: '/contact',
                class: `group relative block text-center py-3.5 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 shadow-lg shadow-theqa-gold/30 hover:shadow-theqa-gold/50 hover:scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`,
              },
              [
                plan.highlighted
                  ? h('span', {
                      class:
                        'absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12',
                    })
                  : null,
                h('span', { class: 'relative z-10' }, 'أطلب الآن'),
              ]
            ),
          ]),
        ]
      ),
    ]
  )
}
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.08); }
}
@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }

.w-4\.5 { width: 1.125rem; }
.h-4\.5 { height: 1.125rem; }

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow, .animate-pulse-slow, .animate-spin-slow, .animate-fade-in-up {
    animation: none !important;
  }
}
</style>