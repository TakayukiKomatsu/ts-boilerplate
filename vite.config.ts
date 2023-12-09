/// <reference types="vitest" />
import {defineConfig} from "vitest/config"

///<reference types="vite/client" />
export default defineConfig({
  test: {
    alias: {
      "@": "/src",
      "@test": "/test"
    }
  }
})
