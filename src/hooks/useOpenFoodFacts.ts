import { useState } from "react";
import type { FoodResult } from "../types";

export function useOpenFoodFacts() {
  const [results, setResults] = useState<FoodResult[]>([])
  const [loading, setLoading] = useState(false)

  async function search(searchTerm: string) {
    // ton fetch ici
    // setLoading(true) avant le fetch
    // setLoading(false) après
    // setResults avec les données
    setLoading(true);
    try {
    const reponse = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=true&fields=product_name,nutriments&action=process`); 
    const data = await reponse.json();
    setResults(data.product || [])
    } catch (error) {
        console.error(error)
    } finally {
    setLoading(false);
    }
    
  }

  return { results, loading, search }
}