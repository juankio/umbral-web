import { onMounted, onUnmounted, type Ref } from 'vue'

export function useParallaxMotion(
  targetRef: Ref<HTMLElement | null>,
  speed = 0.06,
  maxOffset = 30
) {
  let rafId: number | null = null
  let initialTop = 0

  const onScroll = () => {
    if (!import.meta.client) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!targetRef.value) return

    const scrollY = window.scrollY
    const offset = Math.max(-maxOffset, Math.min(maxOffset, (scrollY - initialTop) * speed))
    targetRef.value.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
  }

  const loop = () => {
    onScroll()
    rafId = requestAnimationFrame(loop)
  }

  onMounted(() => {
    if (!import.meta.client) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (targetRef.value) {
      const rect = targetRef.value.getBoundingClientRect()
      initialTop = rect.top + window.scrollY
      rafId = requestAnimationFrame(loop)
    }
  })

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
  })
}
