import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Globe,
  Clock,
  HelpCircle,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Calendar,
  CheckCircle,
  Zap,
  ArrowRight,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const locations = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Innovation Drive, CA 94105',
      phone: '+1 (415) 555-0100',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg'
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Tech Street, EC2A 4BX',
      phone: '+44 20 7946 0958',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '2-8-1 Shibuya, Tokyo 150-0002',
      phone: '+81 3-5555-0100',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg'
    },
  ];

  const supportOptions = [
    {
      icon: <MessageCircle size={40} />,
      title: 'Live Chat',
      desc: 'Average response time: 2 minutes',
      action: 'Start Chat',
      color: 'neon-blue',
      available: '24/7 Available',
    },
    {
      icon: <Phone size={40} />,
      title: 'Phone Support',
      desc: 'Speak with our XR specialists',
      action: '+1 (415) 555-0100',
      color: 'neon-violet',
      available: 'Mon-Fri 9AM-6PM PST',
    },
    {
      icon: <Mail size={40} />,
      title: 'Email Us',
      desc: 'Detailed project inquiries',
      action: 'hello@ramesthainfommersive.com',
      color: 'neon-cyan',
      available: 'Response within 4 hours',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on complexity and scope. A simple AR mobile app typically takes 8-12 weeks from concept to deployment. Enterprise VR training platforms range from 12-20 weeks. Metaverse environments can take 16-24 weeks. We provide detailed project roadmaps during our initial consultation phase.',
    },
    {
      question: 'What technologies and platforms do you support?',
      answer:
        'We develop for all major XR platforms including iOS (ARKit), Android (ARCore), Meta Quest, HoloLens 2, PSVR, WebXR, and desktop VR systems. Our tech stack includes Unity, Unreal Engine 5, Blender, and custom WebGL solutions. We also provide cross-platform solutions to maximize your ROI.',
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer:
        'Yes! We provide comprehensive support packages including bug fixes, performance optimization, feature updates, content management, analytics monitoring, and technical support. Our support tiers range from basic maintenance to fully managed services with dedicated account teams.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer flexible engagement models: fixed-price projects (ideal for well-defined scopes), time & materials (for evolving requirements), and retained services (for ongoing development). Projects typically range from $50K for simple AR apps to $500K+ for complex enterprise platforms. Contact us for a customized quote.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        'Absolutely. We have extensive experience integrating XR solutions with enterprise systems including Salesforce, SAP, Oracle, custom databases, LMS platforms, and IoT devices. We use secure APIs, webhooks, and custom middleware to ensure seamless data flow and real-time synchronization.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve multiple industries including Healthcare (surgical training, patient education), Education (virtual labs, campus tours), Real Estate (property visualization), Manufacturing (assembly training, safety protocols), Retail (product visualization, virtual stores), and Entertainment (gaming, experiences).',
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, name: 'LinkedIn', url: '#', color: 'neon-blue' },
    { icon: <Twitter size={24} />, name: 'Twitter', url: '#', color: 'neon-cyan' },
    { icon: <Facebook size={24} />, name: 'Facebook', url: '#', color: 'neon-violet' },
    { icon: <Instagram size={24} />, name: 'Instagram', url: '#', color: 'neon-blue' },
    { icon: <Youtube size={24} />, name: 'YouTube', url: '#', color: 'neon-cyan' },
    { icon: <Github size={24} />, name: 'GitHub', url: '#', color: 'neon-violet' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full pt-24">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-neon-cyan text-sm font-semibold">
              Get in Touch • Free Consultation • 24/7 Support
            </div>
          </AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Let's Build the
            <br />
            <span className="gradient-text">Future Together</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into immersive reality. Our team of XR experts is ready to discuss your project.
          </p>
        </div>
      </section>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Send Us a Message</div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
              Start Your <span className="gradient-text">XR Journey</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Fill out the form and our team will respond within 4 business hours. For urgent inquiries,
              call us directly at <span className="text-neon-blue">+1 (415) 555-0100</span>.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white focus:outline-none"
                    required
                  >
                    <option value="" className="bg-black">Project Type *</option>
                    <option value="ar" className="bg-black">AR Development</option>
                    <option value="vr" className="bg-black">VR Training</option>
                    <option value="metaverse" className="bg-black">Metaverse</option>
                    <option value="mr" className="bg-black">Mixed Reality</option>
                    <option value="consulting" className="bg-black">Consulting</option>
                  </select>
                </div>
                <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent text-white focus:outline-none"
                  >
                    <option value="" className="bg-black">Budget Range</option>
                    <option value="50k" className="bg-black">$50K - $100K</option>
                    <option value="100k" className="bg-black">$100K - $250K</option>
                    <option value="250k" className="bg-black">$250K - $500K</option>
                    <option value="500k" className="bg-black">$500K+</option>
                  </select>
                </div>
              </div>
              <div className="glass rounded-xl p-1 focus-within:holographic transition-all duration-300">
                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message{' '}
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-gray-500 text-sm text-center">
                By submitting, you agree to our Privacy Policy. We never share your information.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="relative glass rounded-2xl overflow-hidden hover:holographic transition-all duration-300">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
                  alt="Office"
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
              <div className="relative p-8">
                <Clock size={40} className="text-neon-violet mb-4" />
                <h3 className="text-2xl font-display font-semibold mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="text-neon-blue font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="text-neon-cyan font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-sm text-gray-400">
                    <CheckCircle size={16} className="inline mr-2 text-neon-blue" />
                    24/7 Emergency support available for enterprise clients
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 hover:holographic transition-all duration-300">
              <MapPin size={40} className="text-neon-cyan mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-4">Headquarters</h3>
              <p className="text-gray-300 leading-relaxed">
                123 Innovation Drive, Suite 200
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:holographic transition-all duration-300">
              <Globe size={40} className="text-neon-blue mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-4 text-gray-300">
                <a href="mailto:hello@ramesthainfommersive.com" className="flex items-center gap-3 hover:text-neon-blue transition-colors group">
                  <Mail size={20} className="text-neon-blue flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">hello@ramesthainfommersive.com</span>
                </a>
                <a href="tel:+14155550100" className="flex items-center gap-3 hover:text-neon-violet transition-colors group">
                  <Phone size={20} className="text-neon-violet flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">+1 (415) 555-0100</span>
                </a>
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-neon-cyan flex-shrink-0" />
                  <span>Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Global Offices</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              We're <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Visit us at any of our global locations or connect virtually
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-display font-bold">{location.city}</h3>
                    <p className="text-neon-cyan text-sm">{location.country}</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <MapPin size={16} className="text-neon-blue mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone size={16} className="text-neon-violet flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Contact Options</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose Your <span className="gradient-text">Preferred Method</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="glass rounded-2xl p-8 hover:holographic transition-all duration-500 text-center group cursor-pointer transform hover:scale-105"
            >
              <div className={`text-${option.color} mb-4 flex justify-center group-hover:animate-pulse-glow`}>
                {option.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-2">{option.desc}</p>
              <p className="text-sm text-neon-cyan mb-6">{option.available}</p>
              <button className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                {option.action}
              </button>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <HelpCircle size={64} className="mx-auto mb-6 text-neon-violet animate-pulse-glow" />
            <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">FAQs</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={index * 50}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-display font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-neon-blue transition-transform duration-300 flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-6">
                    {faq.answer}
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Stay Connected</div>
          <h2 className="text-4xl font-display font-bold mb-4">
            Follow Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join 50K+ followers for XR insights, case studies, and innovation updates
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`w-14 h-14 glass rounded-full flex items-center justify-center hover:holographic hover:shadow-[0_0_20px_currentColor] transition-all duration-300 group text-${social.color} transform hover:scale-110`}
              >
                <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="relative glass rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Consultation"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12 md:p-16 text-center">
            <Calendar size={64} className="mx-auto mb-6 text-neon-blue animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Book a Free <span className="gradient-text">Consultation</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a 30-minute strategy session with our XR experts. We'll discuss your goals,
              explore solutions, and provide a preliminary project roadmap—completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-neon-violet via-neon-blue to-neon-cyan rounded-xl font-semibold text-xl hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3">
                Schedule Now
                <ArrowRight size={24} />
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-neon-blue" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-neon-blue" />
                <span>Expert guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-neon-blue" />
                <span>Custom roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
