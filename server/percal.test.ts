import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  getPercalProductsByFios: vi.fn(),
  getAllPercalProducts: vi.fn(),
}));

import * as db from "./db";

function createContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

const mockProducts = [
  {
    id: 1,
    codigo: "301",
    fios: 150,
    artigo: "936",
    composicao: "100% algodão",
    largura: "2,50 m",
    imagemUrl: "https://example.com/301.jpg",
  },
  {
    id: 2,
    codigo: "304",
    fios: 150,
    artigo: "936",
    composicao: "100% algodão",
    largura: "2,50 m",
    imagemUrl: "https://example.com/304.jpg",
  },
];

const mockProducts200 = [
  {
    id: 19,
    codigo: "4706",
    fios: 200,
    artigo: "942",
    composicao: "100% algodão",
    largura: "2,50 m, fio 40/1",
    imagemUrl: "https://example.com/4706.png",
  },
];

describe("percal.list", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns products filtered by fios=150", async () => {
    vi.mocked(db.getPercalProductsByFios).mockResolvedValue(mockProducts);

    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.percal.list({ fios: 150 });

    expect(db.getPercalProductsByFios).toHaveBeenCalledWith(150);
    expect(result).toEqual(mockProducts);
    expect(result).toHaveLength(2);
  });

  it("returns products filtered by fios=200", async () => {
    vi.mocked(db.getPercalProductsByFios).mockResolvedValue(mockProducts200);

    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.percal.list({ fios: 200 });

    expect(db.getPercalProductsByFios).toHaveBeenCalledWith(200);
    expect(result).toEqual(mockProducts200);
    expect(result).toHaveLength(1);
  });

  it("returns all products when fios is not provided", async () => {
    const allProducts = [...mockProducts, ...mockProducts200];
    vi.mocked(db.getAllPercalProducts).mockResolvedValue(allProducts);

    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.percal.list({});

    expect(db.getAllPercalProducts).toHaveBeenCalled();
    expect(result).toHaveLength(3);
  });

  it("returns all products when input is empty", async () => {
    vi.mocked(db.getAllPercalProducts).mockResolvedValue([]);

    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.percal.list({});

    expect(db.getAllPercalProducts).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
