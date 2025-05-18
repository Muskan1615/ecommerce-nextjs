import { NoProductsAvailable } from "@/components/NoProductsAvailable";
import { ProductGrid } from "@/components/ProductGrid";
import { Title } from "@/components/Title";
import { getProductsByCategorySlug } from "@/sanity/lib/queries/getProductsByCategorySlug";

export default async function CategoryPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const { category, products } = await getProductsByCategorySlug(slug);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title className="text-center text-4xl sm:text-5xl mb-8">
          {category.title}
        </Title>
        {products?.length ? (
          <ProductGrid products={products} />
        ) : (
          <NoProductsAvailable categoryName={category.title} />
        )}
      </div>
    </section>
  );
}
