import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
        // 1. THIS IS THE MISSING PIECE FOR GITHUB PAGES
        // Replace 'Highly-Aware-Wellness-Centre' with your EXACT repo name
        base: '/Highly-Aware-Wellness-Centre/', 

        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        },
        // 2. Fix for build output (optional but recommended)
        build: {
            outDir: 'dist',
        }
    };
});
