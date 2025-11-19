<template>
  <div class="album-page">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-800">相册</h1>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" 
             v-for="photo in photos" :key="photo.id" 
             data-aos="fade-up">
          <div class="aspect-w-16 aspect-h-9 bg-gray-200">
            <img :src="photo.url" :alt="photo.title" class="w-full h-48 object-cover">
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-800">{{ photo.title }}</h3>
            <p class="text-gray-600 text-sm mt-1">{{ photo.date }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Photo {
  id: number;
  title: string;
  url: string;
  date: string;
}

const photos = ref<Photo[]>([])

onMounted(() => {
  // 模拟相册数据
  photos.value = [
    { id: 1, title: '自然风光', url: 'https://placehold.co/300x200?text=Photo+1', date: '2023-05-15' },
    { id: 2, title: '城市建筑', url: 'https://placehold.co/300x200?text=Photo+2', date: '2023-05-20' },
    { id: 3, title: '人物摄影', url: 'https://placehold.co/300x200?text=Photo+3', date: '2023-05-25' },
    { id: 4, title: '微距摄影', url: 'https://placehold.co/300x200?text=Photo+4', date: '2023-06-01' },
    { id: 5, title: '夜景拍摄', url: 'https://placehold.co/300x200?text=Photo+5', date: '2023-06-05' },
    { id: 6, title: '旅行记忆', url: 'https://placehold.co/300x200?text=Photo+6', date: '2023-06-10' },
    { id: 7, title: '动物世界', url: 'https://placehold.co/300x200?text=Photo+7', date: '2023-06-15' },
    { id: 8, title: '美食摄影', url: 'https://placehold.co/300x200?text=Photo+8', date: '2023-06-20' }
  ]
})
</script>