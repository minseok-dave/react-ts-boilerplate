// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: ['@minseok-dave/eslint-config-react-ts'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': [
      'error',
      {
        cssFiles: ['src/app.css'],
        callees: ['clsx', 'cva'],
        whitelist: [],
      },
    ],
  },
}
