import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  importMap: './styled-system',
  presets: ['@pandacss/preset-panda'],
  preflight: true,
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#3b82f6' }
        }
      }
    }
  }
})
