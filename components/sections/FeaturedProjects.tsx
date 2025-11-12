"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react"

const featuredProjects = [
  {
    title: "Remembly",
    subtitle: "Collaborative Memory For Teams",
    description:
      "A collaborative memory platform that helps teams capture what they notice and act on it together.",
    tech: ["Next.js 15", "FastAPI", "Supabase"],
    visit: "https://remembly.space",
    gradientClass: "from-blue-500/20 via-purple-500/10 to-blue-500/20",
    hoverGradientClass: "group-hover:from-blue-500/30 group-hover:via-purple-500/20 group-hover:to-blue-500/30",
    titleClass: "text-2xl md:text-3xl mb-1 text-blue-500 transition-colors",
    iconHoverClass: "group-hover:text-blue-500",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Vaaata",
    subtitle: "AI Powered Bill Splitting",
    description:
      "Scans and splits receipts using OpenAI with 95%+ accuracy. Used by 700+ users daily.",
    tech: ["React", "Express.js", "OpenAI"],
    visit: "https://vaaata.com",
    gradientClass: "from-green-500/20 via-emerald-500/10 to-green-500/20",
    hoverGradientClass: "group-hover:from-green-500/30 group-hover:via-emerald-500/20 group-hover:to-green-500/30",
    titleClass: "text-2xl md:text-3xl mb-1 text-green-500 transition-colors",
    iconHoverClass: "group-hover:text-green-500",
    borderColor: "hover:border-green-500/50",
  },
]

export default function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="pt-6 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              My Work
            </span>
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here's What I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects solving real problems. Scroll down to learn more about me.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card
                  className={`h-full overflow-hidden border-2 ${project.borderColor} transition-all duration-300 bg-gradient-to-br ${project.gradientClass} ${project.hoverGradientClass} relative`}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500"
                  />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className={project.titleClass}>
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.subtitle}
                        </p>
                      </div>
                      <motion.a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background transition-colors"
                      >
                        <ExternalLink className={`h-5 w-5 text-muted-foreground ${project.iconHoverClass} transition-colors`} />
                      </motion.a>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="w-full group/btn"
                    >
                      <a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Project
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>

                  {/* Decorative corner element */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

