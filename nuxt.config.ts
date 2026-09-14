// Polyfills for Set methods on Node < 22 (PostCSS/cssnano compatibility)
const sp = Set.prototype as any
if (!sp.difference) {
  sp.difference = function (other: any) {
    const result = new Set(this)
    for (const elem of other) result.delete(elem)
    return result
  }
}
if (!sp.intersection) {
  sp.intersection = function (other: any) {
    const result = new Set()
    for (const elem of other) {
      if (this.has(elem)) result.add(elem)
    }
    return result
  }
}
if (!sp.union) {
  sp.union = function (other: any) {
    const result = new Set(this)
    for (const elem of other) result.add(elem)
    return result
  }
}
if (!sp.isDisjointFrom) {
  sp.isDisjointFrom = function (other: any) {
    for (const elem of other) {
      if (this.has(elem)) return false
    }
    return true
  }
}
if (!sp.isSubsetOf) {
  sp.isSubsetOf = function (other: any) {
    if (this.size > (other.size ?? Infinity)) return false
    for (const elem of this) {
      if (!other.has(elem)) return false
    }
    return true
  }
}
if (!sp.isSupersetOf) {
  sp.isSupersetOf = function (other: any) {
    for (const elem of other) {
      if (!this.has(elem)) return false
    }
    return true
  }
}
if (!sp.symmetricDifference) {
  sp.symmetricDifference = function (other: any) {
    const result = new Set(this)
    for (const elem of other) {
      if (this.has(elem)) result.delete(elem)
      else result.add(elem)
    }
    return result
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plataforma del Centro Roberto Garza Sada (CRGS) - Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

