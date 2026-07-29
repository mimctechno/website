import { Clock, Tag, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const idx = posts.indexOf(post);
  const prev = posts[idx + 1] ?? null;
  const next = posts[idx - 1] ?? null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'MIMC Technologies', url: 'https://www.mimctechnologies.com' },
    publisher: {
      '@type': 'Organization',
      name: 'MIMC Technologies',
      logo: { '@type': 'ImageObject', url: 'https://www.mimctechnologies.com/logo.png' },
    },
    url: `https://www.mimctechnologies.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <Layout title={post.title} description={post.description}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-2 font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)] hover:text-[var(--color-cyber-accent)] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> BACK TO BLOG
        </Link>

        {/* Article header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="border border-[var(--color-cyber-accent)]/40 text-[var(--color-cyber-accent)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest bg-[var(--color-cyber-accent)]/10">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest">
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] leading-tight text-white mb-8">
            {post.title}
          </h1>

          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-base uppercase tracking-wider leading-relaxed border-l-2 border-[var(--color-cyber-accent)] pl-4">
            {post.description}
          </p>
        </header>

        {/* Cover image placeholder */}
        <div className="mb-16 h-64 md:h-80 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#00ffaa44 1px, transparent 1px), linear-gradient(90deg, #00ffaa44 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center px-8 relative z-10">
            [IMAGE PLACEHOLDER]<br />Article hero / cover image
          </p>
          <div className="absolute top-3 left-3 text-[10px] font-[var(--font-cyber-accent)] text-[var(--color-cyber-accent)] uppercase tracking-widest opacity-50">ARTICLE.IMG // PLACEHOLDER</div>
        </div>

        {/* Article body */}
        <article className="space-y-12 mb-20">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl md:text-2xl font-bold font-[var(--font-cyber-head)] uppercase tracking-widest text-white mb-5 flex items-center gap-3">
                <span className="text-[var(--color-cyber-accent)] text-sm">{String(i + 1).padStart(2, '0')}.</span>
                {section.heading}
              </h2>
              <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] text-sm md:text-base leading-loose uppercase tracking-wider">
                {section.body}
              </p>
              {/* Inline image placeholder every 2 sections */}
              {i % 2 === 1 && (
                <div className="mt-8 h-44 border border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#00ffaa44 1px, transparent 1px), linear-gradient(90deg, #00ffaa44 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <p className="font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] text-xs uppercase tracking-widest text-center px-8">
                    [IMAGE PLACEHOLDER]<br />Section illustration / diagram
                  </p>
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-16 pt-8 border-t border-[var(--color-cyber-border)]">
          <Tag className="w-4 h-4 text-[var(--color-cyber-accent)] flex-shrink-0 mt-0.5" />
          {post.tags.map(tag => (
            <span key={tag} className="border border-[var(--color-cyber-border)] px-3 py-1 text-xs font-[var(--font-cyber-accent)] uppercase tracking-widest text-[var(--color-cyber-muted-fg)]">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mb-16 border-2 border-[var(--color-cyber-accent)] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-cyber-accent)]/5" />
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest font-[var(--font-cyber-head)] text-white mb-3 relative z-10">
            READY TO IMPLEMENT THIS?
          </h3>
          <p className="text-[var(--color-cyber-muted-fg)] font-[var(--font-cyber-accent)] uppercase tracking-widest text-xs mb-6 relative z-10">
            Our team sets this up for you. Free discovery call, no commitment.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 font-[var(--font-cyber-accent)] uppercase tracking-widest cyber-chamfer border-2 border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent)] text-black hover:bg-transparent hover:text-[var(--color-cyber-accent)] transition-all duration-300 px-6 py-3 text-sm relative z-10">
            BOOK FREE CALL <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <nav className="grid grid-cols-2 gap-4">
          {next ? (
            <Link to={`/blog/${next.slug}`} className="group p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors">
              <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-5 h-full">
                <div className="flex items-center gap-2 text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest mb-2">
                  <ArrowLeft className="w-3 h-3" /> NEWER
                </div>
                <div className="text-xs font-[var(--font-cyber-head)] text-white uppercase tracking-wide leading-snug group-hover:text-[var(--color-cyber-accent)] transition-colors line-clamp-2">
                  {next.title}
                </div>
              </div>
            </Link>
          ) : <div />}
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="group p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors text-right">
              <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-5 h-full">
                <div className="flex items-center justify-end gap-2 text-xs font-[var(--font-cyber-accent)] text-[var(--color-cyber-muted-fg)] uppercase tracking-widest mb-2">
                  OLDER <ArrowRight className="w-3 h-3" />
                </div>
                <div className="text-xs font-[var(--font-cyber-head)] text-white uppercase tracking-wide leading-snug group-hover:text-[var(--color-cyber-accent)] transition-colors line-clamp-2">
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : <div />}
        </nav>

      </div>
    </Layout>
  );
}
