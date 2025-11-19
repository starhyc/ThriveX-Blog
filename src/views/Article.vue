<template>
  <div class="article-page">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">文章列表</h1>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-6 mb-6" v-for="article in articles" :key="article.id" data-aos="fade-up">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">{{ article.title }}</h2>
        <div class="flex items-center text-gray-500 text-sm mb-4">
          <span class="mr-4">作者: {{ article.author }}</span>
          <span>{{ article.date }}</span>
        </div>
        <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
        <div class="flex items-center justify-between">
          <div>
            <span v-for="tag in article.tags" :key="tag" class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
              {{ tag }}
            </span>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
            阅读全文
          </button>
        </div>
      </div>
      
      <div class="flex justify-center mt-8">
        <nav class="flex items-center space-x-2">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">1</button>
          <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">2</button>
          <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">3</button>
          <span class="mx-2">...</span>
          <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">10</button>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const articles = ref<Article[]>([])

onMounted(() => {
  // 模拟文章数据
  articles.value = [
    {
      id: 1,
      title: 'Vue 3 Composition API 深入解析',
      author: '刘宇阳',
      date: '2023-06-15',
      excerpt: 'Composition API 是 Vue 3 中引入的一个重要特性，它提供了更好的逻辑组织方式和代码复用机制...',
      tags: ['Vue', 'Composition API', '前端']
    },
    {
      id: 2,
      title: 'TypeScript 在大型项目中的应用',
      author: '刘宇阳',
      date: '2023-06-10',
      excerpt: 'TypeScript 为 JavaScript 添加了静态类型检查，在大型项目中能够显著提高代码质量和开发效率...',
      tags: ['TypeScript', 'JavaScript', '开发']
    },
    {
      id: 3,
      title: '现代 CSS 技术与实践',
      author: '刘宇阳',
      date: '2023-06-05',
      excerpt: 'CSS 技术不断发展，现代 CSS 提供了许多强大的功能，如 Grid、Flexbox、自定义属性等...',
      tags: ['CSS', '样式', '前端']
    }
  ]
})
</script>