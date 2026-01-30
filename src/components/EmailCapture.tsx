import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner"; // Assuming shadcn sonner is installed

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);

    try {
      // Sending data to your Vercel Serverless Function
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitted(true);
      setEmail("");
      toast.success("Welcome to the waitlist!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="early-access" className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-display-xs lg:text-display-sm font-semibold text-foreground mb-4">
            Ready to secure your AI?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join enterprises already on the waitlist for early access.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-secondary border border-accent/20 rounded-xl p-8"
            >
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-foreground font-medium text-lg">You're on the list.</p>
              <p className="text-muted-foreground text-sm mt-2">
                Check your inbox! We've sent a confirmation to {email}.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="h-14 text-base bg-secondary border-border placeholder:text-muted-foreground focus:ring-2 focus:ring-accent/50 focus:border-accent"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 font-medium text-base"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <>
                    Get early access
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground pt-2">
                By joining, you agree to our privacy policy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCapture;