import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
          '@client-layout':path.resolve(__dirname,'../plugins/client1/Layout.jsx'),
          '@client-i18n_es':path.resolve(__dirname,'../../src/plugins/client1/i18n/es/client.json'),
          '@client-menuData':path.resolve(__dirname,'../../src/plugins/client1/components/data/Data.jsx')
      }
    }
})
