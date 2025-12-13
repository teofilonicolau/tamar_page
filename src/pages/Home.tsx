import { Hero } from '../components/sections/Hero';
import { Benefits } from '../components/sections/Benefits';
import { InteractiveDemo } from '../components/sections/InteractiveDemo';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Credibility } from '../components/sections/Credibility';
import { CTA } from '../components/sections/CTA';

export function Home() {
    return (
        <main>
            <Hero />
            <Benefits />
            <InteractiveDemo />
            <ServicesGrid />
            <Credibility />
            <CTA />
        </main>
    );
}
