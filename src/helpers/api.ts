import authKey from "./authGenerator";
import {Product} from "../types";

export const fetchIds = async (offset: number, limit: number) => {
  try {
    const body = {
      "action": "get_ids",
      "params": {offset, limit}
    }

    const response = await fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: {
        "X-Auth": authKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json()
    return data.result;
  } catch (error) {
    console.error('Error is:', error)
    throw error;
  }
}


export const fetchProducts = async (ids: string[]): Promise<Product[]> => {
  try {
    const response = await fetch('http://api.valantis.store:40000/', {
      method: 'POST',
      headers: {
        "X-Auth": authKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "action": "get_items",
        "params": {ids}
      })
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json()
    return data.result;
  } catch (error) {
    console.error('Error is:', error)
    throw error;
  }
}

