import React, { memo } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

export const ItemList = memo(({ name, price }) => {
  return (
    <li>
      <strong>{name}</strong>: {formatCurrency(price)}
    </li>
  );
});
