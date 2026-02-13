<template>
  <nav class="sticky top-0 z-50 bg-gradient-navy shadow-xl border-b-2 border-gold-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo and Brand -->
        <a href="#home" class="flex items-center space-x-3 space-x-reverse h-full group">
          <div class="h-14 w-auto flex items-center justify-center">
            <img src="/logo.png" alt="ACCE Logo" class="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div class="flex flex-col items-start text-right">
            <span class="text-xl font-black text-white leading-none tracking-wider">ACCE</span>
            <span class="text-[10px] text-gold-400 font-bold uppercase tracking-[0.2em]">Advertising</span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6 space-x-reverse">
          <a href="#home" class="nav-link">الرئيسية</a>
          <a href="#memberships" class="nav-link">العضويات</a>
          <a href="#how-it-works" class="nav-link">كيف يعمل النظام</a>
          <a href="#locations" class="nav-link">المراكز الإبداعية</a>
          <a href="https://accewhitepaper.com/" target="_blank" class="nav-link text-gold-400">نبذه عن الشركة</a>
          <a href="#contact" class="nav-link">اتصل بنا</a>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2 rounded-lg hover:bg-navy-600 transition-colors">
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <a href="#home" class="mobile-nav-link">الرئيسية</a>
        <a href="#memberships" class="mobile-nav-link">العضويات</a>
        <a href="#how-it-works" class="mobile-nav-link">كيف يعمل النظام</a>
        <a href="#locations" class="mobile-nav-link">المراكز الإبداعية</a>
        <a href="https://accewhitepaper.com/" target="_blank" class="mobile-nav-link text-gold-400">نبذه عن الشركة</a>
        <a href="#contact" class="mobile-nav-link">اتصل بنا</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Globe, Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-gold-100 hover:text-gold-400 font-semibold text-sm transition-colors duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 right-0 w-0 h-0.5 bg-gold-400 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.mobile-nav-link {
  @apply block px-4 py-2 text-gold-100 hover:bg-navy-600 hover:text-gold-400 rounded-lg transition-colors;
}
</style>
