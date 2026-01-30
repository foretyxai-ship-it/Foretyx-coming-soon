import { Users, Settings, MessageSquare, Shield, FileText, BarChart3, TrendingDown } from "lucide-react";

const WorkspacesSection = () => {
  return (
    <section className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h2 className="text-display-xs lg:text-display-sm font-semibold text-foreground mb-4">
            Two Workspaces. One Platform.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Employees use AI securely. Admins maintain complete control. Both share the same
            trusted infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Employee Workspace */}
          <div className="border border-border rounded-lg p-6 lg:p-8 bg-card/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Employee Workspace</h3>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A minimal, professional AI interface. Employees access approved models with automatic policy enforcement—no friction, no risk.
            </p>

            <div className="space-y-2 mb-6">
              <WorkspaceFeature icon={<MessageSquare className="w-4 h-4" />} text="Governed AI Chat" />
              <WorkspaceFeature icon={<Shield className="w-4 h-4" />} text="Auto PII Redaction" />
              <WorkspaceFeature icon={<FileText className="w-4 h-4" />} text="Policy Enforcement" />
            </div>

            {/* Mock Chat UI */}
            <div className="border border-border rounded-lg overflow-hidden bg-secondary/30">
              <div className="px-4 py-2 border-b border-border flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs text-muted-foreground">GPT-4 Turbo</span>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-6 h-6 rounded-full bg-secondary border border-border flex-shrink-0" />
                  <div className="bg-secondary/50 rounded-lg px-3 py-2 text-sm text-muted-foreground">
                    Analyze our Q4 revenue...
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Shield className="w-3 h-3" />
                  <span>PII detected and redacted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Workspace */}
          <div className="border border-accent/30 rounded-lg p-6 lg:p-8 bg-card/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Settings className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Admin Workspace</h3>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Define AI policies, monitor risk trends, and generate compliance reports—without ever seeing raw employee conversations.
            </p>

            <div className="space-y-2 mb-6">
              <WorkspaceFeature icon={<Settings className="w-4 h-4" />} text="Policy Configuration" />
              <WorkspaceFeature icon={<BarChart3 className="w-4 h-4" />} text="Risk Analytics" />
              <WorkspaceFeature icon={<FileText className="w-4 h-4" />} text="Compliance Reports" />
            </div>

            {/* Mock Analytics UI */}
            <div className="border border-border rounded-lg overflow-hidden bg-secondary/30">
              <div className="px-4 py-2 border-b border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Policy Violations</span>
                <span className="text-xs text-accent">Last 7 days</span>
              </div>
              <div className="p-4">
                {/* Mini bar chart */}
                <div className="flex items-end gap-1.5 h-12 mb-3">
                  <div className="flex-1 bg-accent/60 rounded-sm" style={{ height: '80%' }} />
                  <div className="flex-1 bg-accent/60 rounded-sm" style={{ height: '100%' }} />
                  <div className="flex-1 bg-accent/60 rounded-sm" style={{ height: '70%' }} />
                  <div className="flex-1 bg-accent/40 rounded-sm" style={{ height: '50%' }} />
                  <div className="flex-1 bg-accent/40 rounded-sm" style={{ height: '40%' }} />
                  <div className="flex-1 bg-accent/30 rounded-sm" style={{ height: '30%' }} />
                  <div className="flex-1 bg-accent/20 rounded-sm" style={{ height: '20%' }} />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">12 blocked</span>
                    <span className="text-muted-foreground">48 scrubbed</span>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingDown className="w-3 h-3" />
                    <span>23% vs last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkspaceFeature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-accent">
    {icon}
    <span>{text}</span>
  </div>
);

export default WorkspacesSection;
