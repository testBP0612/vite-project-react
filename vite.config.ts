import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(root, 'components'),
      '@pages': resolve(root, 'pages'),
      '@utils': resolve(root, 'utils'),
      '@hooks': resolve(root, 'hooks'),
      '@constants': resolve(root, 'constants'),
    },
  },
});
