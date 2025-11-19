"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
              Now, About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Software Engineer passionate about building scalable systems and
              delivering exceptional user experiences. With over 5 years of experience,
              I've worked across the full stack, from architecting backend systems to
              crafting intuitive frontend interfaces.
            </p>
            <p>
              My approach combines technical excellence with product thinking. I thrive
              in fast-paced environments where I can own features end-to-end, from
              conception to deployment. I'm particularly interested in solving complex
              problems that require both deep technical knowledge and creative solutions.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects,
              exploring new technologies, and sharing knowledge with the developer
              community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

