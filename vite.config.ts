import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
import { viteSingleFile } from "vite-plugin-singlefile"



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(), viteSingleFile()],
})
