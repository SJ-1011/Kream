import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html
        navigation: 'src/components/navigation.html',
        productcard: 'src/components/product-card.html',
        recommandcard: 'src/components/recommand-card.html',
        recommandimg: 'src/components/recommand-img.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
