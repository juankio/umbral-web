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
        { name: 'description', content: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS). Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.' },
        { name: 'theme-color', content: '#070707' },
        
        // OpenGraph / WhatsApp / Facebook
        { property: 'og:site_name', content: 'UMBRAL · CRGS' },
        { property: 'og:title', content: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey' },
        { property: 'og:description', content: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS). Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey. Zona Maco 2027.' },
        { property: 'og:url', content: 'https://umbral-web-three.vercel.app/' },
        { property: 'og:image', content: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg' },
        { property: 'og:image:secure_url', content: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:type', content: 'website' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'UMBRAL · Centro Roberto Garza Sada | Universidad de Monterrey' },
        { name: 'twitter:description', content: 'Plataforma oficial del Centro Roberto Garza Sada (CRGS) · UDEM. Zona Maco 2027.' },
        { name: 'twitter:image', content: 'https://umbral-web-three.vercel.app/images/og-umbral.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

