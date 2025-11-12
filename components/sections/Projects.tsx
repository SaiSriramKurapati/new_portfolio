"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Remembly - Collaborative Memory For Teams",
    description:
      "A Collaborative memory platform that helps teams capture what they notice and act on it together. Developed with Next.js 15(App Router), FastAPI, Supabase and Postgres featuring Memory Boards for instant observation capture and real-time Shopping Lists that bridge the gap between noticing and acting.",
    tech: [
      "Next.js 15",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
    ],
    visit: "https://remembly.com",
  },
  {
    title: "Vaaata - AI Powered Bill Splitting Tool",
    description:
      "Built a React + Express.js app that scans and splits receipts using OpenAI, with a custom prompt handling multi-merchant formats to reach 95%+ accuracy. Created to solve my own pain point, now used by 700+ users daily.",
    tech: [
      "React",
      "Express.js",
      "OpenAI",
      "Node.js",
      "TypeScript",
    ],
    visit: "https://vaaata.com",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          All Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.visit && (
                      <motion.a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                      </motion.a>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.visit && (
                    <Button variant="default" size="sm" asChild className="w-full">
                      <a href={project.visit} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

