import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api"로 시작하는 모든 요청을 가로챕니다.
      "/api": {
        target: "http://goodluckbuddy.store:8080", 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('✈️ [Proxy Request]:', req.method, req.url, '->', proxyReq.path);
          });
        },
      }
    }
  }
});