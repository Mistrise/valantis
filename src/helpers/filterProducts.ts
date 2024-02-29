import {fetchFilteredIds, fetchProducts} from "./api";
import {Product} from "../types";

const MAX_RETRIES_COUNT = 2;
export const getFilteredProducts = async (filterRequest: {}) => {
    let tryCount = 1;
    let lastError;
    do {
        try {
            const ids = await fetchFilteredIds(filterRequest);
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