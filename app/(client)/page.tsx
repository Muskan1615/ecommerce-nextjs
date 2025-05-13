import { BrandStorySection } from "@/components/BrandStorySection";
import { Container } from "@/components/Container";
import Hero from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <BrandStorySection />
      </Container>
    </div>
  );
}
