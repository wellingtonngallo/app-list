import { useState, useMemo, useCallback } from 'react';

export const useProductListModel = ({ products }) => {
  const [search, setSearch] = useState('');
	const [sortAsc, setSortAsc] = useState(true);

  const handleSearch = (value) => {
    setSearch(value);
  }

  const handleSort = () => {
    setSortAsc(!sortAsc)
  }
  

  const sortByPrice = useCallback((products) => {
    return [...products].sort((a, b) =>
      sortAsc ? a.price - b.price : b.price - a.price
    );
  }, [sortAsc]);

  
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
  
    const normalizedSearch = search.trim().toLowerCase();
  
    const filtered = normalizedSearch
      ? products.filter((product) =>
          product.name.toLowerCase().includes(normalizedSearch)
        )
      : products;
  
    return sortByPrice(filtered);
  }, [products, search, sortByPrice]);


  return {
    handleSearch,
    handleSort,
    filteredProducts,
    search,
    sortAsc
  }
}