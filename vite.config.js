import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // add beberapa file untuk di build
        index: 'index.html',
        hello_world: 'hello-world.html',
        contact: 'contact.html',
        task: 'task.html',
        counter: 'counter.html',
        note: 'note.html',
        profle: 'profile.html',
        timer: 'timer.html',
        guestbook: 'guestbook.html',
        product: 'product.html',
        online: 'online.html',
      }
    }
  }
})
