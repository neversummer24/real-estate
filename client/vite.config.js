import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // 允许使用 describe / test 等全局函数
    environment: 'jsdom',       // 用于模拟浏览器环境
    setupFiles: './src/setupTests.js', // 可选：初始化测试环境（例如加载 jest-dom）
    coverage: {
      reporter: ['text', 'html'], // 控制台 + HTML 覆盖率报告
      reportsDirectory: './coverage', // 输出路径
    },
  },
});

