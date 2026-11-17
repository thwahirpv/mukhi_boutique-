import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailView from "@/components/product/ProductDetailView";
import { PRODUCTS, getProductById } from "@/lib/products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found | Mukhi Boutique",
      description: "Exclusive designer bridal sarees and luxury fashion at Mukhi Boutique.",
    };
  }

  return {
    title: `${product.name} | Mukhi Boutique Kowdiar`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Mukhi Boutique`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== id).slice(0, 3);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-20">
      <Navbar />
      <ProductDetailView product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}
