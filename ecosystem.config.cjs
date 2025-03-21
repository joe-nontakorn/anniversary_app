module.exports = {
  apps: [
    {
      name: 'vue-dev',
      script: 'npm',
      args: 'run dev',
      interpreter: 'cmd.exe', // สำคัญบน Windows
      cwd: './' // root โฟลเดอร์โปรเจกต์
    }
  ]
}
