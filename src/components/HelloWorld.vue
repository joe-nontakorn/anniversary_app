<script setup>
// import { ref } from 'vue'

import { ref, onMounted } from 'vue'

const randomStyles = ref([])

onMounted(() => {
  const styles = []
  for (let i = 0; i < 40; i++) {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const size = Math.random() * 15 + 10
    const delay = Math.random() * 5

    styles.push({
      left: `${left}vw`,
      top: `${top}vh`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`
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
    <span v-for="(style, index) in randomStyles" :key="index" class="heart" :style="style" />
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
  z-index: 0;
  overflow: hidden;
}

.heart {
  position: absolute;
  background-color: #ff69b4;
  transform: rotate(45deg);
  animation: blink 1.5s infinite ease-in-out;
  opacity: 0.8;
  border-radius: 50%;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ff69b4;
  border-radius: 50%;
}

.heart::before {
  top: -50%;
  left: 0;
}

.heart::after {
  left: -50%;
  top: 0;
}

@keyframes blink {

  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}
</style>
