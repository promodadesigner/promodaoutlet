import { drizzle } from "drizzle-orm/neon-http";
import { percalProducts } from "../drizzle/schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL environment variable is required");
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

const sampleProducts = [
  // Percal 150 fios
  {
    codigo: "PER-150-001",
    fios: 150,
    artigo: "936",
    composicao: "100% Algodão",
    largura: "2,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    codigo: "PER-150-002",
    fios: 150,
    artigo: "936",
    composicao: "100% Algodão",
    largura: "2,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    codigo: "PER-150-003",
    fios: 150,
    artigo: "936",
    composicao: "100% Algodão",
    largura: "2,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  // Percal 200 fios
  {
    codigo: "PER-200-001",
    fios: 200,
    artigo: "942",
    composicao: "100% Algodão",
    largura: "2,50 m, fio 40/1",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    codigo: "PER-200-002",
    fios: 200,
    artigo: "942",
    composicao: "100% Algodão",
    largura: "2,50 m, fio 40/1",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  // Tricoline (using fios 300 as category indicator)
  {
    codigo: "TRI-300-001",
    fios: 300,
    artigo: "801",
    composicao: "100% Algodão",
    largura: "1,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    codigo: "TRI-300-002",
    fios: 300,
    artigo: "801",
    composicao: "100% Algodão",
    largura: "1,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  // Sarja (using fios 400 as category indicator)
  {
    codigo: "SAR-400-001",
    fios: 400,
    artigo: "701",
    composicao: "100% Algodão",
    largura: "1,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
  {
    codigo: "SAR-400-002",
    fios: 400,
    artigo: "701",
    composicao: "100% Algodão",
    largura: "1,50 m",
    imagemUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  },
];

async function seed() {
  console.log("Seeding database with sample products...");

  try {
    for (const product of sampleProducts) {
      await db.insert(percalProducts).values(product);
      console.log(`Inserted: ${product.codigo}`);
    }
    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
