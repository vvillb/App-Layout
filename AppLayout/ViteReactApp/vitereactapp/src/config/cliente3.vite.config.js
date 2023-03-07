import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins:[react()],
    resolve:{
        alias:{
            '@client-layout':`../../src/plugins/client3/Layout.jsx`,
        }
    }
})
