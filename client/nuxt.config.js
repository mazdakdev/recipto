export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/transitions.css', // update this
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/toast',
    '@nuxtjs/auth',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://0.0.0.0:8000/api'
  },
    auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/rest-auth/login/', method: 'post', propertyName: 'token' },
          user: {
            url: '/rest-auth/user/',
            method: 'get',
            propertyName: false,
          },

          logout: false
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  toast: {
    position: 'top-right',
    duration: 2000
  },
  loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
  },





}
