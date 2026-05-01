import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
    css: {preprocessorOptions: {scss: {additionalData: `
      @use "@/assets/styles/functions.scss" as f;
      @use "@/assets/styles/variables.scss" as v;
      `}}}
  }),
)
