import { motion } from "framer-motion";
import { ShieldAlert, Lock, BarChart3 } from "lucide-react";

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

const ValueSection = () => {
  return (
    <section className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Protected Column */}
          <ValueCard
            icon={<ShieldAlert className="w-6 h-6" />}
            title="Protected"
            description="Sensitive data is scrubbed before any AI interaction."
          />

          {/* Governed Column */}
          <ValueCard
            icon={<Lock className="w-6 h-6" />}
            title="Governed"
            description="Policies enforced automatically across every team."
          />

          {/* Visible Column */}
          <ValueCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Visible"
            description="Metadata-only audit trails for compliance."
          />
        </motion.div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div variants={fadeInUp} className="text-center group">
    {/* UPDATED COLORS:
        - bg-[#022658]: Deep Navy Blue background
        - text-[#AADDEC]: Sky Blue Icon color
        - border-[#AADDEC]/20: Subtle Sky Blue border
    */}
    <div className="w-14 h-14 rounded-2xl bg-[#022658] border border-[#AADDEC]/20 flex items-center justify-center text-[#AADDEC] mx-auto mb-6 transition-all duration-300 group-hover:border-[#AADDEC]/50 group-hover:shadow-[0_0_15px_rgba(170,221,236,0.2)]">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">
      {description}
    </p>
  </motion.div>
);

export default ValueSection;