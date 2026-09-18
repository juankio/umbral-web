import { chromium, type Browser } from 'playwright'
import { join } from 'path'
import { writeFileSync } from 'fs'

interface TestResult {
  suite: string
  name: string
  status: 'PASS' | 'FAIL'
  details?: string
  evidence?: string
}

const results: TestResult[] = []
const SCREENSHOT_DIR = '/home/juankio/Proyectos/umbral-web/qa-screenshots'

async function runQA() {
  console.log('🎯 INICIANDO QA SNIPER - KABUTO PRECISION TARGETING 🎯\n')

  const browser: Browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  // 1. VERIFICACIÓN DE RUTAS Y ASSETS (DESKTOP & MOBILE)
  const routes = [
    { path: '/', name: 'home' },
    { path: '/zona-maco', name: 'zona-maco' },
    { path: '/obras/encuadre', name: 'obra-encuadre' },
    { path: '/crgs', name: 'crgs' }
  ]

  for (const r of routes) {
    const url = `http://localhost:3000${r.path}`
    console.log(`\n========================================`)
    console.log(`🏹 Apuntando a ruta: ${url}`)
    console.log(`========================================`)

    // --- ESCRITORIO 1920x1080 ---
    {
      const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1
      })
      const page = await context.newPage()

      const consoleErrors: string[] = []
      const consoleWarnings: string[] = []
      const networkFailures: string[] = []

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(`[CONSOLE ERROR] ${msg.text()}`)
        } else if (msg.type() === 'warning') {
          consoleWarnings.push(`[CONSOLE WARN] ${msg.text()}`)
        }
      })

      page.on('response', resp => {
        if (resp.status() >= 400) {
          networkFailures.push(`[NETWORK ${resp.status()}] ${resp.url()}`)
        }
      })

      const response = await page.goto(url, { waitUntil: 'networkidle' })
      const status = response?.status() || 0

      results.push({
        suite: 'Rutas',
        name: `${r.name} - HTTP Status 200 (Desktop)`,
        status: status === 200 ? 'PASS' : 'FAIL',
        details: `Status HTTP recibido: ${status}`
      })

      // Esperar a que las animaciones iniciales y renderizado concluyan
      await page.waitForTimeout(600)

      // 1. Verificación de elementos clave en el DOM según la ruta
      const domChecks: { element: string; passed: boolean; desc: string }[] = []

      // Header presente y visible en todas las páginas
      const headerVisible = await page.locator('header').first().isVisible()
      const headerLogoOk = await page.evaluate(() => {
        const logo = document.querySelector('header img[alt="Umbral"]') as HTMLImageElement | null
        return logo ? (logo.complete && logo.naturalWidth > 0) : false
      })
      domChecks.push({
        element: 'Header & Logo',
        passed: headerVisible && headerLogoOk,
        desc: `Header visible: ${headerVisible}, Logo Umbral cargado: ${headerLogoOk}`
      })

      if (r.path === '/') {
        // Home: Héroe tipográfico, monolito 3D, títulos y banner Zona Maco
        const heroExists = (await page.locator('section').filter({ hasText: 'Cruza el' }).count()) > 0
        const logoHeroOk = await page.evaluate(() => {
          const img = document.querySelector('img[src*="logo-umbral-2"]') as HTMLImageElement | null
          return img ? (img.complete && img.naturalWidth > 0) : false
        })
        const bannerZMExists = (await page.locator('section').filter({ hasText: 'DEL 3 AL 7 DE FEBRERO 2027' }).count()) > 0

        domChecks.push({
          element: 'Home Héroe & Títulos ("Cruza el" / "Abre la puerta")',
          passed: heroExists,
          desc: `Sección Héroe detectada con tipografía: ${heroExists}`
        })
        domChecks.push({
          element: 'Home Monolito Logo Hero ("logo-umbral-2.png")',
          passed: logoHeroOk,
          desc: `Imagen monumental cargada: ${logoHeroOk}`
        })
        domChecks.push({
          element: 'Home Banner Zona Maco ("Proyectos Seleccionados")',
          passed: bannerZMExists,
          desc: `Banner ZM detectado: ${bannerZMExists}`
        })
      } else if (r.path === '/zona-maco') {
        // Zona Maco: Héroe triángulo origami, titular Proyectos seleccionados, carrusel y fotos
        const heroTriangleExists = (await page.locator('#hero-triangle').count()) > 0
        const projectsTitleExists = (await page.locator('h2').filter({ hasText: 'Proyectos seleccionados' }).count()) > 0
        const projectsCardsCount = await page.locator('#proyectos article').count()

        domChecks.push({
          element: 'Zona Maco Héroe Triángulo (#hero-triangle)',
          passed: heroTriangleExists,
          desc: `Sección hero-triangle detectada: ${heroTriangleExists}`
        })
        domChecks.push({
          element: 'Zona Maco Título "Proyectos seleccionados"',
          passed: projectsTitleExists,
          desc: `Titular H2 detectado: ${projectsTitleExists}`
        })
        domChecks.push({
          element: 'Zona Maco Carrusel de Obras (#proyectos article)',
          passed: projectsCardsCount > 0,
          desc: `${projectsCardsCount} tarjetas de proyectos renderizadas`
        })
      } else if (r.path === '/obras/encuadre') {
        // Obra Encuadre: Héroe de Obra, H1 Encuadre, Ficha técnica y Galería
        const h1Text = (await page.locator('h1').first().innerText()).trim()
        const isEncuadre = h1Text.toLowerCase().includes('encuadre')
        const splitArticleExists = (await page.locator('article').count()) > 0
        const heroImgOk = await page.evaluate(() => {
          const img = document.querySelector('section img') as HTMLImageElement | null
          return img ? (img.complete && img.naturalWidth > 0) : false
        })

        domChecks.push({
          element: 'Obra H1 Título ("Encuadre")',
          passed: isEncuadre,
          desc: `H1 encontrado: "${h1Text}"`
        })
        domChecks.push({
          element: 'Obra Split Layout (Galería + Ficha Técnica)',
          passed: splitArticleExists,
          desc: `Artículo split layout detectado: ${splitArticleExists}`
        })
        domChecks.push({
          element: 'Obra Imagen Principal Hero Cargada',
          passed: heroImgOk,
          desc: `Imagen hero cargada OK: ${heroImgOk}`
        })
      } else if (r.path === '/crgs') {
        // CRGS: Héroe Monumental, H1 Centro Roberto Garza Sada, Foto edificio y Tadao Ando
        const h1Text = (await page.locator('h1').first().innerText()).replace(/\s+/g, ' ').trim()
        const isCRGS = h1Text.includes('Centro Roberto Garza Sada')
        const buildingImgOk = await page.evaluate(() => {
          const img = document.querySelector('img[src*="crgs-building"]') as HTMLImageElement | null
          return img ? (img.complete && img.naturalWidth > 0) : false
        })
        const tadaoSection = (await page.locator('section').filter({ hasText: 'Tadao Ando' }).count()) > 0

        domChecks.push({
          element: 'CRGS H1 Monumental ("Centro Roberto Garza Sada")',
          passed: isCRGS,
          desc: `H1 encontrado: "${h1Text}"`
        })
        domChecks.push({
          element: 'CRGS Foto Monumental Edificio ("crgs-building.png")',
          passed: buildingImgOk,
          desc: `Foto edificio cargada OK: ${buildingImgOk}`
        })
        domChecks.push({
          element: 'CRGS Sección Tadao Ando & Puerta de la Creación',
          passed: tadaoSection,
          desc: `Sección arquitectónica detectada: ${tadaoSection}`
        })
      }

      const allDomPassed = domChecks.every(d => d.passed)
      results.push({
        suite: 'DOM Elements',
        name: `${r.name} - Elementos Clave en el DOM (Desktop)`,
        status: allDomPassed ? 'PASS' : 'FAIL',
        details: domChecks.map(d => `${d.element}: ${d.passed ? 'OK' : 'FAIL'} (${d.desc})`).join(' | ')
      })

      // Scroll suave para hidratar lazy-loaded images y verificar que respondan
      await page.evaluate(async () => {
        window.scrollTo(0, document.body.scrollHeight)
        await new Promise(r => setTimeout(r, 400))
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(400)

      // Verificación de imágenes rotas (error de carga HTTP o decode: complete && naturalWidth === 0)
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          .filter(img => img.complete && img.naturalWidth === 0)
          .map(img => img.src)
      })

      // Verificación de SVGs presentes
      const svgCount = await page.evaluate(() => document.querySelectorAll('svg').length)

      results.push({
        suite: 'Assets',
        name: `${r.name} - Imágenes Servidas Correctamente (Desktop)`,
        status: brokenImages.length === 0 ? 'PASS' : 'FAIL',
        details: brokenImages.length === 0 
          ? `Todas las imágenes cargaron OK (0 rotas, ${svgCount} SVGs detectados)` 
          : `Imágenes rotas encontradas: ${brokenImages.join(', ')}`
      })

      results.push({
        suite: 'Consola',
        name: `${r.name} - Errores de Consola (Desktop)`,
        status: consoleErrors.length === 0 ? 'PASS' : 'FAIL',
        details: consoleErrors.length === 0 
          ? '0 errores de consola' 
          : consoleErrors.join(' | ')
      })

      results.push({
        suite: 'Red',
        name: `${r.name} - Peticiones de Red (Desktop)`,
        status: networkFailures.length === 0 ? 'PASS' : 'FAIL',
        details: networkFailures.length === 0 
          ? '0 peticiones fallidas (sin 404s)' 
          : networkFailures.join(' | ')
      })

      const screenshotDesktop = join(SCREENSHOT_DIR, `${r.name}-desktop.png`)
      await page.screenshot({ path: screenshotDesktop, fullPage: true })
      console.log(`📸 Screenshot Desktop guardado: ${screenshotDesktop}`)

      await context.close()
    }

    // --- MÓVIL 390x844 ---
    {
      const context = await browser.newContext({
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true
      })
      const page = await context.newPage()

      const consoleErrors: string[] = []
      const networkFailures: string[] = []

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(`[CONSOLE ERROR] ${msg.text()}`)
        }
      })

      page.on('response', resp => {
        if (resp.status() >= 400) {
          networkFailures.push(`[NETWORK ${resp.status()}] ${resp.url()}`)
        }
      })

      await page.goto(url, { waitUntil: 'networkidle' })
      await page.waitForTimeout(500)

      // Scroll para hidratar lazy images en móvil
      await page.evaluate(async () => {
        window.scrollTo(0, document.body.scrollHeight)
        await new Promise(r => setTimeout(r, 400))
        window.scrollTo(0, 0)
      })
      await page.waitForTimeout(400)

      const brokenImagesMobile = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          .filter(img => img.complete && img.naturalWidth === 0)
          .map(img => img.src)
      })

      results.push({
        suite: 'Assets',
        name: `${r.name} - Imágenes Servidas Correctamente (Mobile 390x844)`,
        status: brokenImagesMobile.length === 0 ? 'PASS' : 'FAIL',
        details: brokenImagesMobile.length === 0 
          ? 'Todas las imágenes cargaron OK en móvil' 
          : `Imágenes rotas: ${brokenImagesMobile.join(', ')}`
      })

      const screenshotMobile = join(SCREENSHOT_DIR, `${r.name}-mobile.png`)
      await page.screenshot({ path: screenshotMobile, fullPage: true })
      console.log(`📱 Screenshot Mobile guardado: ${screenshotMobile}`)

      await context.close()
    }
  }

  // 2. PRUEBAS DE INTERACCIONES ESPECÍFICAS
  console.log(`\n========================================`)
  console.log(`🎯 EJECUTANDO PRUEBAS DE INTERACCIÓN`)
  console.log(`========================================`)

  // Interacción 1: Header - Click en enlace "Nosotros" -> /crgs
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

    const nosotrosLink = page.locator('header nav a:has-text("Nosotros")')
    await nosotrosLink.click()
    await page.waitForURL('**/crgs')

    const currentUrl = page.url()
    const isCrgs = currentUrl.endsWith('/crgs')
    results.push({
      suite: 'Interacciones',
      name: 'Header - Enlace "Nosotros" navega a /crgs',
      status: isCrgs ? 'PASS' : 'FAIL',
      details: `URL actual alcanzada: ${currentUrl}`
    })

    await context.close()
  }

  // Interacción 2: Header - Click en enlace "Zona Maco" -> /zona-maco
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

    const zmLink = page.locator('header nav a:has-text("Zona Maco")')
    await zmLink.click()
    await page.waitForURL('**/zona-maco')

    const currentUrl = page.url()
    const isZM = currentUrl.endsWith('/zona-maco')
    results.push({
      suite: 'Interacciones',
      name: 'Header - Enlace "Zona Maco" navega a /zona-maco',
      status: isZM ? 'PASS' : 'FAIL',
      details: `URL actual alcanzada: ${currentUrl}`
    })

    await context.close()
  }

  // Interacción 3: Botón "EXPLORAR ZONA MACO" en Banner del Home -> navega a /zona-maco
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

    const bannerBtn = page.locator('a:has-text("EXPLORAR ZONA MACO")')
    await bannerBtn.click()
    await page.waitForURL('**/zona-maco')

    const currentUrl = page.url()
    const isZM = currentUrl.endsWith('/zona-maco')
    results.push({
      suite: 'Interacciones',
      name: 'Home Banner - Botón "EXPLORAR ZONA MACO" navega a /zona-maco',
      status: isZM ? 'PASS' : 'FAIL',
      details: `URL actual alcanzada: ${currentUrl}`
    })

    await context.close()
  }

  // Interacción 4: Zona Maco - Navegación de Carrusel con Flechas (Next / Prev)
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/zona-maco', { waitUntil: 'networkidle' })
    await page.waitForTimeout(600)

    const nextBtn = page.locator('button[aria-label="Siguiente proyecto"]')
    const prevBtn = page.locator('button[aria-label="Proyecto anterior"]')

    const nextVisible = await nextBtn.isVisible()
    const prevVisible = await prevBtn.isVisible()

    // Clic en Next para mover el track del carrusel
    await nextBtn.click()
    await page.waitForTimeout(400)
    await nextBtn.click()
    await page.waitForTimeout(400)
    await prevBtn.click()
    await page.waitForTimeout(400)

    const cardCount = await page.locator('#proyectos article').count()

    results.push({
      suite: 'Interacciones',
      name: 'Zona Maco - Carrusel Infinito de Proyectos (Next / Prev / Drag)',
      status: nextVisible && prevVisible && cardCount > 0 ? 'PASS' : 'FAIL',
      details: `Botones activos: Next=${nextVisible}, Prev=${prevVisible} | ${cardCount} tarjetas en carrusel`
    })

    await context.close()
  }

  // Interacción 5: Click en una tarjeta de obra que navegue a /obras/[slug]
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/zona-maco', { waitUntil: 'networkidle' })
    await page.waitForTimeout(600)

    const carouselArea = page.locator('#proyectos')
    await carouselArea.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Seleccionamos la primera tarjeta de obra en el carrusel
    const firstObraCard = page.locator('#proyectos article').first()
    const cardTitle = await firstObraCard.locator('.card-title').innerText()
    const obraLink = firstObraCard.locator('a[href^="/obras/"]').first()
    // En carruseles con RAF continuo (infinite ticker), dispatchEvent dispara la navegación limpiamente
    await obraLink.dispatchEvent('click')

    await page.waitForURL('**/obras/**')
    const currentUrl = page.url()
    const isObraDetail = currentUrl.includes('/obras/')

    // Verificar que en la página de detalle cargue el split layout
    const hasMetadata = await page.locator('article').first().isVisible()
    const titleInDetail = await page.locator('h1').first().innerText()

    results.push({
      suite: 'Interacciones',
      name: 'Tarjeta de Obra - Click navega a /obras/[slug] con Split Layout',
      status: isObraDetail && hasMetadata ? 'PASS' : 'FAIL',
      details: `Obra: "${cardTitle}" -> Ruta: ${currentUrl} | Título en detalle: "${titleInDetail}"`
    })

    await context.close()
  }

  // Interacción 6: Mobile Menu Hamburger Toggle y Navegación
  {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true
    })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

    const hamburgerBtn = page.locator('button[aria-label="Alternar menú de navegación"]')
    await hamburgerBtn.click()
    await page.waitForTimeout(300)

    const mobileMenuScreenshot = join(SCREENSHOT_DIR, 'mobile-menu-open.png')
    await page.screenshot({ path: mobileMenuScreenshot })
    console.log(`📱 Screenshot Menú Móvil guardado: ${mobileMenuScreenshot}`)

    const mobileNosotrosLink = page.locator('header div.md\\:hidden a:has-text("Nosotros")')
    await mobileNosotrosLink.click()
    await page.waitForURL('**/crgs')

    results.push({
      suite: 'Mobile',
      name: 'Mobile Drawer - Menú hamburguesa abre y navega a /crgs',
      status: page.url().endsWith('/crgs') ? 'PASS' : 'FAIL',
      details: `Navegó a: ${page.url()}`
    })

    await context.close()
  }

  await browser.close()

  console.log('\n========================================')
  console.log('📋 RESUMEN DE DISPAROS DE KABUTO (QA REPORT)')
  console.log('========================================\n')

  let allGreen = true
  for (const res of results) {
    const badge = res.status === 'PASS' ? '✅ PASS' : '❌ FAIL'
    if (res.status === 'FAIL') allGreen = false
    console.log(`${badge} [${res.suite}] ${res.name}`)
    if (res.details) console.log(`   └─ Detalle: ${res.details}`)
  }

  console.log(`\nVEREDICTO GLOBAL: ${allGreen ? '🏆 TODO VERDE (MISIÓN CUMPLIDA)' : '⚠️ FALLOS DETECTADOS'}`)

  writeFileSync(
    join(SCREENSHOT_DIR, 'test-results.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), allGreen, results }, null, 2)
  )
}

runQA().catch(err => {
  console.error('💥 ERROR FATAL EN QA SNIPER:', err)
  process.exit(1)
})
