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
    role: "Software Engineer",
    type: "Full-Time",
    period: "Mar 2024 – Present",
    achievements: [
      "Owned feature development across multi-product Agwise Platform, serving 5K+ users and improving reliability.",
      "Built an OpenAI Vision agent to parse PDF lab reports, reducing manual entry and boosting adoption.",
      "Built automated data workflows processing 100K+ records/week, tripling throughput.",
      "Developed an AI-driven stratification engine combining satellite segmentation and SSURGO data to generate sampling zones, powering AgWise's soil recommendations and improving sampling accuracy by 35%.",
      "Built FoliarWise mobile app, increasing user adoption by 30%.",
      "Created AI assistant reducing agronomist support time by 40%.",
      "Modernized legacy silo apps by migrating them to Next.js and Express and centralizing Supabase auth and Stripe billing, improving upgrade/payment flow success by 30% and reducing duplicated code by 50%.",
      "Introduced automation and release standards, improving reliability by 70%.",
    ],
  },
  {
    company: "University of Central Florida",
    location: "Orlando, FL, USA",
    role: "Web Developer",
    type: "Part-Time",
    period: "Aug 2023 – Mar 2024",
    achievements: [
      "Built a portal for accessing 1M+ forensic datasets used by 300+ institutions.",
      "Implemented scalable APIs and optimized data retrieval pipelines, improving query performance by 50%.",
      "Developed advanced filtering, pagination, and metadata views, significantly improving researcher usability.",
    ],
  },
  {
    company: "Titan Company Ltd",
    location: "India",
    role: "Software Engineer",
    type: "Full-Time",
    period: "Jan 2020 – Aug 2022",
    achievements: [
      "Contributed to Titan's smartwatch ecosystem connecting 1M+ active devices, improving telemetry uptime to 99.98% and reducing data latency by 40%.",
      "Built analytics and alert pipeline enabling personalized user notifications (battery, sleep, inactivity), driving 28% higher re-engagement.",
      "Streamlined device-to-cloud sync and caching layers, cutting support tickets by 60%.",
      "Developed modular React dashboards accelerating launches by 30%.",
      "Optimized backend and frontend performance for 40% faster LCP and dropped TTI below 2s.",
      "Integrated CloudWatch monitoring and automated QA pipelines, reducing post-release bugs by 90%.",
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

