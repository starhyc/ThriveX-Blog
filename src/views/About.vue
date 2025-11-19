<template>
  <div class="about-page">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">关于我们</h1>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <section class="mb-12" data-aos="fade-up">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">博客简介</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            欢迎来到 Thrive Blog，这是一个专注于前端技术分享的个人博客。
            我们致力于提供高质量的技术文章、教程和实践经验分享。
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            博客涵盖了 Vue.js、React、TypeScript、CSS 等前端技术的深度解析，
            以及现代 Web 开发的最佳实践和趋势分析。
          </p>
          <p class="text-gray-600 leading-relaxed">
            我们希望通过这个平台，与更多的开发者交流学习，共同进步。
          </p>
        </div>
      </section>
      
      <section class="mb-12" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">技术栈</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-3xl text-green-600 font-bold mb-2">Vue 3</div>
              <p class="text-gray-600">Composition API</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-3xl text-blue-600 font-bold mb-2">TypeScript</div>
              <p class="text-gray-600">类型安全</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-3xl text-teal-600 font-bold mb-2">Tailwind</div>
              <p class="text-gray-600">实用优先</p>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-3xl text-purple-600 font-bold mb-2">Vite</div>
              <p class="text-gray-600">快速构建</p>
            </div>
          </div>
        </div>
      </section>
      
      <section data-aos="fade-up" data-aos-delay="400">
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">联系我</h2>
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
              <h3 class="text-xl font-medium text-gray-700 mb-4">信息</h3>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="w-24 text-gray-600">姓名:</span>
                  <span class="text-gray-800">刘宇阳</span>
                </li>
                <li class="flex items-center">
                  <span class="w-24 text-gray-600">邮箱:</span>
                  <span class="text-gray-800">liuyuyang1024@yeah.net</span>
                </li>
                <li class="flex items-center">
                  <span class="w-24 text-gray-600">网站:</span>
                  <a href="https://liuyuyang.net" class="text-blue-600 hover:underline">https://liuyuyang.net</a>
                </li>
              </ul>
            </div>
            <div class="md:w-1/2">
              <h3 class="text-xl font-medium text-gray-700 mb-4">留言</h3>
              <form @submit.prevent="submitForm">
                <div class="mb-4">
                  <input 
                    type="text" 
                    v-model="form.name" 
                    placeholder="您的姓名" 
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div class="mb-4">
                  <input 
                    type="email" 
                    v-model="form.email" 
                    placeholder="您的邮箱" 
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div class="mb-4">
                  <textarea 
                    v-model="form.message" 
                    placeholder="您的留言" 
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                >
                  发送留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // 简单表单提交逻辑
  console.log('提交表单:', form.value)
  alert('感谢您的留言！')
  form.value = { name: '', email: '', message: '' }
}
</script>