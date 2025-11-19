<template>
  <div class="home">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">欢迎来到 Thrive Blog</h1>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <section class="mb-12" data-aos="fade-up">
        <h2 class="text-2xl font-semibold mb-6 text-gray-700">最新文章</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Vue 3 新特性介绍</h3>
            <p class="text-gray-600 mb-4">探索 Vue 3 中 Composition API 和其他新功能</p>
            <button class="text-blue-600 hover:text-blue-800 font-medium">阅读更多</button>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-medium text-gray-800 mb-2">TypeScript 最佳实践</h3>
            <p class="text-gray-600 mb-4">在项目中使用 TypeScript 提高代码质量</p>
            <button class="text-blue-600 hover:text-blue-800 font-medium">阅读更多</button>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-medium text-gray-800 mb-2">前端性能优化</h3>
            <p class="text-gray-600 mb-4">提升前端应用性能的实用技巧</p>
            <button class="text-blue-600 hover:text-blue-800 font-medium">阅读更多</button>
          </div>
        </div>
      </section>
      
      <section data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-2xl font-semibold mb-6 text-gray-700">关于本站</h2>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-600 leading-relaxed">
            这是一个基于 Vue 3、TypeScript 和 Tailwind CSS 构建的现代化博客系统。
            我们致力于分享前端开发经验、技术教程和行业洞察。
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 如果需要在组件挂载后执行特定逻辑，可以在这里添加
})
</script>