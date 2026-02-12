<template>
  <section id="workflow" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          كيف <span class="text-gradient-gold">يعمل النظام</span>؟
        </h2>
        <p class="text-lg text-gray-600">نموذج عمل مبتكر يربط بين الشركة والبلوجر والموظفين</p>
      </div>

      <!-- Workflow Steps - Horizontal on Desktop -->
      <div class="hidden md:flex items-center justify-between">
        <!-- Step 1 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #3B82F6, #2563EB)">
            <ListChecks class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">توزيع المهام</h3>
          <p class="workflow-desc">الشركة توزع المهام (إعجاب، تعليق، مشاركة) على الموظفين</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gold-500 flex-shrink-0 mx-4" />

        <!-- Step 2 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #10B981, #059669)">
            <CheckCircle2 class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">تنفيذ المهام</h3>
          <p class="workflow-desc">الموظفون ينفذون المهام لزيادة التفاعل مع محتوى البلوجر</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gold-500 flex-shrink-0 mx-4" />

        <!-- Step 3 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <TrendingUp class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">تفاعل البلوجر</h3>
          <p class="workflow-desc">البلوجر يستخدم التفاعل المتزايد للمبيعات المباشرة</p>
        </div>

        <ArrowLeft class="w-8 h-8 text-gold-500 flex-shrink-0 mx-4" />

        <!-- Step 4 -->
        <div class="workflow-step">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #8B5CF6, #7C3AED)">
            <DollarSign class="w-10 h-10 text-white" />
          </div>
          <h3 class="workflow-title">تقسيم الإيرادات</h3>
          <p class="workflow-desc">الأرباح تُقسم بين البلوجر والشركة والموظفين</p>
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
            <h3 class="workflow-title-mobile">توزيع المهام</h3>
            <p class="workflow-desc-mobile">الشركة توزع المهام (إعجاب، تعليق، مشاركة) على الموظفين</p>
          </div>
        </div>

        <div class="flex justify-center">
          <ArrowDown class="w-8 h-8 text-gold-500" />
        </div>

        <!-- Step 2 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #10B981, #059669)">
            <CheckCircle2 class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">تنفيذ المهام</h3>
            <p class="workflow-desc-mobile">الموظفون ينفذون المهام لزيادة التفاعل مع محتوى البلوجر</p>
          </div>
        </div>

        <div class="flex justify-center">
          <ArrowDown class="w-8 h-8 text-gold-500" />
        </div>

        <!-- Step 3 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #F59E0B, #D97706)">
            <TrendingUp class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">تفاعل البلوجر</h3>
            <p class="workflow-desc-mobile">البلوجر يستخدم التفاعل المتزايد للمبيعات المباشرة</p>
          </div>
        </div>

        <div class="flex justify-center">
          <ArrowDown class="w-8 h-8 text-gold-500" />
        </div>

        <!-- Step 4 -->
        <div class="workflow-step-mobile">
          <div class="workflow-icon" style="background: linear-gradient(135deg, #8B5CF6, #7C3AED)">
            <DollarSign class="w-10 h-10 text-white" />
          </div>
          <div class="flex-1">
            <h3 class="workflow-title-mobile">تقسيم الإيرادات</h3>
            <p class="workflow-desc-mobile">الأرباح تُقسم بين البلوجر والشركة والموظفين</p>
          </div>
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
