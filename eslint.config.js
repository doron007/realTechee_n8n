// eslint-disable-next-line @typescript-eslint/no-require-imports
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["next-env.d.ts", ".next/**/*", "dist/**/*", "amplify/dist/**/*", ".amplify/**/*"],
  },
];

module.exports = eslintConfig;