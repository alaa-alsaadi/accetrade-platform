<template>
  <section id="home" class="relative bg-gradient-navy min-h-[600px] flex items-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-right animate-fade-in-up">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            شبكة ACCE<br/>
            <span class="text-gradient-gold">للإعلانات</span>
          </h1>
          <p class="text-xl md:text-2xl text-gold-200 mb-8 leading-relaxed">
            فرصتك الذهبية لتحقيق دخل استثنائي في العراق
          </p>
          <p class="text-lg text-gray-300 mb-10 leading-relaxed">
            انضم إلى أكبر شبكة إعلانات في العراق واحصل على أرباح يومية مضمونة. 
            نظام عمولات متطور، نقاط شرف، ومكافآت تصل إلى سيارة BMW!
          </p>
          
          <div class="flex flex-wrap gap-4 justify-end">
            <a href="#memberships" class="btn-primary">
              <Rocket class="w-5 h-5 inline-block ml-2" />
              ابدأ الآن
            </a>
            <a href="#earnings" class="btn-secondary">
              <Calculator class="w-5 h-5 inline-block ml-2" />
              احسب أرباحك
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-12">
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400 mb-1">918 USDT</div>
              <div class="text-sm text-gray-300">أرباح 10 أيام</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400 mb-1">8</div>
              <div class="text-sm text-gray-300">مستويات عضوية</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gold-400 mb-1">9+</div>
              <div class="text-sm text-gray-300">مدن عراقية</div>
            </div>
          </div>
        </div>

        <!-- Image/Icon Side - Enhanced Illustration -->
        <div class="hidden lg:flex items-center justify-center animate-fade-in">
          <div class="relative">
            <!-- Main Circle with Gradient -->
            <div class="w-80 h-80 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-2xl relative overflow-hidden">
              <!-- Animated Background Pattern -->
              <div class="absolute inset-0 opacity-20">
                <svg class="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="20" cy="20" r="2" fill="white" class="animate-pulse" />
                  <circle cx="80" cy="30" r="1.5" fill="white" class="animate-pulse" style="animation-delay: 0.5s" />
                  <circle cx="30" cy="70" r="2.5" fill="white" class="animate-pulse" style="animation-delay: 1s" />
                  <circle cx="70" cy="80" r="1" fill="white" class="animate-pulse" style="animation-delay: 1.5s" />
                  <circle cx="50" cy="40" r="1.8" fill="white" class="animate-pulse" style="animation-delay: 2s" />
                </svg>
              </div>
              
              <!-- Globe Icon -->
              <Globe class="w-40 h-40 text-navy-900 relative z-10" />
              
              <!-- Orbiting Elements -->
              <div class="absolute inset-0" style="animation: spin 20s linear infinite">
                <div class="absolute top-10 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span class="text-2xl">💰</span>
                </div>
              </div>
              
              <div class="absolute inset-0" style="animation: spin 15s linear infinite reverse">
                <div class="absolute bottom-10 left-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span class="text-xl">📈</span>
                </div>
              </div>
            </div>
            
            <!-- Floating Elements with enhanced animations -->
            <div class="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl px-4 py-3 animate-bounce">
              <p class="text-sm font-bold text-navy-900">💰 أرباح يومية</p>
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-4 py-3 animate-bounce" style="animation-delay: 0.5s">
              <p class="text-sm font-bold text-navy-900">🏆 نقاط شرف</p>
            </div>
            <div class="absolute top-1/2 -left-12 bg-white rounded-full shadow-xl px-3 py-2 animate-pulse">
              <p class="text-xs font-bold text-gold-600">+918 USDT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Globe, Rocket, Calculator } from 'lucide-vue-next'
</script>
