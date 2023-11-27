import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    zIndex: {
      header: '1000',
      navBar: '1100',
      backdrop: '1150',
      modal: '1200',
      tooltip: '1300',
      toastPopup: '1400',
    },
    extend: {
      boxShadow: {
        header: '0px 1px 1px 1px rgba(0, 0, 0, 0.05)',
        navbar: '0px 4px 4px 4px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
    },
  },
  plugins: [],
}
export default config
