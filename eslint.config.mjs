import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  globalIgnores([
    // Tests
    '**/__tests__/**',
    '**/__mocks__/**',
    '**/__fixtures__/**',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    // Build and caches
    '.next/**',
    '.next/dev/**',
    'out/**',
    'build/**',
    'coverage/**',
    'node_modules/**',
    '.pnp/**',
    '.pnp.js',
    '*.tsbuildinfo',
    // Misc
    '.vercel/**',
    '.DS_Store',
    '*.pem',
    'npm-debug.log*',
    'yarn-debug.log*',
    'yarn-error.log*',
    '.env*.local',
    'next-env.d.ts'
  ])
]);
