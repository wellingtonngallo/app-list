 
import React, { memo } from 'react';
import { useProductListModel } from './ProductList.model';
import { ItemList } from '../ItemList/ItemList';

export const ProductList = memo(({ products }) => {
  const { filteredProducts, handleSearch, handleSort, sortAsc, search  } = useProductListModel({ products });
  
  return (
    <>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={handleSort}>
        Ordenar por preço {sortAsc ? '↑' : '↓'}
      </button>
      {filteredProducts.length === 0 ? 
        <p>Nenhum produto encontrado</p> 
      : (
        <ul>
          {filteredProducts.map((product) => (
            <ItemList key={product.id} name={product.name} price={product.price}/>
          ))}
        </ul>
      )}
    </>
  );
});

 