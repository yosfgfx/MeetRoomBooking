import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MeetRoomBooking/', // Replace 'MeetRoomBooking' with your repository name
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
