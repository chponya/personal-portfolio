import gosUslugi from '../assets/images/hackathons/gosuslugi.png'
import imagesAI from '../assets/images/hackathons/images_ai.png'
import noodles from '../assets/images/hackathons/noodles.png'
import ruins from '../assets/images/hackathons/ruins.png'
import speedDating from '../assets/images/hackathons/speed-dating.png'
import visorAI from '../assets/images/hackathons/visorAI.png'

export interface Hackathon {
  title: string
  year: string
  project: string
  image: string

  role?: string
  description?: string
  technologies?: string[]
  presentation?: string
}

export const hackathons: Hackathon[] = [
  {
    title: 'Hackathon 2024',
    year: '2024',
    project: 'Eco Solutions',
    image: gosUslugi,
  },
  {
    title: 'Hackathon 2024',
    year: '2024',
    project: 'Campus App',
    image: imagesAI,
  },
  {
    title: 'Code & Magic',
    year: '2025',
    project: 'Study Buddy',
    image: noodles,
  },
  {
    title: 'Cook the Future',
    year: '2025',
    project: 'Smart Tracker',
    image: ruins,
  },
    {
    title: 'Code & Magic',
    year: '2025',
    project: 'Study Buddy',
    image: speedDating,
  },
  {
    title: 'Cook the Future',
    year: '2025',
    project: 'Smart Tracker',
    image: visorAI,
  }
]