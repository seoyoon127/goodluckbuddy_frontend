// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://goodluckbuddy.store:8080", 
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, "/api"),
      
//         configure: (proxy, _options) => {
//           proxy.on('proxyReq', (proxyReq, req, _res) => {
//             console.log('✈️ [Proxy Request]:', req.method, req.url, '->', proxyReq.path);
//           });
//         },
//       }
//     }
//   }
// });