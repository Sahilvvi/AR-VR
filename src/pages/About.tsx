import AnimatedSection from '../components/AnimatedSection';
import {
  Target,
  Eye,
  TrendingUp,
  Users,
  Brain,
  Lightbulb,
  Zap,
  Award,
  Trophy,
  Star,
  Rocket,
  Shield,
  Heart,
  CheckCircle,
} from 'lucide-react';

export default function About() {
  const timeline = [
    { year: '2019', event: 'Founded', desc: 'Launched with 5 passionate XR developers' },
    { year: '2020', event: 'First Enterprise Win', desc: 'Delivered VR training to Fortune 500 company' },
    { year: '2021', event: 'Team Growth', desc: 'Expanded to 30+ specialists across 3 offices' },
    { year: '2022', event: 'Industry Award', desc: 'Best AR/VR Innovation at Tech Summit' },
    { year: '2023', event: 'Global Expansion', desc: 'Opened offices in London, Tokyo, and Singapore' },
    { year: '2024', event: 'Metaverse Pioneer', desc: 'Launched enterprise metaverse platform' },
    { year: '2025', event: 'AI Integration', desc: 'Leading AI-powered immersive experiences' },
  ];

  const team = [
    { name: 'Dr. Alex Rivera', role: 'CEO & Founder', exp: '15 years in XR', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
    { name: 'Sarah Chen', role: 'Chief Technology Officer', exp: '12 years at Meta', image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg' },
    { name: 'Michael Torres', role: 'Creative Director', exp: 'Ex-Pixar Lead', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg' },
    { name: 'Emma Williams', role: 'Head of XR Development', exp: 'Unity Certified Expert', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg' },
  ];

  const values = [
    {
      icon: <Brain size={40} />,
      title: 'Innovation First',
      desc: 'We invest 20% of revenue in R&D to stay ahead of emerging technologies',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Creative Excellence',
      desc: 'Award-winning design team pushing the boundaries of immersive storytelling',
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Privacy',
      desc: 'Enterprise-grade security with ISO 27001 and SOC 2 compliance',
    },
    {
      icon: <Heart size={40} />,
      title: 'Client Success',
      desc: '98% client satisfaction with dedicated support teams',
    },
  ];

  const achievements = [
    { icon: <Trophy />, title: 'Best AR/VR Company 2024', org: 'Tech Innovation Awards', color: 'neon-blue' },
    { icon: <Star />, title: 'Top 10 Metaverse Builders', org: 'Virtual World Summit', color: 'neon-violet' },
    { icon: <Award />, title: 'Excellence in XR Design', org: 'Digital Experience Awards', color: 'neon-cyan' },
    { icon: <TrendingUp />, title: 'Fastest Growing XR Studio', org: 'Deloitte Fast 500', color: 'neon-blue' },
  ];

  const stats = [
    { value: '50+', label: 'Expert Team Members', icon: <Users /> },
    { value: '$12M', label: 'Annual Revenue 2024', icon: <TrendingUp /> },
    { value: '25', label: 'Fortune 500 Clients', icon: <Rocket /> },
    { value: '15', label: 'Industry Awards', icon: <Trophy /> },
  ];

  return (
    <div className="w-full pt-24">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-neon-cyan text-sm font-semibold">
              Since 2019 • 50+ Team Members • Global Presence
            </div>
          </AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
            Building the Future
            <br />
            <span className="gradient-text">of Immersive Tech</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A diverse team of engineers, designers, and visionaries creating next-generation
            AR/VR experiences for the world's leading brands
          </p>
        </div>
      </section>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:holographic transition-all duration-300">
              <div className="text-neon-blue mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Our Mission</div>
            <h2 className="text-4xl font-orbitron font-bold mb-6 leading-tight">
              Democratizing <span className="gradient-text">Immersive Technology</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We believe XR technology should be accessible to businesses of all sizes. Our mission is to
              break down barriers and empower companies to harness the transformative power of AR, VR, and
              mixed reality solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Through innovative development practices, scalable architectures, and strategic partnerships,
              we've helped over 150 companies integrate immersive experiences into their operations—reducing
              costs, improving training outcomes, and creating new revenue opportunities.
            </p>
            <div className="flex gap-3 flex-wrap">
              {['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant', 'Unity Partner'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
                  <CheckCircle size={16} className="text-neon-blue" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-violet/20 to-neon-cyan/20 rounded-3xl blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="VR Development"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              The <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-violet to-neon-cyan transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 50}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass rounded-xl p-6 hover:holographic transition-all duration-300">
                      <div className="text-2xl font-orbitron font-bold text-neon-blue mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-neon-violet rounded-full shadow-[0_0_20px_currentColor] hidden md:block"></div>
                  <div className="flex-1"></div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Leadership</div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry veterans with decades of combined experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer transform hover:scale-105"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-orbitron font-semibold mb-1">{member.name}</h3>
                <p className="text-neon-blue text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.exp}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Core Values</div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl p-8 hover:holographic transition-all duration-500 text-center"
              >
                <div className="text-neon-violet mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-orbitron font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-violet text-sm font-bold mb-4 tracking-wider uppercase">Recognition</div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Award-Winning <span className="gradient-text">Excellence</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="glass rounded-2xl p-6 hover:holographic transition-all duration-300 text-center group"
            >
              <div className={`text-${achievement.color} mb-4 flex justify-center text-4xl`}>
                {achievement.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm">{achievement.title}</h3>
              <p className="text-gray-500 text-xs">{achievement.org}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="relative glass rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Join our team"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12 md:p-16 text-center">
            <Zap size={64} className="mx-auto mb-6 text-neon-blue animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Join Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              We're hiring talented XR developers, 3D artists, and UX designers passionate about
              building the future of immersive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-neon-violet to-neon-blue rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="px-10 py-4 glass rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-neon-cyan/50">
                Our Culture
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
