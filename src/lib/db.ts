export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  images: string[];
  model_3d: string | null;
  stock: number;
  sku: string;
  created_at: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  user_id: string | null;
  session_id: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  total: number;
  status: string;
  created_at: string;
}

export type D1Database = {
  prepare(sql: string): {
    bind(...params: unknown[]): {
      first<T>(rows?: T): Promise<T | null>;
      all<T>(rows?: T): Promise<{ results: T[] }>;
      run(): Promise<{ success: boolean }>;
    };
  };
};

declare global {
  var __db: D1Database | undefined;
}

function getDb(env: Bindings): D1Database {
  if (process.env.NODE_ENV === "development") {
    if (!global.__db) {
      global.__db = env.DB as D1Database;
    }
    return global.__db;
  }
  return env.DB as D1Database;
}

export async function getProducts(env: Bindings, limit = 20, offset = 0): Promise<Product[]> {
  const db = getDb(env);
  const result = await db
    .prepare("SELECT * FROM products ORDER BY created_at DESC LIMIT ? OFFSET ?")
    .bind(limit, offset)
    .all<Product>();
  return result.results;
}

export async function getProductById(env: Bindings, id: string): Promise<Product | null> {
  const db = getDb(env);
  const result = await db.prepare("SELECT * FROM products WHERE id = ?").bind(id).first<Product>();
  return result;
}

export async function searchProducts(env: Bindings, query: string): Promise<Product[]> {
  const db = getDb(env);
  const result = await db
    .prepare("SELECT * FROM products WHERE name LIKE ? OR description LIKE ? LIMIT 20")
    .bind(`%${query}%`, `%${query}%`)
    .all<Product>();
  return result.results;
}

export async function getCartItems(env: Bindings, sessionId: string): Promise<(CartItem & { product: Product })[]> {
  const db = getDb(env);
  const result = await db
    .prepare(`
      SELECT ci.*, p.id as p_id, p.name, p.description, p.price, p.category, 
             p.brand, p.image, p.images, p.model_3d, p.stock, p.sku, p.created_at
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.session_id = ?
    `)
    .bind(sessionId)
    .all<CartItem & { product: Product }>();
  return result.results;
}

export async function addToCart(
  env: Bindings,
  productId: string,
  quantity: number,
  sessionId: string
): Promise<void> {
  const db = getDb(env);
  const existing = await db
    .prepare("SELECT * FROM cart_items WHERE product_id = ? AND session_id = ?")
    .bind(productId, sessionId)
    .first<CartItem>();

  if (existing) {
    await db
      .prepare("UPDATE cart_items SET quantity = quantity + ? WHERE id = ?")
      .bind(quantity, existing.id)
      .run();
  } else {
    const id = crypto.randomUUID();
    await db
      .prepare("INSERT INTO cart_items (id, product_id, quantity, session_id) VALUES (?, ?, ?, ?)")
      .bind(id, productId, quantity, sessionId)
      .run();
  }
}

export async function removeFromCart(env: Bindings, cartItemId: string): Promise<void> {
  const db = getDb(env);
  await db.prepare("DELETE FROM cart_items WHERE id = ?").bind(cartItemId).run();
}

export async function clearCart(env: Bindings, sessionId: string): Promise<void> {
  const db = getDb(env);
  await db.prepare("DELETE FROM cart_items WHERE session_id = ?").bind(sessionId).run();
}

export interface Bindings {
  DB: D1Database;
  PRODUCT_IMAGES: R2Bucket;
  AI: Ai;
  VECTORIZE: VectorizeIndex;
}

export type R2Bucket = {
  get(key: string): Promise<R2Object | null>;
  put(key: string, data: ArrayBuffer | string): Promise<R2Object>;
  delete(key: string): Promise<void>;
};

export type R2Object = {
  key: string;
  size: number;
  httpEtag: string;
  body: ReadableStream;
};

export type Ai = {
  run(model: string, options: { messages: { role: string; content: string }[] }): Promise<{
    response: string;
  }>;
};

export type VectorizeIndex = {
  query(vector: number[], options?: { topK?: number }): Promise<{
    matches: { id: string; score: number }[];
  }>;
  insert(vectors: { id: string; values: number[]; metadata?: Record<string, unknown> }[]): Promise<void>;
};
