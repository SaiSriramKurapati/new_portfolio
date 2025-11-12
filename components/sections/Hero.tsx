"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <Avatar className="h-24 w-24 mx-auto lg:mx-0 mb-4 border-4 border-primary">
                <AvatarImage 
                  src="/pro_pic.jpeg" 
                  alt="Sai Sriram Kurapati"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                  SK
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              Sai Sriram Kurapati
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
            >
              Software Engineer
            </motion.p>
          </motion.div>

          {/* Right Side - Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative px-4 md:px-6 lg:px-8">
              {/* Decorative quotation mark */}
              <div className="absolute -top-4 -left-2 text-6xl md:text-7xl lg:text-8xl font-serif text-primary/20 select-none">
                "
              </div>
              
              <p className="text-base md:text-lg lg:text-xl font-light italic text-foreground/80 md:text-foreground/90 leading-relaxed md:leading-loose select-none tracking-wide relative z-10">
                My Deepest fear is not that I am inadequate or powerless. My deepest fear is that I am powerful beyond measure and that God asks me why I chose not to use it.
              </p>
              
              {/* Closing quotation mark */}
              <div className="absolute -bottom-4 -right-2 text-6xl md:text-7xl lg:text-8xl font-serif text-primary/20 select-none">
                "
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

