import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { posts } from '../data/posts';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'MIMC Technologies Blog',
  description: 'Insights on ERP, WhatsApp API, Tally integration, and enterprise software from the MIMC Technologies team.',
  url: 'https://www.mimctechnologies.com/blog',
};

const categoryColors: Record<string, string> = {
  'WhatsApp API': '#25D366',
  'ERP & CRM': 'var(--color-cyber-accent)',
  'Web Development': 'var(--color-cyber-accent2)',
  'SEO': 'var(--color-cyber-accent3)',
};

export default function Blog() {
  return (
    <Layout
      title="Blog — ERP, WhatsApp API & Enterprise Software Insights"
      description="Expert insights on WhatsApp Business API, Tally integration, ERP software, and digital marketing from MIMC Technologies."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Header */}
        <section className="mb-20">
          <div className="inline-block border border-[var(--color-cyber-accent)] text-[var(--color-cyber-accent)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10 mb-8">
            <span className="animate-blink mr-2">_</span> KNOWLEDGE_BASE
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-none text-white">
              <span className="block cyber-glitch" data-text="THE">THE</span>
              <span className="bg-gradient-to-r from-[var(--color-cyber-accent)] via-[var(--color-cyber-accent3)] to-[var(--color-cyber-accent2)] bg-clip-text text-transparent">BLOG</span>
            </h1>
            <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-wider text-sm leading-relaxed border-l-2 border-[var(--color-cyber-accent)] pl-4">
              Practical guides on WhatsApp API, Tally integration, ERP software, and digital marketing — written by the team that builds and deploys these systems daily.
            </p>
          </div>
        </section>

        {/* Featured post (first) */}
        {posts[0] && (
          <section className="mb-16">
            <Link to={`/blog/${posts[0].slug}`} className="group block p-[2px] cyber-chamfer-reverse bg-gradient-to-br from-[var(--color-cyber-border)] to-[var(--color-cyber-border)] hover:from-[var(--color-cyber-accent)] hover:to-[var(--color-cyber-accent2)] transition-colors duration-500">
              <div className="bg-[var(--color-cyber-card)] cyber-chamfer-reverse p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--color-cyber-accent)]/5 blur-[100px] group-hover:bg-[var(--color-cyber-accent)]/10 transition-colors" />

                {/* Image placeholder */}
                <div className="h-64 lg:h-80 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)] flex flex-col items-center justify-center gap-3 group-hover:border-[var(--color-cyber-accent)]/50 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#00ffaa44 1px, transparent 1px), linear-gradient(90deg, #00ffaa44 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center px-6">
                    [IMAGE PLACEHOLDER]<br />Featured article cover image
                  </p>
                </div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest px-3 py-1 border"
                      style={{ color: categoryColors[posts[0].category] || 'var(--color-cyber-accent)', borderColor: `${categoryColors[posts[0].category] || 'var(--color-cyber-accent)'}44`, background: `${categoryColors[posts[0].category] || 'var(--color-cyber-accent)'}11` }}>
                      FEATURED
                    </span>
                    <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">{posts[0].category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-cyber-head)] uppercase tracking-wider text-white group-hover:text-[var(--color-cyber-accent)] transition-colors leading-tight">
                    {posts[0].title}
                  </h2>
                  <p className="text-[var(--color-cyber-muted-fg)] text-sm leading-relaxed uppercase tracking-wider">
                    {posts[0].description}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].readTime}</span>
                    <span>{new Date(posts[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                    READ ARTICLE <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Remaining posts */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-[var(--color-cyber-border)] pb-4">
            <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">&gt;&gt; ALL_ARTICLES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map(post => {
              const accent = categoryColors[post.category] || 'var(--color-cyber-accent)';
              return (
                <Link key={post.slug} to={`/blog/${post.slug}`}
                  className="group p-[2px] cyber-chamfer block"
                  style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}>
                  <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-8 h-full flex flex-col relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors">
                    <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }} />

                    {/* Image placeholder */}
                    <div className="h-40 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-bg)] flex items-center justify-center mb-6 group-hover:border-opacity-50 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(${accent}44 1px, transparent 1px), linear-gradient(90deg, ${accent}44 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                      <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center px-4">
                        [IMAGE PLACEHOLDER]<br />Article cover
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-[10px] font-[var(--font-cyber-accent)] uppercase tracking-widest px-2 py-0.5 border"
                        style={{ color: accent, borderColor: `${accent}44`, background: `${accent}11` }}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-[var(--font-cyber-head)] uppercase tracking-wider text-white mb-3 group-hover:text-[var(--color-cyber-accent)] transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[var(--color-cyber-muted-fg)] text-xs leading-relaxed uppercase tracking-wider mb-5 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      <span className="flex items-center gap-1" style={{ color: accent }}>READ <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Tags cloud */}
        <section className="mb-24 border border-[var(--color-cyber-border)] p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Tag className="w-4 h-4 text-[var(--color-cyber-accent)]" />
            <span className="font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest text-[var(--color-cyber-accent)]">TOPICS</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(posts.flatMap(p => p.tags))).map(tag => (
              <span key={tag} className="border border-[var(--color-cyber-border)] px-4 py-2 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)] hover:border-[var(--color-cyber-accent)] hover:text-[var(--color-cyber-accent)] transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border border-[var(--color-cyber-accent)] p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/3" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-4 relative z-10">
            READY TO IMPLEMENT<br /><span className="text-[var(--color-cyber-accent)]">WHAT YOU'VE LEARNED?</span>
          </h2>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-xs mb-8 relative z-10">
            Talk to our team. Free consultation, no commitment.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-8 py-4 relative z-10">
            GET IN TOUCH <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

      </div>
    </Layout>
  );
}
