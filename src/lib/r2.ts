import type { R2Bucket } from "./db";

export interface UploadResult {
  url: string;
  key: string;
}

export async function uploadProductImage(
  env: Bindings,
  file: File,
  productId: string
): Promise<UploadResult> {
  const bucket = env.PRODUCT_IMAGES;
  const key = `products/${productId}/${file.name}`;
  
  const arrayBuffer = await file.arrayBuffer();
  await bucket.put(key, arrayBuffer);
  
  return {
    url: `https://myzone-products.r2.cloudflarestorage.com/${key}`,
    key,
  };
}

export async function uploadModel3D(
  env: Bindings,
  file: File,
  productId: string
): Promise<UploadResult> {
  const bucket = env.PRODUCT_IMAGES;
  const key = `models/${productId}/${file.name}`;
  
  const arrayBuffer = await file.arrayBuffer();
  await bucket.put(key, arrayBuffer);
  
  return {
    url: `https://myzone-products.r2.cloudflarestorage.com/${key}`,
    key,
  };
}

export async function getProductImage(env: Bindings, key: string): Promise<string | null> {
  const bucket = env.PRODUCT_IMAGES;
  const object = await bucket.get(key);
  
  if (!object) return null;
  
  const url = `https://myzone-products.r2.cloudflarestorage.com/${key}`;
  return url;
}

export async function deleteProductFiles(env: Bindings, productId: string): Promise<void> {
  const bucket = env.PRODUCT_IMAGES;
  
  const productKey = `products/${productId}`;
  const modelKey = `models/${productId}`;
  
  await bucket.delete(productKey);
  await bucket.delete(modelKey);
}

export interface Bindings {
  PRODUCT_IMAGES: R2Bucket;
}
