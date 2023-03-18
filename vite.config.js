import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
    },
    plugins: [
        mkcert(),
        vue(),
        Components({
            resolvers: [BootstrapVueNextResolver()],
        }),
    ],
    history: {
        fallback: true,
    },
})
