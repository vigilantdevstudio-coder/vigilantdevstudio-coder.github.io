```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Server, Cloud, Lock, Zap, Globe, ArrowRight, Menu, X, CheckCircle, Activity, Cpu, Database, Wifi, Eye, EyeOff, AlertTriangle, Terminal } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [terminalVisible, setTerminalVisible] = useState(false);
  const heroRef = useRef(null);

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DDoS Shield",
      description: "Multi-layered protection against sophisticated attacks",
      features: ["Real-time threat analysis", "Global filtering network", "Zero false positives", "24/7 security ops"],
      color: "from-red-600 to-red-800"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Stealth VPS",
      description: "Anonymous hosting with military-grade security",
      features: ["No logs policy", "Anonymous billing", "Encrypted traffic", "Location obfuscation"],
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Storage",
      description: "End-to-end encrypted cloud with zero-knowledge access",
      features: ["AES-256 encryption", "Anonymous access", "Multi-factor auth", "Secure deletion"],
      color: "from-slate-700 to-slate-900"
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime" },
    { value: "10ms", label: "Avg Response" },
    { value: "10Tbps", label: "Protection" },
    { value: "500+", label: "Servers" }
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Automated threat detection and mitigation within milliseconds" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Infrastructure", desc: "Worldwide network of high-performance servers" },
    { icon: <Lock className="w-6 h-6" />, title: "Military-Grade Security", desc: "AES-256 encryption and zero-knowledge privacy" },
    { icon: <Activity className="w-6 h-6" />, title: "24/7 Monitoring", desc: "Continuous surveillance and instant alerts" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const TerminalWindow = () => (
    <div className="bg-black rounded-lg p-4 font-mono text-green-400 text-sm border border-green-500/30 shadow-lg shadow-green-500/20">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="space-y-1">
        <div>> Initializing security protocols...</div>
        <div>> Scanning for threats... [✓]</div>
        <div>> DDoS protection active [✓]</div>
        <div>> Anonymous tunnel established [✓]</div>
        <div>> Encryption: AES-256 [✓]</div>
        <div>> System status: SECURE</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-green-900/10"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-green-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random()}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-red-800/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/25">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">ANONYMOUS</div>
                <div className="text-sm text-gray-400 -mt-1">CYBER SECURITY</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Features', 'Security', 'Access'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              <button className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-2.5 rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 text-sm font-semibold border border-red-500/30">
                Secure Access
              </button>
            </div>

            <button 
              className="md:hidden text-gray-300 hover:text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-red-800/30">
            <div className="px-4 py-6 space-y-4">
              {['Services', 'Features', 'Security', 'Access'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-red-400 transition-colors duration-300 py-2 border-b border-red-800/30 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 mt-4 font-semibold border border-red-500/30">
                Secure Access
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
                  CLASSIFIED SECURITY
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-red-400">ANONYMOUS</span>
                <br />
                <span className="text-white font-light">CYBER SECURITY</span>
              </h1>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">OPERATIONAL STATUS: SECURE</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Enterprise-grade security solutions for those who operate beyond conventional reach. 
              Military-grade protection for the digital underground.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 flex items-center space-x-2 border border-red-500/30">
                <span>Secure Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                className="border border-gray-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 hover:border-red-500/50 transition-all duration-300 flex items-center space-x-2"
                onClick={() => setTerminalVisible(!terminalVisible)}
              >
                <Terminal className="w-5 h-5" />
                <span>System Status</span>
              </button>
            </div>

            {terminalVisible && (
              <div className="animate-fadeIn">
                <TerminalWindow />
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
              OPERATIONAL CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SECURITY OPERATIONS</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
              Military-grade solutions for those who operate beyond the reach of conventional security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                  activeService === index 
                    ? `border-red-500/50 shadow-2xl shadow-red-500/25 scale-105` 
                    : 'border-gray-700/50 hover:border-red-500/30'
                }`}
                style={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-red-500/20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 group/item">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
                  OPERATIONAL EXCELLENCE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">ADVANCED CAPABILITIES</h2>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Uncompromising security for those who cannot afford detection
                </p>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-red-400 group-hover:text-red-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-2xl p-8 border border-red-800/30 backdrop-blur-sm">
                <TerminalWindow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
              SECURITY PROTOCOLS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CLASSIFIED PROTECTION</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
              Multi-layered security architecture designed for maximum anonymity and protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "DDoS Shield", desc: "Multi-layer protection" },
              { icon: <EyeOff className="w-6 h-6" />, title: "Anonymity", desc: "Zero-knowledge privacy" },
              { icon: <Lock className="w-6 h-6" />, title: "Encryption", desc: "AES-256 security" },
              { icon: <AlertTriangle className="w-6 h-6" />, title: "Threat Detection", desc: "Real-time monitoring" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-red-500/30">
              SECURE ACCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              READY TO <span className="text-red-400">OPERATE</span> IN SHADOWS?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              Join the ranks of those who operate beyond conventional security measures
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-red-600 to-red-800 px-12 py-4 rounded-xl text-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 border border-red-500/30">
              <span>Secure Access</span>
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
              Intelligence Brief
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-800/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-red-400">ANONYMOUS</div>
                  <div className="text-xs text-gray-400">CYBER SECURITY</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm font-light">
                Security solutions for those who operate beyond conventional reach.
              </p>
            </div>
            
            {['Operations', 'Security', 'Intelligence', 'Access'].map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-semibold text-red-400 mb-4 text-sm">{category}</h4>
                <ul className="space-y-2 text-gray-400">
                  {Array.from({ length: 4 }, (_, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block text-sm"
                      >
                        {category} Link {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-red-800/30 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2024 ANONYMOUS. All operations classified.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
```
