import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
};
