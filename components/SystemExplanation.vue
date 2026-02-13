<template>
  <section id="how-it-works" class="py-20 bg-gradient-to-br from-navy-50 to-white overflow-hidden relative">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-navy-200/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-navy-900 mb-4 animate-fade-in-up">
          رحلة الـ 10 أيام الأولى
        </h2>
        <p class="text-xl md:text-2xl font-bold text-gold-600 animate-fade-in-up delay-100">
          شاهد كيف يتطور دخلك في أول 10 أيام مع ACCE Network
        </p>
      </div>

      <!-- Steps Container -->
      <div class="flex flex-wrap justify-center gap-6 lg:gap-8">
        <!-- Step 1 -->
        <div class="step-card group animate-fade-in-up delay-100">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[0] }">1-3</div>
            <div class="step-icon-wrapper">
              <DollarSign class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">الراتب الأساسي</h3>
          <p class="step-desc">راتبك الأساسي كموظف C1 - مضمون ومستقر</p>
          <div class="step-amount">128 USDT</div>
        </div>

        <!-- Step 2 -->
        <div class="step-card group animate-fade-in-up delay-150">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[1] }">4</div>
            <div class="step-icon-wrapper">
              <TrendingUp class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">مكافآت النمو</h3>
          <p class="step-desc">بونص النمو والأداء المتميز</p>
          <div class="step-amount">100 USDT</div>
        </div>

        <!-- Step 3 -->
        <div class="step-card group animate-fade-in-up delay-200">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[2] }">5</div>
            <div class="step-icon-wrapper">
              <Award class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">ترقية قائد L1</h3>
          <p class="step-desc">مكافأة الترقية إلى مستوى القائد</p>
          <div class="step-amount">70 USDT</div>
        </div>

        <!-- Step 4 -->
        <div class="step-card group animate-fade-in-up delay-250">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[3] }">6</div>
            <div class="step-icon-wrapper">
              <Calendar class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">راتب القائد الشهري</h3>
          <p class="step-desc">راتب إضافي شهري كقائد فريق</p>
          <div class="step-amount">60 USDT</div>
        </div>

        <!-- Step 5 -->
        <div class="step-card group animate-fade-in-up delay-300">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[4] }">7</div>
            <div class="step-icon-wrapper">
              <Users class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">بونص تكوين الفريق</h3>
          <p class="step-desc">مكافأة بناء فريقك الأول</p>
          <div class="step-amount">150 USDT</div>
        </div>

        <!-- Step 6 -->
        <div class="step-card group animate-fade-in-up delay-350">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[5] }">8-9</div>
            <div class="step-icon-wrapper">
              <UserPlus class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">عمولات الإحالة</h3>
          <p class="step-desc">عمولات من إحالة 5 أعضاء جدد</p>
          <div class="step-amount">360 USDT</div>
        </div>

        <!-- Step 7 -->
        <div class="step-card group animate-fade-in-up delay-400">
          <div class="step-header">
            <div class="step-number" :style="{ background: stepColors[6] }">10</div>
            <div class="step-icon-wrapper">
              <Gift class="step-icon" />
            </div>
          </div>
          <h3 class="step-title">متوسط السحوبات</h3>
          <p class="step-desc">أرباح إضافية من السحوبات اليومية (9 مرات)</p>
          <div class="step-amount">50 USDT</div>
        </div>
      </div>

      <!-- Total Display -->
      <div class="mt-16 text-center animate-fade-in-up delay-500">
        <div class="inline-block bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-gold-500/30 max-w-2xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center">
            <div class="text-gold-400 flex-shrink-0">
              <TrendingUp class="w-16 h-16" />
            </div>
            <div class="text-right">
              <h3 class="text-gold-400 text-2xl font-bold mb-2">نمو تراكمي مستمر</h3>
              <p class="text-white text-lg md:text-xl font-medium leading-relaxed">
                هذا مجرد البداية! مع استمرارك في النظام، دخلك يزيد شهرياً مع كل ترقية وإحالة جديدة
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Note -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-500 italic bg-white/50 inline-block px-4 py-2 rounded-full">
          * لا تسري مرتبات الموظفين الجدد إلا بعد 15 يوماً من الانضمام
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DollarSign, UserPlus, TrendingUp, Calendar, Users, Gift, Award, Trophy } from 'lucide-vue-next'

const stepColors = [
  '#6B7280', // gray
  '#F59E0B', // amber
  '#F97316', // orange
  '#EF4444', // red
  '#8B5CF6', // purple
  '#3B82F6', // blue
  '#10B981', // green
]
</script>

<style scoped>
.step-card {
  @apply bg-white rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 border border-gray-100;
  @apply w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)];
  @apply hover:shadow-2xl hover:-translate-y-2 hover:border-gold-300;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
}

.step-card:hover {
  background: linear-gradient(145deg, #ffffff 0%, #fffbf0 100%);
}

.step-header {
  @apply flex items-center justify-between mb-4;
}

.step-number {
  @apply w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300;
}

.step-icon-wrapper {
  @apply w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors duration-300;
}

.step-icon {
  @apply w-6 h-6 text-navy-700 group-hover:text-gold-600 transition-colors duration-300;
}

.step-title {
  @apply text-xl font-bold text-navy-900 mb-2 leading-snug text-right;
}

.step-desc {
  @apply text-sm text-gray-600 mb-6 min-h-[40px] leading-relaxed text-right;
}

.step-amount {
  @apply text-2xl font-bold text-gold-600 bg-gold-50/50 py-3 rounded-xl block border border-gold-100 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-300;
}
</style>
