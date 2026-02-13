<template>
  <section id="locations" class="py-16 bg-gradient-to-br from-navy-50 to-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          <MapPin class="w-10 h-10 inline-block ml-2 text-gold-500" />
          المراكز <span class="text-gradient-gold">الإبداعية</span> في العراق
        </h2>
        <p class="text-lg text-gray-600">ابحث عن أقرب مركز إبداعي لك</p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-10">
        <div class="relative">
          <Search class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="ابحث عن مدينة أو منطقة..."
            class="w-full px-12 py-4 rounded-xl border-2 border-gray-200 focus:border-gold-500 outline-none text-lg"
          />
        </div>
      </div>

      <!-- Locations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="location in filteredLocations" :key="location.city" class="location-card">
          <div class="flex items-start mb-4">
            <div class="bg-gold-500 rounded-full p-3 ml-3">
              <MapPin class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-navy-900 mb-1">{{ location.city }}</h3>
              <p class="text-sm text-gray-600">{{ location.centers.length }} مراكز إبداعية</p>
            </div>
          </div>
          
          <div class="space-y-2">
            <div v-for="(center, index) in location.centers" :key="index" class="flex items-center">
              <Building2 class="w-4 h-4 ml-2 text-gold-600 flex-shrink-0" />
              <span class="text-sm text-navy-700">{{ center }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredLocations.length === 0" class="text-center py-12">
        <p class="text-xl text-gray-500">لا توجد نتائج للبحث "{{ searchQuery }}"</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MapPin, Search, Building2 } from 'lucide-vue-next'

const searchQuery = ref('')

const locations = [
  {
    city: 'بغداد',
    centers: ['العطيفية', 'شارع الجهاد', 'الدورة']
  },
  {
    city: 'النجف',
    centers: ['المشخاب', 'مول النجف', 'المناذرة']
  },
  {
    city: 'البصرة',
    centers: ['شط العرب']
  },
  {
    city: 'كربلاء',
    centers: ['الإبراهيمية', 'الأمل']
  },
  {
    city: 'الموصل',
    centers: ['الزهور']
  },
  {
    city: 'الأنبار',
    centers: ['الرمادي']
  },
  {
    city: 'ميسان',
    centers: ['الميمونة']
  },
  {
    city: 'أربيل',
    centers: ['أربيل - المركز']
  },
  {
    city: 'دهوك',
    centers: ['دهوك - المركز']
  },
]

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations
  
  const query = searchQuery.value.toLowerCase()
  return locations.filter(location => 
    location.city.toLowerCase().includes(query) ||
    location.centers.some(center => center.toLowerCase().includes(query))
  )
})
</script>

<style scoped>
.location-card {
  @apply bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-gold-400 transform hover:-translate-y-2 transition-all duration-300;
}
</style>
