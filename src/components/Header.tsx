// UPDATED: Added 'ReactNode' to imports to fix the error
import { useState, ReactNode } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between 
                 rounded-full border border-white/10 px-6 py-3 shadow-2xl transition-all duration-300
                 w-[90%] max-w-7xl" 
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", 
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)"
      }}
    >
      {/* LEFT: Logo Section */}
      <div
  className="group flex items-center gap-4 cursor-pointer shrink-0 translate-y-[1px]"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img
    src="/foretyx-logo-white.png"
    alt="Foretyx Logo"
    className="h-10 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.18)]"
  />

  <span className="hidden sm:block text-lg font-bold uppercase tracking-[0.18em] text-white leading-none">
    FORETYX
  </span>
</div>

      {/* CENTER: Platform Navigation */}
      <nav className="hidden md:flex items-center gap-8">
         <NavButton onClick={() => scrollToSection("security")}>Security</NavButton>
        <NavButton onClick={() => scrollToSection("architecture")}>Architecture</NavButton>
        <NavButton onClick={() => scrollToSection("workspaces")}>Workspaces</NavButton>
      </nav>

      {/* RIGHT: Actions */}
      <div className="hidden md:flex items-center gap-6 shrink-0">
      <button 
          onClick={() => scrollToSection("footer")}
          // UPDATED: Changed hover:text-white -> hover:text-[#AADDEC]
          className="text-sm font-medium text-gray-400 hover:text-[#AADDEC] transition-colors"
        >
          Contact
        </button>
        
        {/* BUTTON: White BG -> Sky Blue Hover (#AADDEC) */}
        <button
          className="bg-white text-black hover:bg-[#AADDEC] rounded-full px-6 h-9 text-sm font-bold transition-all duration-300"
          onClick={() => scrollToSection("early-access")}
        >
          Get Early Access
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2 text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu (Floating Card) */}
      {mobileMenuOpen && (
        <div 
          className="absolute top-full left-0 right-0 mt-4 rounded-3xl border border-white/10 p-6 flex flex-col gap-4 shadow-xl overflow-hidden"
          style={{
              backgroundColor: "rgba(10, 10, 10, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)"
          }}
        >
          <NavButton onClick={() => scrollToSection("platform")}>Platform</NavButton>
          <NavButton onClick={() => scrollToSection("security")}>Security</NavButton>
          <NavButton onClick={() => scrollToSection("architecture")}>Architecture</NavButton>
          <NavButton onClick={() => scrollToSection("workspaces")}>Workspaces</NavButton>
          <hr className="border-white/10" />
          
          <button 
            className="w-full bg-white text-black hover:bg-[#AADDEC] rounded-full h-10 font-bold transition-all duration-300" 
            onClick={() => scrollToSection("early-access")}
          >
            Get Early Access
          </button>
        </div>
      )}
    </header>
  );
};

// UPDATED: Used 'ReactNode' directly instead of 'React.ReactNode' to avoid namespace error
const NavButton = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
  </button>
);

export default Header;