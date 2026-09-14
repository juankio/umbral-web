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

      // Verificación de imágenes rotas (naturalWidth === 0 o img.complete === false)
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          .filter(img => !img.complete || img.naturalWidth === 0)
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

      const brokenImagesMobile = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'))
        return imgs
          .filter(img => !img.complete || img.naturalWidth === 0)
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

  // Interacción 3: Botón "VER UBICACIÓN" en Banner del Home -> navega a /zona-maco
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

    const bannerBtn = page.locator('a:has-text("VER UBICACIÓN")')
    await bannerBtn.click()
    await page.waitForURL('**/zona-maco')

    const currentUrl = page.url()
    const isZM = currentUrl.endsWith('/zona-maco')
    results.push({
      suite: 'Interacciones',
      name: 'Home Banner - Botón "VER UBICACIÓN" navega a /zona-maco',
      status: isZM ? 'PASS' : 'FAIL',
      details: `URL actual alcanzada: ${currentUrl}`
    })

    await context.close()
  }

  // Interacción 4: Zona Maco - Filtro de categorías de proyectos
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/zona-maco', { waitUntil: 'networkidle' })

    const categoriesToTest = ['Diseño', 'Arte Contemporáneo', 'Arte Moderno', 'Diseño Emergente', 'Todas']
    let allFiltersPassed = true
    const filterDetails: string[] = []

    for (const cat of categoriesToTest) {
      const btn = page.getByRole('button', { name: cat, exact: true })
      await btn.click()
      await page.waitForTimeout(400)

      const cardCount = await page.locator('#proyectos .obra-card').count()
      filterDetails.push(`${cat}: ${cardCount} obras`)
      if (cardCount === 0) {
        allFiltersPassed = false
      }
    }

    // Tomar screenshot de filtro específico
    const filterBtn = page.getByRole('button', { name: 'Arte Moderno', exact: true })
    await filterBtn.click()
    await page.waitForTimeout(400)
    const filtroScreenshot = join(SCREENSHOT_DIR, 'zona-maco-filtro-arte-moderno.png')
    await page.screenshot({ path: filtroScreenshot })
    console.log(`📸 Screenshot Filtro Arte Moderno guardado: ${filtroScreenshot}`)

    results.push({
      suite: 'Interacciones',
      name: 'Zona Maco - Filtro de Categorías Reactivo',
      status: allFiltersPassed ? 'PASS' : 'FAIL',
      details: filterDetails.join(' | ')
    })

    await context.close()
  }

  // Interacción 5: Click en una tarjeta de obra que navegue a /obras/[slug]
  {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } })
    const page = await context.newPage()
    await page.goto('http://localhost:3000/zona-maco', { waitUntil: 'networkidle' })

    // Seleccionamos la primera tarjeta de obra
    const firstObraCard = page.locator('#proyectos .obra-card').first()
    const cardTitle = await firstObraCard.locator('h3').innerText()
    const fichaLink = firstObraCard.locator('a:has-text("Ficha Técnica")')
    await fichaLink.click()

    await page.waitForURL('**/obras/**')
    const currentUrl = page.url()
    const isObraDetail = currentUrl.includes('/obras/')

    // Verificar que en la página de detalle cargue el split layout
    const hasMetadata = await page.locator('article').isVisible()
    const titleInDetail = await page.locator('h1').innerText()

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

    const hamburgerBtn = page.locator('button[aria-label="Abrir menú"]')
    await hamburgerBtn.click()
    await page.waitForTimeout(300)

    const mobileMenuScreenshot = join(SCREENSHOT_DIR, 'mobile-menu-open.png')
    await page.screenshot({ path: mobileMenuScreenshot })
    console.log(`📱 Screenshot Menú Móvil guardado: ${mobileMenuScreenshot}`)

    const mobileNosotrosLink = page.locator('div.sm\\:hidden a:has-text("Nosotros")')
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
