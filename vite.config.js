import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },

    server: {
        proxy: {
            // Get '/api' request
            "/api": {
                // Backend service url
                target: "http://localhost:8080/api/v1",
                // Change origin set to true
                changeOrigin: true,
                // Replace '/api' to ''
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
