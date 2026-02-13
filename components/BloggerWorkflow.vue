<template>
  <section id="workflow" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          كيف <span class="text-gradient-gold">يعمل النظام</span>؟
        </h2>
        <p class="text-lg text-gray-600">نظام تعاون مربح للجميع: الموظفون والمدونون والشركة - الكل يربح معاً</p>
      </div>

      <!-- Workflow Steps - Horizontal on Desktop -->
      <div class="hidden md:flex items-center justify-between">
        <!-- Step 1 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #3B82F6, #2563EB)">
            <ListChecks class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">1. المهام</h3>
          <p class="workflow-desc">الموظفون يقومون بعمل لايكات، تعليقات ومشاركات على محتوى المدونين من هواتفهم</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gold-500 flex-shrink-0 mx-4" />

        <!-- Step 2 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #10B981, #059669)">
            <TrendingUp class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">2. الترافيك</h3>
          <p class="workflow-desc">المدونون يحصلون على تفاعل حقيقي وزيادة في المتابعين والانتشار لمحتواهم</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gold-500 flex-shrink-0 mx-4" />

        <!-- Step 3 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <DollarSign class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">3. الأرباح</h3>
          <p class="workflow-desc">الأرباح تُوزع على المدونين، الشركة، والموظفين - الجميع يستفيد</p>
        </div>
      </div>

      <!-- Workflow Steps - Vertical on Mobile -->
      <div class="md:hidden space-y-6">
        <!-- Step 1 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #3B82F6, #2563EB)">
            <ListChecks class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">1. المهام</h3>
            <p class="workflow-desc-mobile">الموظفون يقومون بعمل لايكات، تعليقات ومشاركات على محتوى المدونين من هواتفهم</p>
          </div>
        </div>

        <div class="flex justify-center">
          <ArrowDown class="w-8 h-8 text-gold-500" />
        </div>

        <!-- Step 2 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #10B981, #059669)">
            <TrendingUp class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">2. الترافيك</h3>
            <p class="workflow-desc-mobile">المدونون يحصلون على تفاعل حقيقي وزيادة في المتابعين والانتشار لمحتواهم</p>
          </div>
        </div>

        <div class="flex justify-center">
          <ArrowDown class="w-8 h-8 text-gold-500" />
        </div>

        <!-- Step 3 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <DollarSign class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">3. الأرباح</h3>
            <p class="workflow-desc-mobile">الأرباح تُوزع على المدونين، الشركة، والموظفين - الجميع يستفيد</p>
          </div>
        </div>
      </div>

      <!-- Profit Distribution -->
      <div class="mt-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold text-center mb-10 text-gold-300">توزيع الأرباح</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 rounded-full border-4 border-gold-500 flex items-center justify-center mx-auto mb-4 bg-navy-800">
              <span class="text-3xl font-bold text-white">40%</span>
            </div>
            <h4 class="text-xl font-bold mb-2">المدونون</h4>
            <p class="text-gray-300 text-sm">يحصلون على تفاعل حقيقي وأرباح إضافية</p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 rounded-full border-4 border-gold-500 flex items-center justify-center mx-auto mb-4 bg-navy-800">
              <span class="text-3xl font-bold text-white">30%</span>
            </div>
            <h4 class="text-xl font-bold mb-2">ACCE Network</h4>
            <p class="text-gray-300 text-sm">لتشغيل وتطوير المنصة</p>
          </div>
          <div class="text-center">
            <div class="w-32 h-32 rounded-full border-4 border-gold-500 flex items-center justify-center mx-auto mb-4 bg-navy-800">
              <span class="text-3xl font-bold text-white">30%</span>
            </div>
            <h4 class="text-xl font-bold mb-2">الموظفون</h4>
            <p class="text-gray-300 text-sm">رواتب ثابتة + عمولات + مكافآت</p>
          </div>
        </div>
      </div>
      <!-- Why Choose ACCE -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- For Bloggers -->
        <div class="bg-gold-50 rounded-2xl p-8 border border-gold-200">
          <h3 class="text-2xl font-bold text-navy-900 mb-6 flex items-center">
            <span class="text-3xl mr-2">🌟</span>
            لماذا المدونون يحبون ACCE؟
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-gold-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">تفاعل حقيقي 100% من حسابات نشطة</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-gold-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">زيادة سريعة في المتابعين والانتشار</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-gold-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">دخل إضافي من كل حملة</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-gold-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">بدون مخاطر أو عقوبات من المنصات</span>
            </li>
          </ul>
        </div>

        <!-- For Employees -->
        <div class="bg-navy-50 rounded-2xl p-8 border border-navy-200">
          <h3 class="text-2xl font-bold text-navy-900 mb-6 flex items-center">
            <span class="text-3xl mr-2">💼</span>
            لماذا الموظفون يحبون ACCE؟
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-navy-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">عمل بسيط من الموبايل في أي وقت</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-navy-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">دخل يومي مضمون + بونصات</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-navy-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">فرصة لبناء فريق وزيادة الدخل</span>
            </li>
            <li class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-navy-600 ml-3 flex-shrink-0 mt-1" />
              <span class="text-navy-800 font-medium">نظام مكافآت ضخم من الأجهزة حتى السيارات</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ListChecks, CheckCircle2, TrendingUp, DollarSign, ArrowLeft, ArrowDown } from 'lucide-vue-next'
</script>

<style scoped>
.workflow-step {
  @apply flex-1 text-center;
}

.workflow-icon {
  @apply w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl;
}

.workflow-title {
  @apply text-lg font-bold text-navy-900 mb-2;
}

.workflow-desc {
  @apply text-sm text-gray-600;
}

.workflow-step-mobile {
  @apply flex items-start gap-4 bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100;
}

.workflow-title-mobile {
  @apply text-xl font-bold text-navy-900 mb-2;
}

.workflow-desc-mobile {
  @apply text-sm text-gray-600;
}
</style>
