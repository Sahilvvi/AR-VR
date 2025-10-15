import { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  Eye,
  Headphones,
  Globe,
  Layers,
  Heart,
  GraduationCap,
  Home as HomeIcon,
  Factory,
  Plane,
  Gamepad2,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';

export default function Home() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0 });

  useEffect(() => {
    const animateCounter = (key: keyof typeof counters, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    };

    setTimeout(() => {
      animateCounter('years', 6);
      animateCounter('clients', 150);
      animateCounter('projects', 300);
    }, 500);
  }, []);

  const services = [
    {
      icon: <Eye size={40} />,
      title: 'Augmented Reality',
      desc: 'Transform how users interact with products through AR visualization, training simulations, and interactive marketing experiences.',
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg',
    },
    {
      icon: <Headphones size={40} />,
      title: 'Virtual Reality',
      desc: 'Immersive VR environments for training, entertainment, and virtual collaboration that feel incredibly real.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg',
    },
    {
      icon: <Globe size={40} />,
      title: 'Metaverse Solutions',
      desc: 'Build persistent virtual worlds for commerce, social interaction, and community engagement at scale.',
      image: 'https://images.pexels.com/photos/7241412/pexels-photo-7241412.jpeg',
    },
    {
      icon: <Layers size={40} />,
      title: 'Mixed Reality',
      desc: 'Blend digital and physical worlds seamlessly with enterprise-grade MR solutions for real-world applications.',
      image: 'https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg',
    },
  ];

  const industries = [
    { icon: <Heart size={32} />, name: 'Healthcare', count: '45+' },
    { icon: <GraduationCap size={32} />, name: 'Education', count: '60+' },
    { icon: <HomeIcon size={32} />, name: 'Real Estate', count: '35+' },
    { icon: <Factory size={32} />, name: 'Manufacturing', count: '28+' },
    { icon: <Plane size={32} />, name: 'Aviation', count: '15+' },
    { icon: <Gamepad2 size={32} />, name: 'Gaming', count: '42+' },
  ];

  const technologies = [
    { name: 'Unity 3D', expertise: '95%' },
    { name: 'Unreal Engine', expertise: '92%' },
    { name: 'WebXR', expertise: '88%' },
    { name: 'ARCore/ARKit', expertise: '90%' },
    { name: 'Blender', expertise: '87%' },
    { name: 'Meta Quest SDK', expertise: '93%' },
  ];

  const benefits = [
    { icon: <Zap />, title: 'Rapid Development', desc: 'Average 8-12 week delivery' },
    { icon: <Shield />, title: 'Enterprise Grade', desc: 'Bank-level security' },
    { icon: <Clock />, title: '24/7 Support', desc: 'Global team coverage' },
    { icon: <CheckCircle />, title: '98% Satisfaction', desc: 'Client success rate' },
  ];

  const projects = [
    {
      title: 'Medical Training VR',
      desc: 'Surgical simulation platform used by 50+ hospitals',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg',
      stats: '50+ Hospitals',
    },
    {
      title: 'AR Home Design',
      desc: 'Furniture visualization app with 2M+ downloads',
      category: 'Retail',
      image: 'https://images.pexels.com/photos/7241412/pexels-photo-7241412.jpeg',
      stats: '2M+ Downloads',
    },
    {
      title: 'Virtual Campus',
      desc: 'Interactive university tour platform',
      category: 'Education',
      image: 'https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg',
      stats: '100K+ Students',
    },
  ];

  return (
    <div className="w-full">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg"
            alt="VR Technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <AnimatedSection>
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-neon-cyan text-sm font-semibold">
              Trusted by Fortune 500 Companies
            </div>
          </AnimatedSection>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            Reimagining Reality
            <br />
            <span className="gradient-text">with AR & VR</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We partner with ambitious companies to build immersive experiences that drive engagement,
            increase conversions, and transform how people interact with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              View Our Work <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 glass rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-neon-violet/50">
              Schedule Demo
            </button>
          </div>
          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-neon-blue" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-neon-blue" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-neon-blue" />
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 rounded-3xl blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg"
              alt="AR/VR Development Team"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">About Ramestha Infommersive</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Building Tomorrow's
              <span className="gradient-text"> Digital Experiences</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Since 2019, we've been at the forefront of immersive technology innovation. Our team of 50+
              specialists combines deep technical expertise with creative vision to deliver XR solutions
              that solve real business challenges.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We've helped companies reduce training costs by 60%, increase product engagement by 250%,
              and create entirely new revenue streams through immersive experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass rounded-xl p-4 hover:holographic transition-all duration-300">
                  <div className="text-neon-blue mb-2">{benefit.icon}</div>
                  <div className="font-semibold text-sm mb-1">{benefit.title}</div>
                  <div className="text-xs text-gray-400">{benefit.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Our Services</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Enterprise <span className="gradient-text">XR Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              End-to-end immersive technology services from concept to deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-neon-blue">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Industries</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Trusted Across <span className="gradient-text">Multiple Sectors</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection
              key={index}
              delay={index * 50}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:holographic hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300 cursor-pointer group"
            >
              <div className="text-neon-cyan group-hover:text-neon-violet transition-colors duration-300">
                {industry.icon}
              </div>
              <span className="font-medium text-center text-sm">{industry.name}</span>
              <span className="text-xs text-neon-blue font-bold">{industry.count} Projects</span>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Impact</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Results That <span className="gradient-text">Matter</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0} className="glass rounded-2xl p-10 text-center holographic hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition-all duration-300">
              <Award size={48} className="mx-auto mb-6 text-neon-blue" />
              <div className="text-6xl font-display font-bold text-neon-blue mb-3">{counters.years}+</div>
              <div className="text-gray-300 text-lg mb-2">Years of Excellence</div>
              <div className="text-gray-500 text-sm">Leading XR innovation since 2019</div>
            </AnimatedSection>
            <AnimatedSection delay={100} className="glass rounded-2xl p-10 text-center holographic hover:shadow-[0_0_40px_rgba(138,43,226,0.4)] transition-all duration-300">
              <Users size={48} className="mx-auto mb-6 text-neon-violet" />
              <div className="text-6xl font-display font-bold text-neon-violet mb-3">{counters.clients}+</div>
              <div className="text-gray-300 text-lg mb-2">Enterprise Clients</div>
              <div className="text-gray-500 text-sm">Including 25 Fortune 500 companies</div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="glass rounded-2xl p-10 text-center holographic hover:shadow-[0_0_40px_rgba(0,191,255,0.4)] transition-all duration-300">
              <Briefcase size={48} className="mx-auto mb-6 text-neon-cyan" />
              <div className="text-6xl font-display font-bold text-neon-cyan mb-3">{counters.projects}+</div>
              <div className="text-gray-300 text-lg mb-2">Projects Delivered</div>
              <div className="text-gray-500 text-sm">With 98% client satisfaction rate</div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Technology Stack</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Powered by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="glass rounded-xl p-6 hover:holographic transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-display font-semibold">{tech.name}</span>
                <span className="text-neon-blue text-sm font-bold">{tech.expertise}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full transition-all duration-1000"
                  style={{ width: tech.expertise }}
                ></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Case Studies</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Success Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer transform hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-semibold text-neon-cyan">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-blue text-sm font-bold">{project.stats}</span>
                    <button className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors text-sm font-semibold group-hover:gap-3 duration-300">
                      View Case <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="relative glass rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg"
              alt="Contact Us"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Build the <span className="gradient-text">Future?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how immersive technology can transform your business.
              Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-violet rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-10 py-4 glass rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-neon-cyan/50">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
