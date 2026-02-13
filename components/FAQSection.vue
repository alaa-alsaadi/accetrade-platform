<template>
  <section id="faq" class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-navy-900 mb-3">
          الأسئلة <span class="text-gradient-gold">الشائعة</span>
        </h2>
        <p class="text-lg text-gray-600">إجابات على أكثر الأسئلة شيوعاً حول ACCE Network</p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-xl overflow-hidden hover:border-gold-300 transition-colors">
          <button 
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-white transition-colors text-right"
          >
            <span class="text-lg font-bold text-navy-900">{{ faq.question }}</span>
            <ChevronDown 
              class="w-5 h-5 text-gold-500 transition-transform duration-300"
              :class="{ 'transform rotate-180': faq.isOpen }"
            />
          </button>
          <div 
            v-show="faq.isOpen"
            class="p-6 bg-white border-t border-gray-100"
          >
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqs = ref([
  {
    question: 'كيف أبدأ العمل مع ACCE Network؟',
    answer: 'يمكنك البدء بالتسجيل في المنصة، وتفعيل عضويتك المجانية لمدة 3 أيام لتجربة النظام، ثم يمكنك اختيار الباقة المناسبة لك للبدء بجني الأرباح.',
    isOpen: false
  },
  {
    question: 'ما هي المتطلبات للعمل معكم؟',
    answer: 'كل ما تحتاجه هو هاتف ذكي واتصال بالإنترنت. العمل متاح للجميع ولا يتطلب خبرة سابقة أو شهادات.',
    isOpen: false
  },
  {
    question: 'كيف يتم الدفع؟',
    answer: 'يتم الدفع عبر المحافظ الإلكترونية (ZainCash) أو USDT. يتم تحويل الأرباح في مواعيد محددة (6، 16، 26 من كل شهر).',
    isOpen: false
  },
  {
    question: 'هل يمكنني العمل بدوام جزئي؟',
    answer: 'نعم، العمل مرن جداً. يمكنك إنجاز المهام في أي وقت يناسبك خلال اليوم، سواء كنت تعمل بدوام كامل أو طالب.',
    isOpen: false
  },
  {
    question: 'ما هو نظام نقاط الشرف؟',
    answer: 'هو نظام مكافآت يمنحك نقاطاً مقابل نشاطك ونمو فريقك. يمكنك استبدال هذه النقاط بمكافآت قيمة مثل أجهزة لابتوب، رحلات عمرة، وحتى سيارة.',
    isOpen: false
  },
  {
    question: 'كيف أكسب من الإحالات؟',
    answer: 'تكسب عمولة مباشرة عندما ينضم شخص عن طريق رابط الإحالة الخاص بك، بالإضافة إلى نسبة من أرباح فريقك حتى 5 مستويات.',
    isOpen: false
  },
  {
    question: 'هل العمل آمن وقانوني؟',
    answer: 'نعم، ACCE Network هي شبكة إعلانات مسجلة وتعمل بشفافية تامة. نحن نربط بين المعلنين (المدونين) والمنفذين (أنت) بشكل قانوني.',
    isOpen: false
  },
  {
    question: 'كم يمكنني أن أكسب يومياً؟',
    answer: 'يعتمد ذلك على مستوى عضويتك وجهدك. يمكنك كسب حتى 16$ يومياً كدخل ثابت، بالإضافة إلى العمولات والمكافآت التي قد تصل إلى آلاف الدولارات.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  if (faqs.value[index]) {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
}
</script>
