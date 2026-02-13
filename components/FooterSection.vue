<template>
  <!-- Footer -->
  <footer id="contact" class="bg-gradient-navy text-white py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="text-right">
          <div class="flex items-center justify-center md:justify-start mb-4">
            <div class="h-20 w-auto">
              <img src="/logo.png" alt="ACCE Logo" class="h-full w-auto object-contain brightness-0 invert opacity-90" />
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            شركة شبكة ACCE للإعلانات - رائدة في مجال التسويق الرقمي والإعلانات في العراق
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-right">
          <h4 class="text-lg font-bold text-gold-400 mb-4">روابط سريعة</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-300 hover:text-gold-400 transition-colors">الرئيسية</a></li>
            <li><a href="#memberships" class="text-gray-300 hover:text-gold-400 transition-colors">العضويات</a></li>
            <li><a href="#earnings" class="text-gray-300 hover:text-gold-400 transition-colors">الأرباح</a></li>
            <li><a href="#loyalty" class="text-gray-300 hover:text-gold-400 transition-colors">نقاط الشرف</a></li>
            <li><a href="#locations" class="text-gray-300 hover:text-gold-400 transition-colors">المراكز الإبداعية</a></li>
            <li><a href="https://accewhitepaper.com/" target="_blank" class="text-gold-400 hover:text-gold-300 transition-colors font-bold">نبذه عن شركة</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="text-right">
          <h4 class="text-lg font-bold text-gold-400 mb-4">تواصل معنا</h4>
          <div class="space-y-3">
            <div class="flex items-center justify-end space-x-3 space-x-reverse">
              <span class="text-gray-300">العراق - بغداد</span>
              <MapPin class="w-5 h-5 text-gold-400" />
            </div>
            <div class="flex items-center justify-end space-x-3 space-x-reverse">
              <span class="text-gray-300" dir="ltr">{{ whatsappNumber }}</span>
              <Phone class="w-5 h-5 text-gold-400" />
            </div>
            <div class="flex items-center justify-end space-x-3 space-x-reverse">
              <span class="text-gray-300">info@acce-network.com</span>
              <Mail class="w-5 h-5 text-gold-400" />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-navy-600 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          &copy; {{ currentYear }} ACCE Network Advertising Co. Ltd. جميع الحقوق محفوظة.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MessageCircle, Globe, MapPin, Phone, Mail } from 'lucide-vue-next'

// Replace with actual WhatsApp number (placeholder for now)
const whatsappNumber = '+964 771 646 1687'
const whatsappMessage = encodeURIComponent('مرحباً، أرغب في الاستفسار عن خدمات ACCE Network')
const whatsappLink = computed(() => `https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${whatsappMessage}`)

const currentYear = new Date().getFullYear()
</script>
