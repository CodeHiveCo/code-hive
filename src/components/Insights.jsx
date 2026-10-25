import { useState } from 'react';
import { ArrowUpRight, Eye, X, BookOpen, Clock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const articles = [
  {
    id: 1,
    title: "Your Website Is More Than a Digital Address: Here's Why It Matters",
    subtitle: "How a well-designed website builds trust, visibility, and business growth",
    category: "Web Development & Digital Strategy",
    readTime: "7–9 min read",
    date: "STRATEGY // 01",
    tags: ['Web Dev', 'SEO', 'Conversion', 'Branding'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    excerpt:
      'In today\'s digital world, your website is often the first interaction visitors experience with your services. Is your website actually working for your business, or simply taking up space on the internet?',
    sections: [
      {
        heading: '1. First Impressions Happen Faster Than You Think',
        content:
          'Imagine a potential customer discovering your business online for the first time. They visit your website expecting to understand what you offer and why they should trust you. Instead, they encounter outdated info or slow-loading pages. A clean layout, clear messaging, professional presentation, and intuitive navigation establish immediate credibility.',
      },
      {
        heading: '2. Your Website Builds Trust Before the First Conversation',
        content:
          'Trust is essential to every business relationship. A well-structured website answers essential questions: What does this business do? Who does it serve? What makes it different? Can I trust it to deliver? How do I get started?',
      },
      {
        heading: '3. Visibility Is Important, but Discoverability Is Better',
        content:
          'Having a website does not automatically mean people will find it. Your website needs to be structured so search engines can crawl it and potential customers discover relevant information through search engine optimization (SEO).',
      },
      {
        heading: '4. A Great Website Turns Visitors Into Opportunities',
        content:
          'Traffic is useful, but traffic alone does not grow a business. Conversion-focused design guides visitors toward taking action—requesting a quote, booking a consultation, or contacting your team without unnecessary friction.',
      },
      {
        heading: '5. Your Website Should Work on Every Screen',
        content:
          'Visitors browse on smartphones, tablets, and desktops. Responsive web design ensures text remains legible, navigation is natural, and performance remains crisp across all network speeds.',
      },
      {
        heading: '6. Your Website Can Support Your Business Around the Clock',
        content:
          'Unlike a physical office, your website works 24/7. It can support online inquiries, content distribution, appointment bookings, and client validation even when your team is offline.',
      },
      {
        heading: '7. An Investment, Not Just an Expense',
        content:
          'Website development is not a one-time cost. Its true value lies in how effectively it supports your brand identity, marketing campaigns, and customer acquisition over time.',
      },
      {
        heading: 'Final Thoughts: Build With Purpose',
        content:
          'At HiveMind, we believe digital experiences should be built with intention. Every element should have a purpose, every interaction should make sense, and every solution should be designed around the people it serves.',
      },
    ],
  },
  {
    id: 2,
    title: 'Beyond Likes: Building a Social Media Strategy That Actually Works',
    subtitle: 'Connecting content to clear objectives, audience trust, and revenue',
    category: 'Digital Marketing & Social Media',
    readTime: '8–10 min read',
    date: 'MARKETING // 02',
    tags: ['Social Media', 'Content Strategy', 'Audience Growth', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
    excerpt:
      'Getting likes feels good, but are those likes translating into customers, inquiries, or sales? Discover how to build a social media strategy that drives real business value.',
    sections: [
      {
        heading: '1. Stop Posting Just to Stay Active',
        content:
          'Posting without purpose confuses your audience. Every piece of content should educate, showcase your expertise, answer a common question, tell your brand story, or guide people to the next step.',
      },
      {
        heading: '2. Understand Who You\'re Trying to Reach',
        content:
          'A smaller, highly relevant audience is far more valuable than a huge, disengaged follower count. Clarify what problems they face and which channels they prefer.',
      },
      {
        heading: '3. Choose Platforms Based on Your Goals',
        content:
          'Instagram supports visual storytelling; TikTok unlocks short-form reach; LinkedIn drives B2B networking and thought leadership; Facebook builds community. Focus your resources on channels that align with your business model.',
      },
      {
        heading: '4. Create Content That Gives People a Reason to Care',
        content:
          'Balance educational content, brand storytelling, social proof/testimonials, and genuine engagement. Give people reasons to follow you beyond sales pitches.',
      },
      {
        heading: '5. Make Your Content Recognisably Yours',
        content:
          'Consistent typography, colors, tone of voice, and recurring themes make your brand memorable in crowded feeds.',
      },
      {
        heading: '6. Turn Engagement Into Meaningful Relationships',
        content:
          'Respond thoughtfully to direct messages, comments, and inquiries. Social media is a two-way relationship channel, not a one-way broadcasting horn.',
      },
      {
        heading: '7. Stop Measuring Success by Likes Alone',
        content:
          'Evaluate qualified inquiries, link visits, saves, and attributed revenue rather than vanity metrics alone.',
      },
      {
        heading: 'Final Thoughts: Build a Strategy, Not Just a Following',
        content:
          'HiveMind believes digital growth begins with clear thinking and purposeful execution. Turn attention into lasting value.',
      },
    ],
  },
  {
    id: 3,
    title: 'Turning Website Traffic Into Revenue: A Practical Guide to Google AdSense',
    subtitle: 'From policy compliance and RPM analysis to sustainable digital monetization',
    category: 'Website Monetization & Digital Growth',
    readTime: '10–12 min read',
    date: 'MONETIZATION // 03',
    tags: ['AdSense', 'Monetization', 'RPM / CPC', 'Traffic Optimization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    excerpt:
      'Learn how Google AdSense works, what influences website earnings, how to prepare for approval, and practical ways to turn your website into a revenue-generating digital asset.',
    sections: [
      {
        heading: '1. What Is Google AdSense & How It Works',
        content:
          'AdSense allows publishers to monetize their content by displaying relevant ads served automatically by Google based on content niche, user location, and advertiser demand.',
      },
      {
        heading: '2. Does AdSense Pay for Traffic Alone?',
        content:
          'No—AdSense does not pay simply for opening a page. Earnings depend on ad impressions, user engagement, advertiser bids, audience geography, and RPM (Revenue Per Thousand Page Views).',
      },
      {
        heading: '3. Understanding CPC, CPM, and Page RPM',
        content:
          'Page RPM = (Estimated Earnings ÷ Page Views) × 1,000. For example, $300 from 50,000 page views equals an RPM of $6.00. Tracking RPM helps evaluate monetization efficiency over time.',
      },
      {
        heading: '4. Factors Influencing Monetization Potential',
        content:
          'Audience location, content niche (finance, tech, and business often have higher advertiser competition), content depth, site performance, and user experience all impact earnings.',
      },
      {
        heading: '5. Steps for AdSense Approval',
        content:
          'Publish high-value original content, establish clear navigation, provide necessary privacy policy disclosures, ensure fast mobile load speeds, and maintain full compliance with Google Publisher Policies.',
      },
      {
        heading: '6. Think Beyond Advertising: Build a Valuable Digital Asset',
        content:
          'A website can support advertising, lead generation, client services, digital products, and sponsorships. A site built around genuine value will always outperform a site built solely for ads.',
      },
      {
        heading: 'Final Thoughts: Ideas into Systems. Vision into Reality.',
        content:
          'At HiveMind, we help clients build monetization-ready websites, assess AdSense compliance, and engineer high-performing digital platforms that turn visitors into measurable revenue.',
      },
    ],
  },
];

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="insights" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      {/* Header */}
      <RevealOnScroll animation="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
        <div className="lg:col-span-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-3 block font-semibold">
            [ 06 // INSIGHTS & KNOWLEDGE ]
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Explore Our Insights<span className="text-[#d48806] dark:text-[#f5a623]">.</span>
          </h2>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-[#d48806] dark:text-[#f5a623]">
            Discover new perspectives. Build what comes next.
          </p>
        </div>

        <div className="lg:col-span-6">
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#94a3b8] leading-relaxed font-sans">
            The digital world never stands still, and neither do we. At HiveMind, we explore the ideas, technologies, and strategies shaping the future of digital business. Through practical insights on web development, UI/UX design, digital innovation, social media, and website monetization, we share knowledge that helps businesses stay informed, adapt to change, and uncover new opportunities for growth.
          </p>
        </div>
      </RevealOnScroll>

      {/* Articles Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((post, idx) => (
          <RevealOnScroll key={post.id} animation="fade-up" delay={idx * 150}>
            <article
              onClick={() => setSelectedArticle(post)}
              className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 hover:border-[#f5a623] dark:hover:border-[#f5a623] transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-1.5 hover:shadow-[#f5a623]/10 relative h-full"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#050814]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-transparent to-[#050814]/40" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase font-semibold bg-[#050814]/85 backdrop-blur-md border border-[#f5a623]/30 text-[#f5a623]">
                    {post.category}
                  </span>
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#050814]/50 backdrop-blur-[2px]">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5a623] text-[#050814] font-mono text-xs uppercase tracking-wider font-bold shadow-lg">
                    <BookOpen className="w-4 h-4" /> Read Article
                  </div>
                </div>
              </div>

              {/* Content & Title */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-[#94a3b8] mb-3">
                    <span className="text-[#d48806] dark:text-[#f5a623] font-semibold">{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white group-hover:text-[#d48806] dark:group-hover:text-[#f5a623] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#94a3b8] line-clamp-3 leading-relaxed font-sans mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-[#94a3b8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#d48806] dark:text-[#f5a623] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 shadow-2xl overflow-hidden flex flex-col">
            {/* Header / Banner */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden flex-shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d172e] via-[#0d172e]/60 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/60 hover:bg-[#f5a623] text-white hover:text-[#050814] flex items-center justify-center transition-colors border border-white/20 z-20 cursor-pointer shadow-lg"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#f5a623] text-[#050814] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                  {selectedArticle.category}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-xs font-mono text-[#f5a623]">
                  <span>By HiveMind</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Scrollable Article Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-neutral-800 dark:text-[#e2e8f0]">
              <div className="p-5 rounded-2xl bg-[#f5a623]/10 border border-[#f5a623]/25 text-sm sm:text-base leading-relaxed italic text-neutral-900 dark:text-neutral-100">
                "{selectedArticle.excerpt}"
              </div>

              {selectedArticle.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {sec.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#94a3b8] leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}

              {/* Call to action at bottom of article */}
              <div className="pt-8 border-t border-black/10 dark:border-[#f5a623]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                    HiveMind — Ideas into systems. Vision into reality.
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-[#94a3b8]">
                    Ready to build your next digital asset? Let's connect.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#f5a623] text-[#050814] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ffbe3b] transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
