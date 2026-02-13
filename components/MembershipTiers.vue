<template>
  <section id="memberships" class="py-16 bg-gradient-to-br from-navy-900 to-navy-700">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-3">
          مستويات <span class="text-gradient-gold">العضوية</span> والعمولات
        </h2>
        <p class="text-lg text-gold-200">اختر العضوية المناسبة لك واستمتع بعمولات مذهلة</p>
      </div>

      <!-- Membership Tiers Table -->
      <div class="overflow-x-auto bg-white rounded-2xl shadow-2xl">
        <table class="w-full">
          <thead>
            <tr class="bg-gradient-to-r from-gold-500 to-gold-600 text-white">
              <th class="px-4 py-4 text-right font-bold">مستوى ووظيفة الموظف</th>
              <th class="px-4 py-4 text-center font-bold">درجة الحمال<br/>(الاشتراك)</th>
              <th class="px-4 py-4 text-center font-bold">عددالموهلم</th>
              <th class="px-4 py-4 text-center font-bold" v-for="i in 5" :key="i">
                الراتب اليومي<br/>{{ getLevelLabel(i) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tier in tiers" :key="tier.name" class="border-b border-gray-200 hover:bg-gold-50 transition-colors">
              <td class="px-4 py-4 font-bold text-navy-900">{{ tier.name }}</td>
              <td class="px-4 py-4 text-center font-semibold text-navy-700">{{ tier.cost }} USDT</td>
              <td class="px-4 py-4 text-center text-navy-700">{{ tier.employees }}</td>
              <td v-for="(commission, index) in tier.commissions" :key="index" 
                  class="px-4 py-4 text-center font-semibold"
                  :class="commission > 0 ? 'text-gold-600' : 'text-gray-400'">
                {{ commission > 0 ? commission + ' USDT' : '-' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Payment Schedule -->
      <div class="mt-8 text-center">
        <div class="inline-block bg-gold-500 rounded-xl shadow-xl px-8 py-4">
          <Calendar class="w-6 h-6 inline-block ml-2 text-navy-900" />
          <span class="text-navy-900 font-bold text-lg">
            يتم دفع الرواتب في 6 و 16 و 26 من كل شهر
          </span>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-8 bg-white rounded-xl p-6 text-navy-900">
        <p class="text-sm leading-relaxed text-gray-600">
          <strong>ملاحظة:</strong> الوديعة هي ضمان لجدية العمل.
          مثال (C2): إنجاز 10 مهام يومياً يحقق <span class="text-navy-900 font-bold">3.2$ يومياً</span>، ما يعادل <span class="text-navy-900 font-bold">960$ شهرياً</span> و <span class="text-navy-900 font-bold">11,680$ سنوياً</span>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'

const getLevelLabel = (level: number) => {
  return `راتب ${level === 1 ? '30' : level === 2 ? '90' : level === 3 ? '365' : level === 4 ? '90' : '30'} يوم عمل`
}

const tiers = [
  {
    name: 'C1 - موظف مبتدئ',
    cost: 600,
    employees: 5,
    commissions: [3.2, 16, 480, 1440, 5840]
  },
  {
    name: 'C2 - موظف مبتدئ',
    cost: 1200,
    employees: 10,
    commissions: [3.2, 32, 960, 2880, 11680]
  },
  {
    name: 'B1 - بدء بكالوريوس يونيفرسيتي',
    cost: 2600,
    employees: 11,
    commissions: [6.1, 67.1, 2013, 6039, 24491.5]
  },
  {
    name: 'B2 - بكالوريوس يونيفرسيتي',
    cost: 6000,
    employees: 25,
    commissions: [6.1, 152.5, 4575, 13725, 55662.5]
  },
  {
    name: 'A1 - كبار الموظفين',
    cost: 13000,
    employees: 33,
    commissions: [10, 330, 9900, 29700, 120450]
  },
  {
    name: 'A2 - كبار الموظفين',
    cost: 28000,
    employees: 71,
    commissions: [10, 710, 21300, 63900, 259150]
  },
  {
    name: 'S1 - المميزين الرئيسيين',
    cost: 60000,
    employees: 0,
    commissions: [0, 1540, 46200, 138600, 562100]
  },
  {
    name: 'S2 - المميزين الرئيسيين',
    cost: 100000,
    employees: 0,
    commissions: [0, 2570, 77100, 231300, 938050]
  },
]
</script>
