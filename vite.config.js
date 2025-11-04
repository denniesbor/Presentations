import { defineConfig } from 'vite';
import { resolve } from 'path';

// vite configurations
export default defineConfig({
    base: '/presentations/',

    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                gmuSlides: resolve(__dirname, 'gmu-slides/index.html'),
            }
        }
    },

    resolve: {
        alias: {
            '/src': resolve(__dirname, 'gmu-slides/src')
        }
    }
});