import {fetchIds, fetchProducts} from "./api";
import {Product} from "../types";

const PRODUCTS_PER_PAGE = 50;

const MAX_RETRIES_COUNT = 2;
export const getPaginatedProducts = async (page: number, limit = PRODUCTS_PER_PAGE) => {
  let tryCount = 1;
  let lastError;
  do {
    try {
      const ids = await fetchIds((page - 1) * PRODUCTS_PER_PAGE, limit);
      const products = await fetchProducts(ids);
      const uniqueProducts = products.reduce((result, product) => {
        if (!result[product.id]) {
          result[product.id] = product;
        }
        return result;
      }, {} as Record<string, Product>);
      return Object.values(uniqueProducts)
    } catch (e) {
      lastError = e;
      tryCount++
    }
  } while (tryCount <= MAX_RETRIES_COUNT);
  throw lastError;
}