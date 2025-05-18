import ProductDetails from "@/components/ProductDetails";
import { Product } from "@/sanity.types";
import { getProductBySlug } from "@/sanity/lib/queries/getProductBySlug";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const product: Product | null = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <ProductDetails product={product} />
    </div>
  );
}
