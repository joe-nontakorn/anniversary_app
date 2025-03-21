// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,       // ✅ เปิดให้เข้าจาก external เช่น ngrok ได้
    port: 5173        // หรือเปลี่ยนพอร์ตตามที่ต้องการ
  }
})
