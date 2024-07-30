// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
/// <reference types="vitest" />

export default defineConfig({
  plugins: [react()],
  root: "./",
  test: {
    setupFiles: "./setupTests.ts",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
    css: true,
    pool: "vmThreads",
    poolOptions: {
      useAtomics: true,
    },
    testTimeout: 3000,
  },
});
