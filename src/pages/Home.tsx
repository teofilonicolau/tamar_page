import { Hero } from '../components/sections/Hero';
import { Benefits } from '../components/sections/Benefits';
import { Portfolio } from '../components/sections/Portfolio';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Credibility } from '../components/sections/Credibility';
import { CTA } from '../components/sections/CTA';

export function Home() {
    return (
        <main id="home">
            <Hero />
            <Benefits />
            <Portfolio />
            <ServicesGrid />
            <Credibility />
            <CTA />
        </main>
    );
}
