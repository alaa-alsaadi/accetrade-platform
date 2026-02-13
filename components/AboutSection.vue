<template>
  <section id="about" class="py-20 bg-white overflow-hidden relative">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-navy-50/50 rounded-full blur-3xl -ml-20 -mb-20"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Main Company Info -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div class="relative">
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gold-100 rounded-full opacity-50 blur-xl"></div>
          <h2 class="text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight relative">
            تأسست في هونغ كونغ
            <br>
            <span class="text-gradient-gold">وانطلقت في العراق</span>
          </h2>
          
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
            <p>
              تأسست شركة <span class="font-bold text-navy-800">ACCE</span> في هونغ كونغ – الصين عام 2000، ودخلت السوق العراقي في شهر سبتمبر من عام 2024. نحن في مرحلة نمو وتوسّع مستمر، انطلاقاً من رؤيتنا في تطوير قطاع الإعلان الرقمي وتعزيز الاقتصاد الرقمي في المنطقة.
            </p>
            <p>
              نتخصص في مجال الإعلان الرقمي الحديث، ونعتمد على <span class="font-bold text-gold-600">تقنيات الذكاء الاصطناعي وتحليل البيانات الضخمة</span> لتقديم حلول تسويقية متطورة تساعد الشركات والأفراد على الاستفادة من الفرص الرقمية وتحقيق نمو حقيقي.
            </p>
            <p>
              نعمل وفق الأطر القانونية المعتمدة، ومسجلون كمؤسسة إعلانية رقمية رسمية، وهدفنا تمكين المؤسسات وروّاد الأعمال من الدخول إلى عالم الاقتصاد الرقمي بثقة.
            </p>
          </div>
        </div>

        <!-- Stats/Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-gold-300 transition-colors">
            <div class="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
              <Globe2 class="w-6 h-6 text-navy-700" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-2">توسع عالمي</h3>
            <p class="text-gray-500 text-sm">من هونغ كونغ إلى العراق، ومستمرون في التوسع</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-gold-300 transition-colors">
            <div class="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-4">
              <Cpu class="w-6 h-6 text-gold-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-2">تقنيات ذكية</h3>
            <p class="text-gray-500 text-sm">ذكاء اصطناعي وتحليل بيانات لنتائج دقيقة</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-gold-300 transition-colors">
            <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck class="w-6 h-6 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-2">ترخيص رسمي</h3>
            <p class="text-gray-500 text-sm">شركة مسجلة تعمل وفق القانون العراقي</p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-gold-300 transition-colors">
            <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-2">نمو حقيقي</h3>
            <p class="text-gray-500 text-sm">حلول تضمن نمو أعمال شركائنا</p>
          </div>
        </div>
      </div>

      <!-- CSR Section -->
      <div class="bg-navy-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <!-- Decor -->
        <div class="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        
        <div class="relative z-10">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-gold-400 mb-4">المسؤولية المجتمعية</h3>
            <p class="text-gray-300 max-w-2xl mx-auto text-lg">
              نؤمن بأن نجاحنا مرتبط بنجاح مجتمعنا، لذا نكرس جزءاً كبيراً من جهودنا للمبادرات الإنسانية والتنمية المستدامة.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Initiative 1: Supermarket -->
            <div class="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 hover:border-gold-500/50 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-3">سوبر ماركت الأمل</h4>
                  <p class="text-gray-300 leading-relaxed mb-4">
                    مشروع تنموي في كربلاء المقدسة، حصل على شهادة التشغيل القانونية في 25 سبتمبر.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>توفير الاحتياجات الأساسية بأسعار مدعومة</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>دعم الأسر المتعففة</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>توفير فرص عمل للشباب</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Initiative 2: Happy Childhood -->
            <div class="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 hover:border-gold-500/50 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
                <div>
                  <h4 class="text-2xl font-bold text-white mb-3">دعم الطفولة وذوي الهمم</h4>
                  <p class="text-gray-300 leading-relaxed mb-4">
                    راعينا احتفالية اليوم العراقي لذوي الإعاقة في مؤسسة الطفولة السعيدة، بحضور شخصيات رسمية واجتماعية.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>دعم ذوي الاحتياجات الخاصة</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>مشاركة مجتمعية فعالة</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <Check class="w-4 h-4 text-gold-500" />
                      <span>مبادرات إنسانية مستمرة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Globe2, Cpu, ShieldCheck, TrendingUp, Check } from 'lucide-vue-next'
</script>
