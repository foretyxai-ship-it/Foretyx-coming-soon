import { Server, Cloud, Lock, Shield, RefreshCw, ArrowRight, Settings, BarChart3, FileText, Check } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section className="border-t border-border/50">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-display-xs lg:text-display-sm font-semibold text-foreground mb-4">
            Your Data Never Leaves Your Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our control plane / data plane architecture ensures sensitive data is processed
            entirely within your environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto relative">
          {/* Arrow connector for desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-background border border-accent/30 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-accent" />
            </div>
          </div>

          {/* Your Infrastructure - Data Plane */}
          <div className="relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-background text-accent text-xs font-semibold tracking-wider">
              YOUR INFRASTRUCTURE
            </div>
            <div className="border border-accent/40 rounded-lg p-6 pt-8 bg-card/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Data Plane</h3>
                  <p className="text-xs text-muted-foreground">Customer VPC / On-Premise</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <DataPlaneItem icon={<Lock className="w-4 h-4" />} text="Prompt Interception" />
                <DataPlaneItem icon={<Shield className="w-4 h-4" />} text="PII Redaction & Policy Enforcement" />
                <DataPlaneItem icon={<RefreshCw className="w-4 h-4" />} text="Response Rehydration" />
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-md px-4 py-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-accent font-medium">
                  Raw prompts and PII never leave this boundary
                </span>
              </div>
            </div>
          </div>

          {/* Foretyx Cloud - Control Plane */}
          <div className="relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-background text-muted-foreground text-xs font-semibold tracking-wider">
              FORETYX CLOUD
            </div>
            <div className="border border-border rounded-lg p-6 pt-8 bg-secondary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Control Plane</h3>
                  <p className="text-xs text-muted-foreground">Managed by Foretyx</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <ControlPlaneItem text="Policy Definitions" />
                <ControlPlaneItem text="Admin UI & Analytics" />
                <ControlPlaneItem text="Metadata Only (No PII)" />
              </div>

              <div className="bg-secondary/50 border border-border rounded-md px-4 py-3">
                <span className="text-sm text-muted-foreground">
                  Receives: Risk scores, timestamps, policy IDs, actions taken
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataPlaneItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 px-4 py-3 bg-secondary/50 border border-border rounded-md">
    <span className="text-accent">{icon}</span>
    <span className="text-sm text-foreground">{text}</span>
  </div>
);

const ControlPlaneItem = ({ text }: { text: string }) => (
  <div className="px-4 py-3 bg-secondary/70 border border-border rounded-md">
    <span className="text-sm text-foreground">{text}</span>
  </div>
);

export default ArchitectureSection;
