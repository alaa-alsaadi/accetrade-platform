<template>
  <section id="loyalty" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          نظام <span class="text-gradient-gold">نقاط الشرف</span>
        </h2>
        <p class="text-lg text-gray-600">اكسب نقاط الشرف واحصل على مكافآت مذهلة</p>
      </div>

      <!-- Rewards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="reward in rewards" :key="reward.points" class="reward-card">
          <div class="text-center">
            <Trophy class="w-12 h-12 mx-auto mb-3 text-gold-500" />
            <div class="text-3xl font-bold text-navy-900 mb-1">{{ reward.points }}</div>
            <div class="text-sm text-gray-600 mb-3">نقطة شرف</div>
            <div class="text-2xl font-bold text-gold-600">{{ reward.prize }}</div>
          </div>
        </div>
      </div>

      <!-- Calculator -->
      <div class="card bg-gradient-to-br from-navy-900 to-navy-700 text-white max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold mb-6 text-center text-gold-300">
          <Calculator class="w-8 h-8 inline-block ml-2" />
          حاسبة نقاط الشرف
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Honor Points Input -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-gold-200">نقاط الشرف الحالية</label>
            <input 
              v-model.number="honorPoints" 
              type="number" 
              class="w-full px-4 py-3 rounded-lg bg-navy-800 border-2 border-navy-600 focus:border-gold-500 outline-none text-white text-lg"
              placeholder="102"
            />
          </div>

          <!-- Months Worked -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-gold-200">عدد الأشهر المعملة</label>
            <input 
              v-model.number="monthsWorked" 
              type="number" 
              class="w-full px-4 py-3 rounded-lg bg-navy-800 border-2 border-navy-600 focus:border-gold-500 outline-none text-white text-lg"
              placeholder="1"
            />
          </div>

          <!-- Leader Level -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-gold-200">مستوى القيادة</label>
            <select 
              v-model="selectedLevel" 
              class="w-full px-4 py-3 rounded-lg bg-navy-800 border-2 border-navy-600 focus:border-gold-500 outline-none text-white text-lg"
            >
              <option v-for="level in leaderLevels" :key="level.level" :value="level.factor">
                المستوى {{ level.level }} ({{ level.factor }}x)
              </option>
            </select>
          </div>

          <!-- Team Total -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-gold-200">إجمالي نقاط الفريق</label>
            <input 
              v-model.number="teamTotal" 
              type="number" 
              class="w-full px-4 py-3 rounded-lg bg-navy-800 border-2 border-navy-600 focus:border-gold-500 outline-none text-white text-lg"
              placeholder="0"
            />
          </div>
        </div>

        <!-- Result -->
        <div class="bg-gold-500 rounded-xl p-6 text-center">
          <p class="text-navy-900 font-semibold mb-2">إجمالي النقاط المحسوبة:</p>
          <p class="text-4xl font-bold text-navy-900">{{ calculatedPoints.toFixed(0) }}</p>
          <p class="text-sm text-navy-700 mt-2">نقطة شرف</p>
        </div>

        <!-- Formula Display -->
        <div class="mt-4 text-center text-sm text-gold-200">
          <p>الصيغة: (نقاط الشرف × الأشهر × معامل القيادة) + إجمالي الفريق</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Trophy, Calculator } from 'lucide-vue-next'

const honorPoints = ref(102)
const monthsWorked = ref(1)
const selectedLevel = ref(1.3)
const teamTotal = ref(0)

const rewards = [
  { points: 170, prize: '70 USDT' },
  { points: 250, prize: '180 USDT' },
  { points: 350, prize: '800 USDT' },
  { points: 600, prize: '7,000 USDT' },
  { points: 900, prize: '16,000 USDT' },
  { points: 1400, prize: 'سيارة BMW ($100,000)' },
]

const leaderLevels = [
  { level: 1, factor: 1.3 },
  { level: 2, factor: 1.5 },
  { level: 3, factor: 1.7 },
  { level: 4, factor: 1.9 },
  { level: 5, factor: 2.0 },
  { level: 6, factor: 2.1 },
  { level: 7, factor: 2.3 },
  { level: 8, factor: 2.4 },
  { level: 9, factor: 2.5 },
]

const calculatedPoints = computed(() => {
  return (honorPoints.value * monthsWorked.value * selectedLevel.value) + teamTotal.value
})
</script>

<style scoped>
.reward-card {
  @apply bg-gradient-to-br from-gold-50 to-white rounded-xl shadow-lg p-6 border-2 border-gold-200 hover:border-gold-400 transform hover:-translate-y-2 transition-all duration-300;
}
</style>
