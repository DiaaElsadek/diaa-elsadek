import { Hero } from '@/app/_components/sections/Hero'
import { SelectedWork } from '@/app/_components/sections/SelectedWork'
import { About } from '@/app/_components/sections/About'
import { HowIWork } from '@/app/_components/sections/HowIWork'
import { TechnicalExpertise } from '@/app/_components/sections/TechnicalExpertise'
import { Experience } from '@/app/_components/sections/Experience'
import { Contact } from '@/app/_components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SelectedWork />
      <About />
      <HowIWork />
      <TechnicalExpertise />
      <Experience />
      <Contact />
    </main>
  )
}
