import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
/// <reference types="vitest" />

export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr({})],
  define: {
    "process.env": process.env,
  },
  root: "./",
  test: {
    setupFiles: "./setupTests.ts",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    css: true,
    pool: "vmThreads",
    poolOptions: {
      useAtomics: true,
    },
    browser: {
      enabled: true,
      name: "chromium",
      headless: true,
      provider: "playwright",
    },
    testTimeout: 3000,
    onConsoleLog(log, type) {
      if (log.includes("inside a test was not wrapped in act")) return false;
      if (
        log.includes(
          "Warning: ReactDOM.render is no longer supported in React 18"
        )
      )
        return false;
      if (log.includes("should be wrapped into act")) return false;
    },
    // coverage: {
    // 	provider: 'istanbul',
    // 	include: [
    // 		'app/**/*.{ts,tsx}'
    // 	],
    // 	exclude: [
    // 		'node_modules/**',
    // 		'dist/**',
    // 		'src/**/*.{test,spec}.{ts,tsx}',
    // 	],
    // 	all: true,
    // 	reporter: ['json', 'text', 'html'],
    // },
  },
});
