import Hero from "@/components/sections/Hero"
import FeaturedProjects from "@/components/sections/FeaturedProjects"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Skills from "@/components/sections/Skills"
import Education from "@/components/sections/Education"
import Certifications from "@/components/sections/Certifications"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Footer />
    </main>
  )
}

