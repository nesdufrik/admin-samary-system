import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVue3Resolver } from 'unplugin-vue-components/resolvers'
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
            resolvers: [BootstrapVue3Resolver()],
        }),
    ],
    history: {
        fallback: true,
    },
})
