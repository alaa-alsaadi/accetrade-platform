<template>
  <section id="earnings" class="py-16 bg-gradient-to-br from-navy-50 to-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          كم يمكن أن تكسب من <span class="text-gradient-gold">USDT</span> خلال
        </h2>
        <p class="text-2xl font-bold text-gold-600">
          10 أيام بعد تفعيل الوظيفة كموظف C1 في مجموعة ACCE؟
        </p>
      </div>

      <!-- Steps Container -->
      <div class="relative">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gold-300 to-gold-500 transform -translate-y-1/2 z-0"></div>
        
        <!-- Steps -->
        <div class="grid grid-cols-1 md:grid-cols-7 gap-6 relative z-10">
          <!-- Step 1 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[0] }">1</div>
            <DollarSign :class="stepIconClass" />
            <h3 class="step-title">الراتب الأساسي</h3>
            <p class="step-desc">لمدة 10 أيام (بخصم يومين عطلة)</p>
            <div class="step-amount">128 USDT</div>
          </div>

          <!-- Step 2 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[1] }">2</div>
            <UserPlus :class="stepIconClass" />
            <h3 class="step-title">مكافأة التوظيف الأول</h3>
            <p class="step-desc">30 USDT + الترقية إلى قائد من المستوى 1 = 70 USDT</p>
            <div class="step-amount">100 USDT</div>
          </div>

          <!-- Step 3 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[2] }">3</div>
            <TrendingUp :class="stepIconClass" />
            <h3 class="step-title">مكافأة الترقية</h3>
            <p class="step-desc">إلى قائد من المستوى 1</p>
            <div class="step-amount">70 USDT</div>
          </div>

          <!-- Step 4 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[3] }">4</div>
            <Calendar :class="stepIconClass" />
            <h3 class="step-title">الراتب الشهري للقائد</h3>
            <p class="step-desc">دخل شهري ثابت</p>
            <div class="step-amount">60 USDT</div>
          </div>

          <!-- Step 5 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[4] }">5</div>
            <Users :class="stepIconClass" />
            <h3 class="step-title">مكافأة تكوين فريق</h3>
            <p class="step-desc">من المستوى 1</p>
            <div class="step-amount">150 USDT</div>
          </div>

          <!-- Step 6 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[5] }">6</div>
            <Gift :class="stepIconClass" />
            <h3 class="step-title">مكافأة الإحالة الداخلية</h3>
            <p class="step-desc">5 أشخاص × 72 USDT</p>
            <div class="step-amount">360 USDT</div>
          </div>

          <!-- Step 7 -->
          <div class="step-card">
            <div class="step-number" :style="{ background: stepColors[6] }">7</div>
            <Award :class="stepIconClass" />
            <h3 class="step-title">الترقية إلى قائد من المستوى 11</h3>
            <p class="step-desc">سحب 9 مربحات بمتوسط 50 USDT إجمالاً</p>
            <div class="step-amount">50 USDT</div>
          </div>
        </div>
      </div>

      <!-- Total Display -->
      <div class="mt-12 text-center">
        <div class="inline-block bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <p class="text-white text-xl font-semibold mb-2">إجمالي الدخل:</p>
          <p class="text-white text-5xl font-bold mb-1">918 USDT</p>
          <p class="text-gold-100 text-lg">(حوالي 1,285,200 دينار عراقي)</p>
        </div>
      </div>

      <!-- Note -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-600 italic">
          * لا تسري مرتبا الموظفين الجدد إلا بعد 15 أيام بعد الانضمام
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DollarSign, UserPlus, TrendingUp, Calendar, Users, Gift, Award } from 'lucide-vue-next'

const stepColors = [
  '#6B7280', // gray
  '#F59E0B', // amber
  '#F97316', // orange
  '#EF4444', // red
  '#8B5CF6', // purple
  '#3B82F6', // blue
  '#10B981', // green
]

const stepIconClass = 'w-8 h-8 mx-auto mb-3 text-navy-700'
</script>

<style scoped>
.step-card {
  @apply bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl border border-gray-100 relative overflow-hidden;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #D4AF37, #F4E4C1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.step-card:hover::before {
  opacity: 1;
}

.step-number {
  @apply w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-xl;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.step-title {
  @apply text-base font-bold text-navy-900 mb-3 leading-snug;
}

.step-desc {
  @apply text-sm text-gray-600 mb-4 min-h-[48px] leading-relaxed;
}

.step-amount {
  @apply text-xl font-bold text-gold-600 bg-gold-50 px-4 py-2 rounded-lg inline-block;
}
</style>
