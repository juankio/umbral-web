import { chromium } from 'playwright'
import { join } from 'path'

const SCREENSHOT_DIR = '/home/juankio/Proyectos/umbral-web/qa-screenshots'

async function runPrecisionSniperQA() {
  console.log('🎯 [USOPP KABUTO SNIPER] Iniciando Calibración de Precisión V2 en http://localhost:3000...\n')

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  })

  const page = await context.newPage()

  const consoleErrors: string[] = []
  const failedRequests: string[] = []

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[CONSOLE] ${msg.text()}`)
    }
  })

  page.on('response', resp => {
    if (resp.status() >= 400) {
      failedRequests.push(`[${resp.status()}] ${resp.url()}`)
    }
  })

  // Navegar a Home
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)

  // =========================================================================
  // SECCIÓN 1: HERO (1440x900)
  // =========================================================================
  console.log('🏹 Apuntando a SECCIÓN 1: Hero Inicial (1440x900)...')

  const heroMetrics = await page.evaluate(() => {
    const hero = document.querySelector('section')
    if (!hero) return null
    const rect = hero.getBoundingClientRect()
    const archImg = hero.querySelector('img[src*="hero-arch.svg"]')
    const archRect = archImg?.getBoundingClientRect()
    const leftText = hero.querySelector('h2')
    const rightText = Array.from(hero.querySelectorAll('h2')).pop()
    const umbralTitle = hero.querySelector('h1')

    return {
      heroHeight: rect.height,
      heroWidth: rect.width,
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
      archVisible: !!archImg && archRect && archRect.width > 0 && archRect.height > 0,
      archWidth: archRect?.width,
      archHeight: archRect?.height,
      leftText: leftText?.innerText?.trim(),
      rightText: rightText?.innerText?.trim(),
      title: umbralTitle?.innerText?.trim(),
      scrollOverflowsViewport: rect.height > window.innerHeight
    }
  })

  console.log('   Métricas Hero:', heroMetrics)

  // Captura 1: Hero inicial viewport
  const heroScreenshotPath = join(SCREENSHOT_DIR, 'v2-hero.png')
  await page.screenshot({ path: heroScreenshotPath })
  console.log(`   📸 Screenshot Hero Inicial guardado en: ${heroScreenshotPath}`)

  // Scroll 300px para verificar reacción al scroll
  console.log('🏹 Realizando scroll de 300px para verificar reacción dinámica del triángulo negro...')
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' }))
  await page.waitForTimeout(500)

  const heroScrolledMetrics = await page.evaluate(() => {
    const archContainer = document.querySelector('section div[style*="transform"]')
    return {
      scrollY: window.scrollY,
      archTransform: (archContainer as HTMLElement)?.style.transform || 'none'
    }
  })
  console.log('   Métricas Hero con Scroll:', heroScrolledMetrics)

  // Captura 2: Hero scrolled
  const heroScrolledScreenshotPath = join(SCREENSHOT_DIR, 'v2-hero-scrolled.png')
  await page.screenshot({ path: heroScrolledScreenshotPath })
  console.log(`   📸 Screenshot Hero Scrolled guardado en: ${heroScrolledScreenshotPath}`)

  // =========================================================================
  // SECCIÓN 2: INTRO
  // =========================================================================
  console.log('\n🏹 Apuntando a SECCIÓN 2: Intro...')
  
  // Localizar la sección Intro
  await page.evaluate(() => {
    const introSection = document.querySelector('img[src*="intro-polygon-yellow"]')?.closest('section')
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'instant', block: 'center' })
    }
  })
  await page.waitForTimeout(800)

  const introMetrics = await page.evaluate(() => {
    const yellowImg = document.querySelector('img[src*="intro-polygon-yellow.svg"]') as HTMLImageElement | null
    const topImg = document.querySelector('img[src*="crgs-geometry.png"]') as HTMLImageElement | null
    const bottomImg = document.querySelector('img[src*="crgs-details.png"]') as HTMLImageElement | null
    const logoImg = document.querySelector('img[src*="logo-umbral.png"]') as HTMLImageElement | null

    const yellowRect = yellowImg?.getBoundingClientRect()
    const topRect = topImg?.getBoundingClientRect()
    const bottomRect = bottomImg?.getBoundingClientRect()

    const texts = Array.from(document.querySelectorAll('section:has(img[src*="intro-polygon-yellow"]) p'))
      .map(p => (p as HTMLElement).innerText.trim())

    return {
      yellowVisible: !!yellowImg && yellowImg.complete && yellowImg.naturalWidth > 0,
      yellowDimensions: yellowRect ? { width: yellowRect.width, height: yellowRect.height, top: yellowRect.top } : null,
      topPhotoVisible: !!topImg && topImg.complete && topImg.naturalWidth > 0,
      bottomPhotoVisible: !!bottomImg && bottomImg.complete && bottomImg.naturalWidth > 0,
      logoVisible: !!logoImg && logoImg.complete && logoImg.naturalWidth > 0,
      isYellowBetweenPhotos: !!(yellowRect && topRect && bottomRect && yellowRect.top > topRect.top && yellowRect.top < bottomRect.bottom),
      paragraphCount: texts.length,
      paragraphsPreview: texts.slice(0, 2)
    }
  })
  console.log('   Métricas Intro:', introMetrics)

  // Captura 3: Intro
  const introScreenshotPath = join(SCREENSHOT_DIR, 'v2-intro.png')
  // Centrar bien la sección Intro en la captura
  const introSectionLocator = page.locator('section:has(img[src*="intro-polygon-yellow.svg"])')
  await introSectionLocator.scrollIntoViewIfNeeded()
  await page.waitForTimeout(400)
  await page.screenshot({ path: introScreenshotPath })
  console.log(`   📸 Screenshot Intro guardado en: ${introScreenshotPath}`)

  // =========================================================================
  // SECCIÓN 3: CENTRO ROBERTO GARZA SADA (CRGS)
  // =========================================================================
  console.log('\n🏹 Apuntando a SECCIÓN 3: Centro Roberto Garza Sada (CRGS)...')

  // Scroll a la sección CRGS
  const crgsSectionLocator = page.locator('section:has(img[src*="crgs-bg-vector.svg"])')
  await crgsSectionLocator.scrollIntoViewIfNeeded()
  await page.waitForTimeout(800)

  const crgsMetrics = await page.evaluate(() => {
    const crgsSection = document.querySelector('img[src*="crgs-bg-vector.svg"]')?.closest('section')
    if (!crgsSection) return null

    const blueImg = crgsSection.querySelector('img[src*="crgs-bg-vector.svg"]') as HTMLImageElement | null
    const squareImg = crgsSection.querySelector('img[src*="crgs-details.png"]') as HTMLImageElement | null
    const title = crgsSection.querySelector('h2')

    const blueRect = blueImg?.getBoundingClientRect()
    const squareRect = squareImg?.getBoundingClientRect()
    const titleRect = title?.getBoundingClientRect()

    return {
      blueVectorVisible: !!blueImg && blueImg.complete && (blueImg.naturalWidth > 0 || blueRect?.width! > 0),
      blueDimensions: blueRect ? { width: blueRect.width, height: blueRect.height, left: blueRect.left, top: blueRect.top } : null,
      squareImgVisible: !!squareImg && squareImg.complete && squareImg.naturalWidth > 0,
      squareDimensions: squareRect ? { width: squareRect.width, height: squareRect.height } : null,
      titleText: title?.innerText?.trim(),
      isSquareAspectRatio1to1: squareRect ? Math.abs(squareRect.width - squareRect.height) < 5 : false,
      isBlueBehindText: !!(blueRect && titleRect && blueRect.left <= titleRect.left)
    }
  })
  console.log('   Métricas CRGS:', crgsMetrics)

  // Captura 4: CRGS
  const crgsScreenshotPath = join(SCREENSHOT_DIR, 'v2-crgs.png')
  await page.screenshot({ path: crgsScreenshotPath })
  console.log(`   📸 Screenshot CRGS guardado en: ${crgsScreenshotPath}`)

  // =========================================================================
  // VALIDACIÓN GENERAL DE RED Y ASSETS
  // =========================================================================
  const allImagesOk = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'))
    const broken = imgs.filter(img => !img.complete || (img.naturalWidth === 0 && !img.src.endsWith('.svg')))
    return {
      total: imgs.length,
      brokenCount: broken.length,
      brokenUrls: broken.map(img => img.src)
    }
  })

  await context.close()
  await browser.close()

  console.log('\n========================================')
  console.log('🎯 REPORTE FINAL DE CALIBRACIÓN V2')
  console.log('========================================')
  console.log('Console Errors:', consoleErrors.length === 0 ? '0 (GREEN)' : consoleErrors)
  console.log('Network 4xx/5xx:', failedRequests.length === 0 ? '0 (GREEN)' : failedRequests)
  console.log('Broken Images:', allImagesOk.brokenCount === 0 ? `0 de ${allImagesOk.total} (GREEN)` : allImagesOk.brokenUrls)
  console.log('Hero Status:', heroMetrics?.archVisible ? 'GREEN' : 'RED')
  console.log('Intro Status:', introMetrics?.yellowVisible && introMetrics?.isYellowBetweenPhotos ? 'GREEN' : 'RED')
  console.log('CRGS Status:', crgsMetrics?.blueVectorVisible && crgsMetrics?.isBlueBehindText ? 'GREEN' : 'RED')
}

runPrecisionSniperQA().catch(err => {
  console.error('💥 ERROR FATAL:', err)
  process.exit(1)
})
