import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  TrendingUp,
  Sparkles,
  Eye,
  Code,
  Lightbulb,
  Clock,
  BookOpen,
} from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AR', 'VR', 'Metaverse', 'Design', 'Tech'];

  const featuredPost = {
    title: 'The Future of Mixed Reality: Trends to Watch in 2025',
    excerpt:
      'Explore the groundbreaking developments in mixed reality technology that are reshaping industries and creating new possibilities for digital interaction. From spatial computing to AI-powered immersive experiences.',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2025',
    category: 'Tech',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg',
    views: '12.5K',
  };

  const articles = [
    {
      title: '10 Ways AR is Transforming Retail Shopping',
      excerpt: 'Discover how augmented reality is revolutionizing the retail experience, driving customer engagement, and boosting conversion rates by up to 250%.',
      author: 'Michael Torres',
      date: 'March 12, 2025',
      category: 'AR',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg',
      views: '8.2K',
    },
    {
      title: 'Building Immersive VR Training Programs',
      excerpt: 'A comprehensive guide to creating effective virtual reality training solutions for enterprise, with real-world case studies and best practices.',
      author: 'Alex Rivera',
      date: 'March 10, 2025',
      category: 'VR',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg',
      views: '9.7K',
    },
    {
      title: 'Metaverse Design Principles for 2025',
      excerpt: 'Essential design guidelines for creating engaging and accessible virtual worlds that users love to explore and interact with.',
      author: 'Emma Williams',
      date: 'March 8, 2025',
      category: 'Metaverse',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/7241471/pexels-photo-7241471.jpeg',
      views: '6.8K',
    },
    {
      title: 'The Psychology of Immersive Experiences',
      excerpt: 'Understanding how users interact with and respond to virtual and augmented reality environments on a psychological level.',
      author: 'Dr. James Parker',
      date: 'March 5, 2025',
      category: 'Design',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      views: '11.3K',
    },
    {
      title: 'WebXR: Building Browser-Based AR/VR',
      excerpt: 'Technical deep-dive into creating cross-platform immersive experiences using WebXR APIs without app downloads.',
      author: 'Lisa Chen',
      date: 'March 3, 2025',
      category: 'Tech',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      views: '7.5K',
    },
    {
      title: 'AR in Healthcare: Real-World Applications',
      excerpt: 'How augmented reality is improving patient care, medical training, and surgical procedures in hospitals worldwide.',
      author: 'Dr. Michael Anderson',
      date: 'March 1, 2025',
      category: 'AR',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      views: '10.1K',
    },
    {
      title: 'Optimizing VR Performance for Mobile',
      excerpt: 'Best practices for creating smooth, high-quality VR experiences on mobile devices without compromising visual fidelity.',
      author: 'David Kim',
      date: 'February 28, 2025',
      category: 'VR',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg',
      views: '5.9K',
    },
    {
      title: 'Creating Accessible Metaverse Experiences',
      excerpt: 'Designing inclusive virtual worlds that work for everyone, including users with disabilities and diverse accessibility needs.',
      author: 'Maria Santos',
      date: 'February 25, 2025',
      category: 'Metaverse',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      views: '4.7K',
    },
    {
      title: 'The Business Case for AR/VR Investment',
      excerpt: 'ROI analysis and financial justification for implementing immersive technology solutions in your organization.',
      author: 'Robert Chang',
      date: 'February 22, 2025',
      category: 'Tech',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      views: '13.2K',
    },
  ];

  const popularTopics = [
    { name: 'Spatial Computing', count: 24 },
    { name: 'AI in XR', count: 18 },
    { name: 'Enterprise Solutions', count: 31 },
    { name: 'WebXR Development', count: 15 },
    { name: 'UX Design', count: 22 },
    { name: 'Performance', count: 19 },
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="w-full pt-24">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
            alt="Blog"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-neon-cyan text-sm font-semibold">
              XR Insights • Industry Trends • Expert Analysis
            </div>
          </AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Immersive Tech
            <br />
            <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In-depth articles, tutorials, and insights from our team of XR experts on the latest developments in AR, VR, and Metaverse technology
          </p>
        </div>
      </section>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-neon-blue text-sm font-bold mb-4 tracking-wider uppercase">Featured Article</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Editor's Pick</span>
          </h2>
        </div>
        <div className="relative glass rounded-3xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              <div className="absolute top-6 left-6 px-4 py-2 bg-neon-blue/20 backdrop-blur-sm rounded-full text-sm font-semibold text-neon-blue">
                {featuredPost.category}
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-neon-cyan" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-neon-violet" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-neon-blue" />
                  {featuredPost.readTime}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-neon-cyan" />
                <span className="text-sm text-gray-400">{featuredPost.views} views</span>
              </div>
              <button className="mt-6 flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors font-semibold group-hover:gap-3 duration-300">
                Read Full Article <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-gradient-to-b from-transparent via-black/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl font-display font-bold">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="text-neon-violet" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-neon-blue to-neon-violet shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                      : 'glass hover:holographic'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer transform hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-semibold text-neon-cyan">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-white/80">
                    <Eye size={14} />
                    {article.views}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-neon-blue" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-neon-violet" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <button className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors text-sm font-semibold group-hover:gap-3 duration-300">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-center mb-12">
              <div className="text-neon-cyan text-sm font-bold mb-4 tracking-wider uppercase">Industry Insights</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Deep Dive <span className="gradient-text">Content</span>
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Enterprise XR Implementation Guide',
                  desc: 'Complete roadmap for deploying AR/VR solutions at scale',
                  author: 'Tech Team',
                  time: '15 min',
                  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
                },
                {
                  title: 'Spatial Design Best Practices',
                  desc: 'Creating intuitive 3D interfaces for immersive environments',
                  author: 'Design Team',
                  time: '12 min',
                  image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl overflow-hidden hover:holographic transition-all duration-500 group cursor-pointer"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-display font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-400 mb-4">{post.desc}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <User size={14} className="text-neon-blue" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={14} className="text-neon-violet" />
                          {post.time} read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 holographic">
              <BookOpen size={40} className="text-neon-violet mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {popularTopics.map((topic, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center justify-between p-3 glass rounded-lg hover:holographic transition-all duration-300 group"
                  >
                    <span className="font-medium">{topic.name}</span>
                    <span className="text-neon-cyan text-sm font-bold">{topic.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 holographic">
              <Mail size={40} className="text-neon-blue mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-3">Subscribe to Newsletter</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Get the latest XR insights delivered to your inbox weekly
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent text-white placeholder-gray-500 focus:outline-none focus:holographic transition-all"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">Join 10,000+ XR professionals</p>
            </div>

            <div className="glass rounded-2xl p-8 holographic">
              <Share2 size={40} className="text-neon-cyan mb-4" />
              <h3 className="text-2xl font-display font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Stay connected on social media
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Twitter size={20} />, color: 'neon-cyan' },
                  { icon: <Linkedin size={20} />, color: 'neon-blue' },
                  { icon: <Facebook size={20} />, color: 'neon-violet' },
                ].map((social, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center hover:holographic hover:shadow-[0_0_20px_currentColor] transition-all duration-300 text-${social.color}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 container mx-auto px-6">
        <div className="relative glass rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Contribute"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative p-12 md:p-16 text-center">
            <Sparkles size={64} className="mx-auto mb-6 text-neon-violet animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Share Your <span className="gradient-text">XR Story</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Have insights about immersive technology? We're always looking for expert contributors
              to share their knowledge with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-neon-violet to-neon-blue rounded-xl font-semibold text-lg hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all duration-300 transform hover:scale-105">
                Submit Article
              </button>
              <button className="px-10 py-4 glass rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-neon-cyan/50">
                Writing Guidelines
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
