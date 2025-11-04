import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/presentations/',  // Base path for GitHub Pages

    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                gmuSlides: resolve(__dirname, 'gmu-slides/index.html'),
            }
        }
    }
});
