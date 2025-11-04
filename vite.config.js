import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/Presentations/',

    build: {
        outDir: 'dist',
        emptyOutDir: true,

        // Copy all assets to a consistent location
        assetsDir: 'assets',

        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                gmuSlides: resolve(__dirname, 'gmu-slides/index.html'),
            }
        }
    },

    // Make sure these directories are publicly accessible
    publicDir: 'public'
});