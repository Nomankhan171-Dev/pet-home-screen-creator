import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, PawPrint, Heart, ShieldCheck, Scissors, Stethoscope, House, Menu, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import heroImage from '@/assets/pet-care-hero.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Paw & Co. | A little care. A lot of love.' },
    { name: 'description', content: 'Thoughtful pet care for your best friend. Explore grooming, veterinary care, and comfortable pet boarding with Paw & Co.' },
    { property: 'og:title', content: 'Paw & Co. | Care for your best friend' },
    { property: 'og:description', content: 'Explore gentle grooming, everyday wellness, and a home away from home for your pets.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Home,
});
const services = [
  { title: 'Veterinary care', icon: Stethoscope, description: 'A little peace of mind, from nose to tail. Thoughtful care for every stage of life.', details: ['Routine wellness checkups', 'Vaccination and preventive care', 'Nutrition and everyday health guidance'] },
  { title: 'Grooming & spa', icon: Scissors, description: 'Fresh coats and happy paws. Gentle grooming that helps your pet feel their best.', details: ['Bathing and coat conditioning', 'Coat trims and brushing', 'Nail and paw care'] },
  { title: 'Pet boarding', icon: House, description: 'Their home away from home. Cozy stays, playtime, and plenty of love while you’re away.', details: ['Comfortable spaces to rest', 'Daily play and enrichment', 'Care tailored to your pet’s routine'] },
];
function Brand() { return <a href="#home" className="brand" aria-label="Paw and Co home"><span className="brand-mark"><PawPrint size={23}/></span><span>paw & co<span className="brand-dot">.</span></span></a>; }
function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [selected, setSelected] = useState<number | null>(null);
 const service = selected === null ? undefined : services[selected];
 return <>
  <header id="home"><div className="site-header"><Brand/><nav aria-label="Main navigation" className="desktop-nav"><a href="#home" className="active">Home</a><a href="#services">Our services</a><a href="#about">About us</a></nav><Button asChild className="pet-button header-cta"><a href="#services">Find your pet’s care <ArrowRight/></a></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[['Home','home'],['Our services','services'],['About us','about']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}</header>
  <main>
   <section className="hero" aria-labelledby="welcome-title"><img className="hero-photo" src={heroImage} alt="Happy golden retriever and a kitten enjoying a sunny garden" width={1536} height={1024} fetchPriority="high"/><div className="hero-content"><div className="eyebrow"><PawPrint size={15}/> FOR THE LOVE OF LITTLE PAWS</div><h1 id="welcome-title">A little care.<br/>A <span>lot of love.</span></h1><p className="hero-description">Because they’re not just pets. They’re family.<br/>Give your best friend the happy, healthy life they deserve.</p><div className="hero-actions"><Button asChild className="pet-button"><a href="#services">Explore our services <ArrowRight/></a></Button><Button asChild variant="outline" className="pet-button"><a href="#about">Meet Paw & Co.</a></Button></div><div className="hero-note"><Heart size={15}/> Thoughtful care. Happy tails. Every day.</div></div></section>
   <div className="promise-strip"><div className="promises"><div className="promise"><ShieldCheck/>Care with confidence</div><div className="promise"><Heart/>A gentle, personal approach</div><div className="promise"><PawPrint/>For dogs & cats</div><div className="promise"><House/>A place to feel at home</div></div></div>
   <section id="services" className="services"><div className="section-top"><div><div className="section-kicker">GOOD CARE, HAPPY PETS</div><h2>A little something for every paw.</h2><p>From everyday essentials to extra-special pampering.</p></div><Button asChild variant="link" className="pet-button"><a href="#service-list">Discover our care <ArrowRight/></a></Button></div><div id="service-list" className="service-grid">{services.map((item,index) => <article key={item.title} className="service-card"><div className="service-symbol"><item.icon size={25} strokeWidth={1.6}/></div><h3>{item.title}</h3><p>{item.description}</p><Button variant="link" className="service-link" onClick={() => setSelected(index)} aria-label={`Explore ${item.title}`}>Explore care <ArrowRight/></Button></article>)}</div></section>
   <section id="about" className="about-band"><div className="section-kicker">HELLO, WE’RE PAW & CO.</div><h2>Big hearts for your little companions.</h2><p>We believe good pet care starts with kindness. From a reassuring checkup to a fresh new trim, every moment is about helping your best friend feel safe, comfortable, and loved.</p></section>
  </main>
  <footer className="footer"><Brand/><p>© 2026 Paw & Co. · Made for the ones you love.</p><span className="eyebrow"><PawPrint size={15}/> Happy pets. Happy people.</span></footer>
  <Dialog open={Boolean(service)} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent><DialogHeader><DialogTitle>{service?.title}</DialogTitle><DialogDescription>{service?.description}</DialogDescription></DialogHeader><div className="detail-body"><ul className="detail-list">{service?.details.map(detail => <li key={detail}>{detail}</li>)}</ul><p className="mt-5 text-sm">Every pet is different. Care should be, too.</p></div><Button className="pet-button mt-2" onClick={() => setSelected(null)}>Got it <Check/></Button></DialogContent></Dialog>
 </>;
}
