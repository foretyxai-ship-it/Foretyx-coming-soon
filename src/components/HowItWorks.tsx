import { motion } from "framer-motion";

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

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Designed for enterprise environments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Foretyx integrates into your existing infrastructure without introducing new data risk.
            </p>
          </motion.div>

          {/* Redesigned 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Column 1: Deployment Model */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6">Deployment Model</h3>
              <p className="text-accent text-sm font-medium mb-4 uppercase tracking-wider">
                Runs inside your environment
              </p>
              <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Deployed in your VPC or on-prem
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  No prompt data sent to Foretyx cloud
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  No model training on your data
                </li>
              </ul>
            </motion.div>

            {/* Column 2: Policy & Governance */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6">Policy & Governance</h3>
              <p className="text-accent text-sm font-medium mb-4 uppercase tracking-wider">
                Policies enforced by default
              </p>
              <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Centralized AI usage policies
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Automatic enforcement across teams
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Clear allow / scrub / block actions
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Audit & Compliance */}
            <motion.div variants={fadeInUp} className="flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-6">Audit & Compliance</h3>
              <p className="text-accent text-sm font-medium mb-4 uppercase tracking-wider">
                Audit-ready by design
              </p>
              <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Metadata-only logs
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Clear policy trails
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Designed for regulated industries
                </li>
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;