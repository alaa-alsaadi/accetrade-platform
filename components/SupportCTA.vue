<template>
  <section class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-navy-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-navy-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-navy-800 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>

        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            لديك سؤال آخر؟
          </h2>
          <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            فريق الدعم متواجد على مدار الساعة للإجابة على جميع استفساراتك
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <!-- WhatsApp Button -->
            <a 
              href="https://wa.me/9647716461687" 
              target="_blank"
              class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto min-w-[160px]"
            >
              <MessageCircle class="w-5 h-5" />
              <span>واتساب</span>
            </a>

            <!-- Telegram Button -->
            <a 
              href="https://t.me/alaa_dev" 
              target="_blank"
              class="flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1f8ubc] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto min-w-[160px]"
            >
              <Send class="w-5 h-5" />
              <span>تيليجرام</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle, Send } from 'lucide-vue-next'
</script>
