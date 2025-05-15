import { BestSellers } from "@/components/BestSellers";
import { BrandStorySection } from "@/components/BrandStorySection";
import { Container } from "@/components/Container";
import { Hero } from "@/components/HeroSection";
import { getBestSellers } from "@/sanity/lib/getBestSellers";

export default async function Home() {
  const products = await getBestSellers();
  return (
    <>
      <Hero />
      <Container>
        <BrandStorySection />
        <BestSellers products={products} />
      </Container>
    </>
  );
}
