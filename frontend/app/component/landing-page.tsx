'use client'

import { Button } from "@/app/component/ui/button"
import { ArrowRight, BarChart2, TrendingUp, Zap } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, FC } from "react"

interface TypeWriterProps {
  text: string
  delay?: number
}

const TypeWriter: FC<TypeWriterProps> = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{currentText}</span>
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-purple-700">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <TypeWriter text="Unleash the Power of" />
                  <span className="text-yellow-300"> <TypeWriter text="AI-Driven" delay={150} /> </span>
                  <TypeWriter text=" Stock Analysis" delay={50} />
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                  Make informed decisions with our cutting-edge stock market analyzer. Predict trends, analyze patterns, and
                  maximize your investments.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-yellow-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <TrendingUp className="h-12 w-12 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Advanced Trend Analysis</h3>
                <p className="text-purple-200">Identify market trends with our AI-powered algorithms</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <Zap className="h-12 w-12 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Real-Time Insights</h3>
                <p className="text-purple-200">Get instant updates and alerts on market changes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <BarChart2 className="h-12 w-12 mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2 text-white">Comprehensive Reports</h3>
                <p className="text-purple-200">Generate detailed reports and visualizations for your portfolio</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-yellow-300"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-900">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-3xl font-bold text-purple-700">98%</h3>
                <p className="text-xl font-semibold text-purple-900">Accuracy Rate</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-3xl font-bold text-purple-700">10K+</h3>
                <p className="text-xl font-semibold text-purple-900">Active Users</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-3xl font-bold text-purple-700">$1M+</h3>
                <p className="text-xl font-semibold text-purple-900">Profit Generated</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-3xl font-bold text-purple-700">24/7</h3>
                <p className="text-xl font-semibold text-purple-900">Support</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-700 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Trading?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                  Join thousands of successful traders who have already revolutionized their strategy with StockPro Analyzer.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-600 bg-purple-800 text-purple-100">
        <p className="text-xs">© 2024 StockPro Analyzer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}