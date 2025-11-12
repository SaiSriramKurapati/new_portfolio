"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2 } from "lucide-react"

const experiences = [
  {
    company: "AgWise",
    location: "Tampa, USA",
    role: "Founding Engineer",
    type: "Full-Time",
    period: "March 2024 - Present",
    achievements: [
      "Took ownership of feature development across AgIQ, FoliarWise, CattleWise, and HaneyAI, serving 5K+ users and improving system reliability and release velocity.",
      "Built automated data workflows processing 100K+ records per week, eliminating manual entry and tripling operational throughput.",
      "Developed a stratification engine to segment and visualize agricultural zones based on soil, crop, and environmental data, enabling precision insights and improving sampling accuracy by 35%.",
      "Developed a modern mobile app for FoliarWise, expanding accessibility and increasing user adoption by 30%.",
      "Created a conversational AI assistant that reduced agronomist support time by 40% and improved engagement across applications.",
      "Unified authentication, billing, and data models into a shared organization platform, cutting integration effort by 60% and streamlining cross-product access.",
      "Strengthened engineering quality by introducing test automation and release standards, improving reliability by 70% and accelerating deployment cycles.",
    ],
  },
  {
    company: "University of Central Florida",
    location: "Orlando, FL, USA",
    role: "Web Developer",
    type: "Part-Time",
    period: "Aug 2023 - March 2024",
    achievements: [
      "Built a data portal for forensic tools and datasets, used by 300+ institutions, optimized for reliability, searchability, and mobile responsiveness.",
      "Engineered data browsing interface with fuzzy search, server-side pagination, and faceted filters across 1M+ records. Optimized query performance by 50% using debouncing and SWR caching.",
      "Improved Lighthouse and accessibility scores to 98+ for key pages by overhauling SEO and WCAG compliance.",
    ],
  },
  {
    company: "Titan Company Ltd",
    location: "India",
    role: "Software Engineer",
    type: "Full-Time",
    period: "Jan 2021 - August 2022",
    achievements: [
      "Designed and scaled APIs to ingest real-time health telemetry from 1M+ devices; improved data-pipeline uptime to 99.98% and reduced data latency by 40%.",
      "Built an anonymized analytics pipeline and rules-based alert engine driving personalized notifications (low battery, inactivity, sleep disruptions), boosting user re-engagement 28%.",
      "Streamlined device-to-cloud sync architecture and caching layers, cutting sync-related support tickets 60%.",
      "Developed modular and themeable React components and dashboards for activity history, sleep trends, and device pairing accelerating new watch launches by 30%.",
      "Optimized both backend and frontend performance via query tuning, lazy loading, and asset compression achieving 40% faster LCP and dropper TTI to under 2s.",
      "Integrated CloudWatch metrics, logging, and automated QA, reducing incident response time 60% and post-release bugs 90%.",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                      <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

