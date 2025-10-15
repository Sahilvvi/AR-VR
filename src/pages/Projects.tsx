import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  Eye,
  Headphones,
  Globe,
  Building2,
  GraduationCap,
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
  Filter,
  Sparkles,
  CheckCircle,
  Users,
  TrendingUp,
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AR', 'VR', 'Metaverse', 'Mixed Reality'];

  const projects = [
    {
      title: 'Medical Training VR',
      category: 'VR',
      desc: 'Immersive surgical training simulator for medical students with haptic feedback and real-time performance analytics',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg',
      color: 'neon-blue',
      stats: '50+ Hospitals',
    },
    {
      title: 'AR Furniture Visualizer',
      category: 'AR',
      desc: 'Mobile app allowing customers to visualize furniture in their homes before purchase with AI-powered recommendations',
      image: 'https://images.pexels.com/photos/7241412/pexels-photo-7241412.jpeg',
      color: 'neon-violet',
      stats: '2M+ Downloads',
    },
    {
      title: 'Virtual Campus Tour',
      category: 'VR',
      desc: 'Interactive 360° virtual reality tour for university prospective students with guided experiences',
      image: 'https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg',
      color: 'neon-cyan',
      stats: '100K+ Students',
    },
    {
      title: 'Real Estate AR Platform',
      category: 'AR',
      desc: 'Augmented reality property visualization with detailed floor plans, customization tools, and virtual staging',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      color: 'neon-blue',
      stats: '35+ Agencies',
    },
    {
      title: 'Corporate Metaverse Hub',
      category: 'Metaverse',
      desc: 'Virtual office space with meeting rooms, collaboration tools, social areas, and custom avatar system',
      image: 'https://images.pexels.com/photos/7241471/pexels-photo-7241471.jpeg',
      color: 'neon-violet',
      stats: '10K+ Users',
    },
    {
      title: 'Industrial Training MR',
      category: 'Mixed Reality',
      desc: 'Mixed reality safety training for manufacturing environments using HoloLens with real-time guidance',
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg',
      color: 'neon-cyan',
      stats: '28+ Facilities',
    },
    {
      title: 'VR Concert Experience',
      category: 'VR',
      desc: 'Immersive virtual concert platform with multi-user support, live streaming, and interactive features',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      color: 'neon-blue',
      stats: '500K+ Attendees',
    },
    {
      title: 'AR Navigation System',
      category: 'AR',
      desc: 'Indoor augmented reality navigation for large commercial complexes, airports, and shopping malls',
      image: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg',
      color: 'neon-violet',
      stats: '15+ Locations',
    },
    {
      title: 'Metaverse Art Gallery',
      category: 'Metaverse',
      desc: 'Virtual art exhibition space with NFT integration, social interaction features, and live auctions',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg',
      color: 'neon-cyan',
      stats: '25K+ Visitors',
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      company: 'MedTech Solutions',
      role: 'Training Director',
      text: 'The VR training simulator has revolutionized our medical education program. Student engagement increased by 300% and retention improved dramatically.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    },
    {
      name: 'David Chen',
      company: 'UrbanSpace Properties',
      role: 'CEO',
      text: 'The AR platform transformed how we showcase properties. Our sales conversion rate increased by 45% and client satisfaction is at an all-time high.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    },
    {
      name: 'Sarah Johnson',
      company: 'Global University',
      role: 'Admissions Head',
      text: 'The virtual campus tour provided international students with an amazing preview. Applications doubled this year and engagement metrics are phenomenal.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
    },
  ];

  const caseStudies = [
    {
      title: 'Healthcare VR Revolution',
      metric: '87%',
      description: 'Reduction in training time',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    },
    {
      title: 'Retail AR Success',
      metric: '250%',
      description: 'Increase in engagement',
      image: 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg',
    },
    {
      title: 'Education Virtual Tours',
      metric: '3.5M+',
      description: 'Total virtual visitors',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full pt-24">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg"
            alt="VR Projects"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-neon-cyan text-sm font-semibold">
              300+ Projects Delivered • 98% Success Rate
            </div>
          </AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Portfolio of
            <br />
            <span className="gradient-text">Immersive Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge AR, VR, and Metaverse projects that have transformed businesses and delighted millions of users worldwide
          </p>
        </div>
      </section>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <Filter className="text-neon-blue" size={24} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-violet shadow-[0_0_30px_rgba(0,255,255,0.5)]'
                  : 'glass hover:holographic'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-semibold text-neon-cyan">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-neon-blue/20 rounded-full text-xs font-bold text-neon-blue backdrop-blur-sm">
                  {project.stats}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                <button className={`flex items-center gap-2 text-${project.color} hover:text-neon-cyan transition-colors group-hover:gap-3 duration-300 font-semibold`}>
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Success Metrics</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Proven <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real results from our immersive technology implementations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="relative glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <div className="text-6xl font-display font-bold gradient-text mb-2">{study.metric}</div>
                    <div className="text-lg font-semibold mb-1">{study.description}</div>
                    <div className="text-neon-cyan text-sm">{study.title}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 rounded-3xl blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="AR Development"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">AR Solutions</div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Augmented Reality
              <br />
              <span className="gradient-text">That Transforms</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Custom AR applications for mobile and web that blend digital content seamlessly with the real world,
              creating engaging experiences that drive business results.
            </p>
            <div className="space-y-4">
              {[
                { text: 'ARKit & ARCore native development', icon: <CheckCircle className="text-neon-blue" /> },
                { text: 'WebXR browser-based experiences', icon: <CheckCircle className="text-neon-violet" /> },
                { text: 'Enterprise AR training tools', icon: <CheckCircle className="text-neon-cyan" /> },
                { text: 'Retail & e-commerce visualization', icon: <CheckCircle className="text-neon-blue" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">VR Experiences</div>
              <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
                Virtual Reality
                <br />
                <span className="gradient-text">Reimagined</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Fully immersive VR environments for training, entertainment, and collaboration built with
                cutting-edge technology and optimized for all major headsets.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Meta Quest', value: '95%' },
                  { label: 'PSVR', value: '90%' },
                  { label: 'HTC Vive', value: '92%' },
                  { label: 'WebVR', value: '88%' },
                ].map((platform, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <div className="text-2xl font-display font-bold gradient-text mb-1">{platform.value}</div>
                    <div className="text-sm text-gray-400">{platform.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-violet/20 to-neon-cyan/20 rounded-3xl blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg"
                alt="VR Development"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Metaverse</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Building Virtual <span className="gradient-text">Worlds</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Persistent, scalable metaverse platforms for business and entertainment
          </p>
        </div>
        <div className="relative glass rounded-3xl overflow-hidden hover:holographic transition-all duration-500">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/7241471/pexels-photo-7241471.jpeg"
              alt="Metaverse"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative p-12 md:p-16">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={48} />,
                  title: 'Virtual Offices',
                  desc: 'Collaborative workspaces with meeting rooms and social areas',
                  color: 'neon-blue',
                },
                {
                  icon: <Users size={48} />,
                  title: 'Event Venues',
                  desc: 'Large-scale virtual venues for conferences and exhibitions',
                  color: 'neon-violet',
                },
                {
                  icon: <Sparkles size={48} />,
                  title: 'Social Spaces',
                  desc: 'Community hubs for networking and entertainment',
                  color: 'neon-cyan',
                },
              ].map((feature, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center hover:holographic transition-all duration-300">
                  <div className={`text-${feature.color} mb-4 flex justify-center`}>{feature.icon}</div>
                  <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Client Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real feedback from companies we've helped transform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-neon-blue fill-neon-blue" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-neon-blue">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
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
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Start Project"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12 md:p-16 text-center">
            <TrendingUp size={64} className="mx-auto mb-6 text-neon-violet animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Create <span className="gradient-text">Something Amazing?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss your project and explore how immersive technology can drive your business forward.
              Schedule a free consultation with our XR experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-12 py-5 glass rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-neon-violet/50">
                View All Work
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
