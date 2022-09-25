/** @type {import('tailwindcss').Config} */
import tailwindcssTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    "content/**/*.md",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "corporate", "winter", "business", "fantasy"]
  },
  plugins: [tailwindcssTypography, (daisyui)],
};
