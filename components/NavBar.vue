<template>
  <nav class="sticky top-0 z-50 bg-gradient-navy shadow-xl border-b-2 border-gold-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo and Brand -->
        <div class="flex items-center space-x-4 space-x-reverse">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 shadow-lg">
            <Globe class="w-7 h-7 text-navy-900" />
          </div>
          <div class="text-right">
            <h1 class="text-xl font-bold text-white">ACCE</h1>
            <p class="text-xs text-gold-300">شبكة الإعلانات</p>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6 space-x-reverse">
          <a href="#home" class="nav-link">الرئيسية</a>
          <a href="#memberships" class="nav-link">العضويات</a>
          <a href="#earnings" class="nav-link">الأرباح</a>
          <a href="#locations" class="nav-link">المراكز الإبداعية</a>
          <a href="#contact" class="nav-link">اتصل بنا</a>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2 rounded-lg hover:bg-navy-600 transition-colors"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
        <a href="#home" class="mobile-nav-link">الرئيسية</a>
        <a href="#memberships" class="mobile-nav-link">العضويات</a>
        <a href="#earnings" class="mobile-nav-link">الأرباح</a>
        <a href="#locations" class="mobile-nav-link">المراكز الإبداعية</a>
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
