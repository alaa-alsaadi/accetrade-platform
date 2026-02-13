<template>
  <section id="home" class="relative bg-navy-950 min-h-[700px] flex items-center overflow-hidden">
    <!-- Sophisticated Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-navy-800/30 to-transparent rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-gold-600/10 to-transparent rounded-full blur-3xl -ml-20 -mb-20"></div>
      <!-- Grid Overlay -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-24 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Text Content -->
        <div class="text-right space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-gray-300 text-sm font-medium">المنصة الإعلانية الأسرع نمواً</span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            استثمارك الأمثل
            <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 animate-shine">
              في عالم الإعلانات
            </span>
          </h1>

          <p class="text-xl text-gray-300 leading-relaxed max-w-xl pr-2 border-r-4 border-gold-500">
             منصتك الشاملة لتحقيق دخل إضافي ومستدام من خلال شبكة إعلانية ذكية تربط الشركات بالمؤثرين. ابدأ اليوم وحوّل هاتفك إلى مصدر دخل حقيقي.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#memberships" class="group relative px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl overflow-hidden transition-all hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <span class="relative z-10 flex items-center justify-center gap-2">
                انضم الآن مجاناً
                <ArrowLeft class="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </span>
            </a>
            
            <a href="#how-it-works" class="px-8 py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <PlayCircle class="w-5 h-5 text-gold-500" />
              شاهد كيف نعمل
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
            <div>
              <div class="text-3xl font-bold text-white mb-1">900+</div>
              <div class="text-sm text-gray-400">عضو نشط</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-1">$16</div>
              <div class="text-sm text-gray-400">دخل يومي يصل لـ</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-1">100%</div>
              <div class="text-sm text-gray-400">ضمان المدفوعات</div>
            </div>
          </div>
        </div>

        <!-- Dynamic Visual - Realistic Mobile Mockup -->
        <div class="relative hidden lg:flex items-center justify-center animate-fade-in delay-200">
          <div class="relative w-[330px] h-[680px] bg-white rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden">
            <!-- Dynamic Island -->
            <div class="absolute top-3 left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30"></div>
            
            <!-- Status Bar Mock -->
            <div class="absolute top-0 left-0 right-0 h-12 w-full z-20 flex justify-between items-end px-7 pb-2 text-black text-[14px] font-semibold" dir="ltr">
               <div>18:03</div>
               <div class="flex gap-1.5 items-center text-black">
                  <div class="flex gap-0.5 items-end h-2.5">
                    <div class="w-1 h-1.5 bg-black rounded-[1px]"></div>
                    <div class="w-1 h-2 bg-black rounded-[1px]"></div>
                    <div class="w-1 h-2.5 bg-black rounded-[1px]"></div>
                  </div>
                  <div class="w-6 h-3 bg-opacity-30 border border-gray-400 rounded-[4px] relative flex items-center justify-center">
                     <div class="h-full bg-black w-[90%] rounded-[2px]" style="margin: 1px;"></div>
                  </div>
               </div>
            </div>

            <!-- Safari Browser UI Wrapper (Cleaned) -->
            <div class="h-full w-full bg-white flex flex-col pt-12 pb-8 rounded-[3rem] overflow-hidden relative z-10">
              
              <!-- App Content (Scrollable) -->
              <div class="flex-1 w-full bg-[#f0f4f8] flex flex-col font-sans text-right relative overflow-hidden" dir="rtl">
                
                <!-- Header Section -->
                <div class="bg-[#4285f4] p-5 pb-10 pt-4 text-white relative shadow-sm z-10 w-full transition-all duration-500">
                   <!-- User Info -->
                   <div class="flex items-center justify-center mb-6">
                      <div class="flex items-center gap-2">
                         <div class="w-8 h-8 rounded-full bg-gray-800 border-2 border-white overflow-hidden object-cover">
                           <img :src="currentProfile.avatar" alt="User" class="w-full h-full object-cover" />
                         </div>
                         <div class="flex items-center gap-1 text-lg">
                            <span class="font-bold">{{ currentProfile.username }}</span>
                            <span :class="currentProfile.levelColor" class="font-bold">{{ currentProfile.level }}</span>
                         </div>
                      </div>
                   </div>

                   <!-- Earnings & Progress -->
                   <div class="mb-4 px-2">
                     <div class="flex justify-between items-end mb-1">
                        <div class="text-sm font-medium opacity-90">الارباح</div>
                        <div class="text-xs opacity-80">{{ currentProfile.progressTotal }}</div>
                     </div>
                     <div class="flex items-end gap-2">
                        <div class="text-4xl font-bold leading-none">{{ currentProfile.earnings }}</div>
                        <div class="flex-1 h-3 bg-blue-400/30 rounded-full overflow-hidden mb-1 relative">
                          <!-- Striped Progress Bar pattern -->
                          <div class="absolute inset-0 bg-white/90 rounded-full transition-all duration-1000 ease-out" 
                               :style="{ width: currentProfile.progressValue }"
                               style="background-image: linear-gradient(45deg,rgba(0,0,0,.15) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.15) 50%,rgba(0,0,0,.15) 75%,transparent 75%,transparent); background-size: 1rem 1rem;">
                          </div>
                        </div>
                     </div>
                   </div>
                </div>

                <!-- Stats Grid -->
                <div class="mx-3 -mt-6 bg-white rounded-2xl shadow-sm p-4 relative z-20 text-center transition-all duration-300">
                  <div class="grid grid-cols-3 gap-y-4 gap-x-2 pb-4 border-b border-gray-50">
                     <div>
                        <div class="text-[10px] text-gray-500 mb-1">مكافأة الإحالة الداخلية</div>
                        <div class="text-blue-500 font-bold text-sm">{{ currentProfile.referralBonus }}</div>
                     </div>
                     <div class="border-x border-gray-100">
                        <div class="text-[10px] text-gray-500 mb-1">إجمالي دخل المهمة</div>
                        <div class="text-blue-500 font-bold text-sm">{{ currentProfile.totalTaskIncome }}</div>
                     </div>
                     <div>
                        <div class="text-[10px] text-gray-500 mb-1">دخل مهمة اليوم</div>
                        <div class="text-blue-500 font-bold text-sm">{{ currentProfile.dailyTaskIncome }}</div>
                     </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4 pt-4">
                     <div class="border-l border-gray-100">
                        <div class="text-[10px] text-gray-500 mb-1">إجمالي الإيرادات</div>
                        <div class="text-blue-500 font-bold text-sm">{{ currentProfile.totalRevenue }}</div>
                     </div>
                     <div>
                        <div class="text-[10px] text-gray-500 mb-1">يوم العمل الفعال</div>
                        <div class="text-blue-500 font-bold text-sm">{{ currentProfile.effectiveDays }}</div>
                     </div>
                  </div>
                </div>

                <!-- Menu Items -->
                <div class="flex-1 overflow-y-auto px-3 py-4 space-y-3 scrollbar-hide">
                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white shadow-sm">
                      <Wallet class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">شحن الحساب</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white shadow-sm">
                      <CreditCard class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">سحب</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-white shadow-sm">
                      <Users class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">توظيف الموظفين</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-sm">
                      <Landmark class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">عنوان المحفظة</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-sm">
                      <FileText class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">سجل الايداع</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-sm">
                      <FileText class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">سجل السحب</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>

                  <div class="bg-white rounded-xl p-3 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-gray-50 transition-colors cursor-pointer">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-white shadow-sm">
                      <Store class="w-5 h-5 filter drop-shadow-sm" />
                    </div>
                    <span class="text-blue-500 font-medium text-sm flex-1">ACCE متجر المختار</span>
                    <ChevronLeft class="w-4 h-4 text-blue-300" />
                  </div>
                </div>

                 <!-- Bottom Nav Mock -->
                 <div class="bg-white border-t border-gray-200 p-2 pb-5 flex justify-between items-center text-[10px] text-gray-400 font-medium z-20 relative">
                   <div class="flex flex-col items-center gap-1 flex-1">
                     <Home class="w-6 h-6" />
                     <span>الرئيسية</span>
                   </div>
                   <div class="flex flex-col items-center gap-1 flex-1">
                     <Briefcase class="w-6 h-6" />
                     <span>التوظيف</span>
                   </div>
                   <div class="flex flex-col items-center gap-1 flex-1">
                      <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center -mt-6 border-4 border-[#f0f4f8]">
                         <Zap class="w-5 h-5 text-white" />
                      </div>
                     <span>المنصب</span>
                   </div>
                   <div class="flex flex-col items-center gap-1 flex-1">
                     <ScrollText class="w-6 h-6" />
                     <span>السجل</span>
                   </div>
                   <div class="flex flex-col items-center gap-1 flex-1 text-[#4285f4]">
                     <User class="w-6 h-6" />
                     <span>المركز الشخصي</span>
                   </div>
                 </div>

               </div> <!-- End App Wrapper -->

            </div> <!-- End Screen Content -->
          </div> <!-- End Phone Frame -->
          
          <!-- Decorative Elements behind phone -->
          <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[3.5rem] blur-2xl animate-pulse"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { ArrowLeft, PlayCircle, Star, ThumbsUp, Share2, CheckCircle2, Wallet, ChevronLeft, CreditCard, Users, Store, Home, Briefcase, User, Coins, FileText, Landmark, ScrollText, Zap } from 'lucide-vue-next'

const profiles = [
  {
    username: '****61687',
    level: 'C 2',
    levelColor: 'text-yellow-400',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=Jack',
    earnings: '419',
    progressTotal: '107',
    progressValue: '5%',
    dailyTaskIncome: '38',
    totalTaskIncome: '430',
    referralBonus: '0',
    effectiveDays: '360',
    totalRevenue: '472'
  },
  {
    username: '****20076',
    level: 'B 1',
    levelColor: 'text-orange-400',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=Oliver',
    earnings: '8215.99',
    progressTotal: '331',
    progressValue: '85%',
    dailyTaskIncome: '0',
    totalTaskIncome: '9531.2',
    referralBonus: '5411.6',
    effectiveDays: '251',
    totalRevenue: '50578.8'
  },
  {
    username: '****86521',
    level: 'B 1',
    levelColor: 'text-orange-400',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=George',
    earnings: '319.89',
    progressTotal: '120',
    progressValue: '90%',
    dailyTaskIncome: '0',
    totalTaskIncome: '5138.6',
    referralBonus: '690',
    effectiveDays: '319',
    totalRevenue: '6889.6'
  }
]

const currentProfileIndex = ref(0)
const currentProfile = computed(() => profiles[currentProfileIndex.value])

onMounted(() => {
  setInterval(() => {
    currentProfileIndex.value = (currentProfileIndex.value + 1) % profiles.length
  }, 4000)
})
</script>

<style scoped>
.animate-shine {
  background-size: 200% auto;
  animation: shine 4s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
