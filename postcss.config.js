export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}, // autoprefixer is actually optional in v4 as lightningcss or the plugin handles it, but keeping it is fine or maybe redundant. Explicit is okay.
  },
}
