import batterySimImage from '@/assets/images/projects/battery-sim.jpg'
import cozyCoffeeImage from '@/assets/images/projects/cozy-coffee.png'
import focusNicaImage from '@/assets/images/projects/focus-nica.png'
import innerchildSiteImage from '@/assets/images/projects/innerchild-site.png'
import linkitImage from '@/assets/images/projects/linkit.png'
import neocityImage from '@/assets/images/projects/neocity.png'

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Battery Simulator',
    description: 'Веб-приложение для симуляции заряда-разряда аккумулятора.',
    image: batterySimImage,
    technologies: ['Vue', 'TypeScript', 'Tailwind'],
    github: '',
    demo: '',
  },

  {
    title: 'Cozy Coffee',
    description: 'Сайт для уюютной кофейни.',
    image: cozyCoffeeImage,
    technologies: ['Vue', 'API', 'Pinia'],
    github: '',
    demo: '',
  },
  {
    title: 'Linkit',
    description: 'Расширение для сохранения закладок.',
    image: linkitImage,
    technologies: ['Vue', 'TypeScript', 'Tailwind'],
    github: '',
    demo: '',
  },

  {
    title: 'FocusNica',
    description: 'Расширение для фокусировки и отслеживания продуктивности.',
    image: focusNicaImage,
    technologies: ['Vue', 'API', 'Pinia'],
    github: '',
    demo: '',
  },
  {
    title: 'Cutesea site',
    description: 'Нишевый сайт Neocity.',
    image: neocityImage,
    technologies: ['HTML', 'CSS'],
    github: '',
    demo: '',
  },

  {
    title: 'Innerchild сайт',
    description: 'Сайт для виртуальной айдол-группы.',
    image: innerchildSiteImage,
    technologies: ['HTML', 'CSS'],
    github: '',
    demo: '',
  },


]
