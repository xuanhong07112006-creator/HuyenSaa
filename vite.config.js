import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        test2: resolve(__dirname, 'test2.html'),
        chinh: resolve(__dirname, 'HuyensaNatural/html/chinh.html'),
        sanpham: resolve(__dirname, 'HuyensaNatural/html/san-pham.html'),
        gioithieu: resolve(__dirname, 'HuyensaNatural/html/gioi-thieu.html'),
        lienhe: resolve(__dirname, 'HuyensaNatural/html/lien-he.html'),
      }
    }
  }
});
