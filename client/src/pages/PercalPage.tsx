import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PercalSection from "@/components/PercalSection";
import KnowProducts from "@/components/KnowProducts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

export default function PercalPage() {
  const {
    data: products150,
    isLoading: loading150,
  } = trpc.percal.list.useQuery({ fios: 150 });

  const {
    data: products200,
    isLoading: loading200,
  } = trpc.percal.list.useQuery({ fios: 200 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        <PercalSection
          fios={150}
          subtitle="150 fios"
          description="Perfeito para coleções florais, listras, xadrez e até mesmo estampas juvenis. Eleve o padrão dos seus produtos com o Percal 150 fios"
          longDescription="O Percal 150 fios combina conforto, praticidade e versatilidade. Composto por 100% algodão, é um tecido resistente e macio, perfeito para quem busca qualidade em roupas de cama e decoração."
          artigo="936"
          composicao="100% algodão"
          largura="2,50 m"
          products={products150}
          isLoading={loading150}
        />

        <PercalSection
          fios={200}
          subtitle="200 fios"
          description="Perfeito para coleções florais, listras, xadrez e até mesmo estampas juvenis. Eleve o padrão dos seus produtos com o Percal 200 fios"
          longDescription="O Percal 200 fios é sinônimo de sofisticação e conforto. Com uma construção fina e densa de 100% algodão, ele oferece maciez incomparável e qualidade premium, ideal para transformar ambientes em verdadeiros refúgios de luxo."
          artigo="942"
          composicao="100% algodão"
          largura="2,50 m, fio 40/1"
          products={products200}
          isLoading={loading200}
        />

        <KnowProducts />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
