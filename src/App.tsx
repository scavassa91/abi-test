import React, { FunctionComponent, useState } from 'react';
import './App.scss';
import Product from './containers/Product/Product';
import { ProductProps } from './containers/Product/ProductTypes';

type ISortBy = "id" | "name" | "price" | "pack";

const products: ProductProps[] = [
  {
    id: 1,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Modelo Negra',
    pack: 12,
    size: '33oz',
    description: 'Bottle',
    price: '32.00',
    returnable: false,
    promo: 'Buy 3, get 1 free.'
  },
  {
    id: 2,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Presidente Light',
    pack: 16,
    size: '300ml',
    description: 'Bottle',
    price: '43.00',
    returnable: true,
    promo: 'Buy 3, get 1 free Red Bull or 2 Pepsi Black.'
  },
  {
    id: 3,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Brahma Light very very light 33 Onz - Caja [12 Botellas]',
    pack: 16,
    size: '300ml',
    description: 'Bottle',
    price: '43.00',
    returnable: true,
    promo: 'For every 5 you buy, get up to 2 free.'
  },
  {
    id: 4,
    imageURL: 'https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png',
    name: 'Budweiser',
    pack: 16,
    size: '300ml',
    description: 'Bottle and extra long summary on multiple lines',
    price: '26.00',
    returnable: true,
    promo: 'For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black.'
  }
];

const App: FunctionComponent = () => {
  const [sortBy, setSortBy] = useState<ISortBy>('id');
  
  const compareValues = (key: ISortBy) => {
    return function innerSort(prodA: ProductProps, prodB: ProductProps): number {
      if (!prodA.hasOwnProperty(key) || !prodA.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      let comparison = 0;
      if (prodA[key] > prodB[key]) {
        comparison = 1;
      } else if (prodA[key] < prodB[key]) {
        comparison = -1;
      }

      return comparison;
    };
  };

  const onChangeSort = (sortValue: ISortBy): void => {
    setSortBy(sortValue);
  };

  return (
    <div className="App">
      <div className="sortItems">
        <button
          className={sortBy === 'name' ? 'button active' : 'button'}
          onClick={() => onChangeSort('name')}>Name</button>
        <button
          className={sortBy === 'pack' ? 'button active' : 'button'}
          onClick={() => onChangeSort('pack')}>Unit</button>
        <button
          className={sortBy === 'price' ? 'button active' : 'button'}
          onClick={() => onChangeSort('price')}>Price</button>
      </div>
      <div className="products">
      {
        products
          .sort(compareValues(sortBy))
          .map(product => (
            <Product
              key={product.id}
              product={product} />
          ))
      }
      </div>
    </div>
  );
}

export default App;
