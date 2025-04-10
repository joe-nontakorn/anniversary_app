<script setup>
// import { ref } from 'vue'

import { ref, onMounted } from 'vue'

const randomStyles = ref([])

onMounted(() => {
  const styles = []

  for (let i = 0; i < 40; i++) {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const size = Math.random() * 20 + 20
    const delay = Math.random() * 5

    styles.push({
      left: `${left}vw`,
      top: `${top}vh`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
    })
  }

  randomStyles.value = styles
})


// props รับข้อความ (ถ้าอยากเปลี่ยนได้ภายหลัง)
defineProps({
  msg: String
})

// ตัวอย่าง: ปุ่มเปิด/ปิดเพลง
const isPlaying = ref(false) // เริ่มต้น = ยังไม่เล่น
const audio = ref(null)

const toggleMusic = () => {
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause()
    } else {
      audio.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

</script>

<template>
  <!-- หัวใจตกกระจายทั่วหน้า -->
  <div class="hearts-container">
  <svg
    v-for="(style, index) in randomStyles"
    :key="index"
    class="animated-heart"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    :style="style"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 
       4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44H13.4C14.1 
       5.01 15.77 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 
       6.86-8.55 11.54L12 21.35z"
    />
  </svg>
</div>


  <!-- เนื้อหาหลัก -->
  <div class="container">
    <h1>{{ msg || 'Happy Anniversary 💖' }}</h1>

    <!-- รูปภาพ (ถ้ามี) -->
    <!-- <img class="photo" src="/anniversary-photo.jpg" alt="ภาพคู่ของเรา" /> -->

    <p class="message">
      ขอบคุณที่อยู่ด้วยกันมาเสมอ... รักเธอที่สุดในโลกเลย 💘
    </p>

    <!-- เพลง (เปิด/ปิดได้) -->🏩

    <audio ref="audio" loop>
      <source src="/nai-mue-khong-chan.mp3" type="audio/mp3" />
      Your browser does not support the audio element.💖
    </audio>

    <button class="music-btn" @click="toggleMusic">
      {{ isPlaying ? '⏸ หยุดเพลง' : '▶️ เล่นเพลง' }}
    </button>

  </div>
</template>


<style scoped>
.container {
  text-align: center;
  padding: 2rem;
  font-family: 'Kanit', sans-serif;
  background: linear-gradient(to bottom, #ffe0f0, #ffffff);
  min-height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #e91e63;
  margin-bottom: 1rem;
}

.photo {
  width: 250px;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}

.message {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}

.music-btn {
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.music-btn:hover {
  background-color: #d81b60;
}
.hearts-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  overflow: hidden;
}

.animated-heart {
  position: absolute;
  width: 24px;
  height: 24px;
  color: #f472b6; /* pink-400 */
  animation: float 6s ease-in infinite;
  opacity: 0.85;
}


@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-100px) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-200px) scale(0.8);
    opacity: 0;
  }
}

.animate-float {
  animation: float 6s ease-in infinite;
}


</style>
