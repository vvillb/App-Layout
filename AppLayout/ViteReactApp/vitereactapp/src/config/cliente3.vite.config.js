import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import i18n from 'i18next';
import backend from 'i18next-http-backend';

export default defineConfig({
    plugins:[react({
        babel: {
          presets: [],
          // Your plugins run before any built-in transform (eg: Fast Refresh)
          plugins: [],
          // Use .babelrc files
          babelrc: true,
          // Use babel.config.js files
          configFile: true,
        }
      })],
    resolve:{
        alias:{
            '@client-layout':`../../src/plugins/client3/Layout.jsx`,
        }
    }
})
i18n.use(backend).init({
  lng: 'es', // default language
  fallbackLng: 'es', // fallback language
  backend: {
    loadPath: '../plugins/client3/i18n/es/client.json',
  },
});
