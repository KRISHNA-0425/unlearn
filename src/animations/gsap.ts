import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins once centrally
gsap.registerPlugin(ScrollTrigger)

// Smooth config defaults
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
})

// Custom word & char splitter for editorial headlines
export const splitWords = (element: HTMLElement | null): HTMLElement[] => {
  if (!element) return []
  const text = element.innerText
  element.innerHTML = ''
  
  const words = text.split(' ')
  const spans: HTMLElement[] = []
  
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span')
    wordSpan.style.display = 'inline-block'
    wordSpan.style.overflow = 'hidden'
    wordSpan.style.verticalAlign = 'top'

    const innerSpan = document.createElement('span')
    innerSpan.innerText = word
    innerSpan.style.display = 'inline-block'
    innerSpan.className = 'split-word'

    wordSpan.appendChild(innerSpan)
    element.appendChild(wordSpan)
    
    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '))
    }
    
    spans.push(innerSpan)
  })
  
  return spans
}

export { gsap, ScrollTrigger }
export default gsap

