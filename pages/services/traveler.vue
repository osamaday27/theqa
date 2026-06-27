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
          فحص <span class="text-theqa-gold">المسافر</span>
        </h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          فحص مخصص قبل السفر للتأكد من سلامة السيارة على الطريق
        </p>
      </div>
    </section>

    <!-- ===== CONTENT ===== -->
    <section class="py-16 md:py-20 relative">
      <div class="absolute top-1/4 right-0 w-72 h-72 bg-theqa-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative">
        <div class="grid lg:grid-cols-2 gap-10 lg:gap-12">

          <!-- ===== CHECK ITEMS ===== -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-primary-900 mb-6 flex items-center gap-2.5">
              <span class="w-1 h-8 bg-theqa-gold rounded-full"></span>
              ماذا يشمل الفحص؟
            </h2>

            <div class="grid sm:grid-cols-2 gap-3">
              <div v-for="(item, index) in checkItems" :key="index"
                   class="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-theqa-gold/30 hover:bg-primary-50 hover:shadow-md transition-all duration-300">
                <span class="w-9 h-9 bg-theqa-gold/10 rounded-lg flex items-center justify-center text-theqa-gold group-hover:bg-theqa-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </span>
                <span class="text-gray-700 text-sm font-medium">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- ===== SIDEBAR ===== -->
          <div class="space-y-6">
            <div class="relative bg-gradient-to-br from-primary-50 to-white rounded-[1.75rem] p-8 border border-gray-100 overflow-hidden">
              <div class="absolute -top-8 -right-8 w-40 h-40 bg-theqa-gold/5 rounded-full blur-3xl"></div>
              <h3 class="relative text-xl font-bold text-primary-900 mb-5 flex items-center gap-2.5">
                <span class="w-9 h-9 bg-theqa-gold/15 rounded-lg flex items-center justify-center text-theqa-gold flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 21l2-18h2l2 18"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M11 13h2"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10.4 7h3.2"/>
                  </svg>
                </span>
                نصائح السفر
              </h3>
              <ul class="relative space-y-3 text-sm text-gray-600">
                <li v-for="(tip, i) in tips" :key="i" class="flex items-start gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-theqa-gold mt-1.5 flex-shrink-0"></span>
                  {{ tip }}
                </li>
              </ul>
            </div>

            <NuxtLink
              to="/contact"
              class="group block text-center bg-gradient-to-r from-theqa-gold to-yellow-500 text-primary-900 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-theqa-gold/30 hover:shadow-theqa-gold/50"
            >
              <span class="inline-flex items-center gap-2">
                احجز الفحص الآن
                <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8l-4 4m0 0l4 4m-4-4h18"/></svg>
              </span>
            </NuxtLink>
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
            باقات فحص المسافر
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            اختر <span class="text-theqa-gold">الباقة</span> المناسبة لرحلتك
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-lg">باقات سريعة ودقيقة تضمن سلامتك على الطريق قبل أي رحلة</p>
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

const checkItems = [
  'فحص الزيوت والسوائل',
  'فحص الكفرات والفرامل',
  'فحص الأنوار والإشارات',
  'فحص أدوات السلامة',
  'فحص المساحات والزجاج',
  'فحص نظام التبريد',
  'فحص البطارية والشحن',
  'فحص نظام التوجيه',
  'فحص المحرك والأداء',
  'تجربة السيارة على الطريق'
]

const tips = [
  'تأكد من صلاحية الإطارات',
  'افحص مستويات الزيوت',
  'تأكد من أدوات السلامة',
  'احمل مستندات السيارة'
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
    name: 'فحص سريع',
    price: 350,
    items: [
      { label: 'فحص الزيوت والسوائل', included: true },
      { label: 'فحص الكفرات والفرامل', included: true },
      { label: 'فحص البطارية والشحن', included: true },
      { label: 'فحص الأنوار والإشارات', included: true },
      { label: 'فحص أدوات السلامة', included: false },
      { label: 'تجربة السيارة على الطريق', included: false },
      { label: 'تقرير فيديو مفصل', included: false },
    ]
  },
  {
    name: 'فحص الرحلة',
    price: 550,
    oldPrice: 650,
    discountLabel: 'خصم 15%',
    highlighted: true,
    items: [
      { label: 'فحص الزيوت والسوائل', included: true },
      { label: 'فحص الكفرات والفرامل', included: true },
      { label: 'فحص البطارية والشحن', included: true },
      { label: 'فحص الأنوار والإشارات', included: true },
      { label: 'فحص أدوات السلامة', included: true },
      { label: 'تجربة السيارة على الطريق', included: true },
      { label: 'تقرير فيديو مفصل', included: true },
    ]
  },
  {
    name: 'فحص شامل + طوارئ',
    price: 750,
    items: [
      { label: 'فحص الزيوت والسوائل', included: true },
      { label: 'فحص الكفرات والفرامل', included: true },
      { label: 'فحص البطارية والشحن', included: true },
      { label: 'فحص الأنوار والإشارات', included: true },
      { label: 'فحص أدوات السلامة', included: true },
      { label: 'تجربة السيارة على الطريق', included: true },
      { label: 'خط طوارئ مدة الرحلة 24 ساعة', included: true },
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

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow, .animate-pulse-slow, .animate-spin-slow, .animate-fade-in-up {
    animation: none !important;
  }
}
</style>