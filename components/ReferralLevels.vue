<template>
  <section class="py-12 bg-white">
    <div class="max-w-5xl mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div class="p-8 text-center">
          <h3 class="text-2xl font-bold text-navy-900 mb-8">
            مثال: موظف C1 مع 5 إحالات مباشرة
          </h3>

          <!-- Levels Grid -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <!-- Level 5 -->
            <div class="bg-red-50 rounded-xl p-4 border border-red-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-2xl font-bold text-red-600 mb-1">$6</div>
              <div class="text-sm text-gray-500">المستوى 5</div>
            </div>

            <!-- Level 4 -->
            <div class="bg-orange-50 rounded-xl p-4 border border-orange-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-2xl font-bold text-orange-600 mb-1">$6</div>
              <div class="text-sm text-gray-500">المستوى 4</div>
            </div>

            <!-- Level 3 -->
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-2xl font-bold text-purple-600 mb-1">$12</div>
              <div class="text-sm text-gray-500">المستوى 3</div>
            </div>

            <!-- Level 2 -->
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-2xl font-bold text-blue-600 mb-1">$18</div>
              <div class="text-sm text-gray-500">المستوى 2</div>
            </div>

            <!-- Level 1 -->
            <div class="col-span-2 md:col-span-1 bg-green-50 rounded-xl p-4 border border-green-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div class="text-2xl font-bold text-green-600 mb-1">$72</div>
              <div class="text-sm text-gray-500">المستوى 1</div>
            </div>
          </div>

          <!-- Total Bar -->
          <div class="bg-gold-50 rounded-xl p-6 border border-gold-100">
            <div class="text-xl md:text-2xl font-bold text-navy-900">
              إجمالي العمولات من شخص واحد: <span class="text-gold-600">114$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this static component
</script>
