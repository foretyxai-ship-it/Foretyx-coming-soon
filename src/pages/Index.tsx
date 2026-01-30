import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";
import ValueSection from "@/components/ValueSection";
import HowItWorks from "@/components/HowItWorks";
import EmailCapture from "@/components/EmailCapture";
import WorkspacesSection from "@/components/WorkspacesSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section - ID: PLATFORM */}
        <section id="platform" className="relative overflow-hidden">
          <HeroAnimation />
          <div className="container mx-auto px-6 py-28 lg:py-40 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              {/* Coming Soon Badge (Blue) */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Coming Soon
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                AI for your enterprise.
                <br />
                {/* UPDATED: Changed color to Sky Blue (#AADDEC) */}
                <span className="text-[#AADDEC]">Protected by default.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
              >
                Give your teams access to AI while keeping sensitive data secure and compliance teams confident.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                {/* UPDATED: 
                    - Default: White Background
                    - Hover: Sky Blue (#AADDEC) Background
                */}
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-[#AADDEC] transition-all duration-300 h-14 px-8 text-base font-bold border-none"
                  onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request early access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Props - ID: SECURITY */}
        <div id="security">
          <ValueSection />
        </div>

        {/* How It Works - ID: ARCHITECTURE */}
        <div id="architecture">
          <HowItWorks />
        </div>

        {/* Workspaces - ID: WORKSPACES */}
        <div id="workspaces">
          <WorkspacesSection />
        </div>

        {/* Simple trust statement */}
        <section className="border-t border-border/50">
          <div className="container mx-auto px-6 py-20 lg:py-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-display-xs lg:text-display-sm font-semibold text-foreground mb-6">
                Your data never leaves your infrastructure
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Foretyx runs within your environment. Sensitive prompts and responses are processed locally only metadata reaches our control plane.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Email Capture - ID: EARLY-ACCESS */}
        <div id="early-access">
          <EmailCapture />
        </div>
      </main>

      {/* Footer - ID: FOOTER */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;