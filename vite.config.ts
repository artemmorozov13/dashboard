import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            ">1%",
            "last 4 versions",
            "Firefox ESR",
            "not ie < 9",
          ],
          flexbox: "no-2009",
        }),
      ],
    },
  },

  plugins: [
    tsconfigPaths(),
    react()
  ]
})