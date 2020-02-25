import React, { FunctionComponent, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import Product from '../../containers/Product/Product';
import { ProductProps } from '../../containers/Product/ProductTypes';

import './ProductList.scss';

type ISortBy = "id" | "name" | "price" | "pack";

const ProductList: FunctionComponent = () => {
    const [isSortable, setIsSortable] = useState(true);
    const [sortBy, setSortBy] = useState<ISortBy>('id');
    const [products, setProducts] = useState<ProductProps[]>([
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
    ])

    const compareValues = (key: ISortBy) => {
        return function innerSort(prodA: ProductProps, prodB: ProductProps): number {
            if (!isSortable) {
                return 0;
            }
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
        setIsSortable(true);
        setSortBy(sortValue);
    };

    const reorder = (list: ProductProps[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result: DropResult): void => {
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }

        const newProducts = reorder(products, result.source.index, result.destination.index);

        setProducts(newProducts);
    };

    const onDragStart = (): void => {
        setIsSortable(false);
        setSortBy('id');
    }

    return (
        <div className="ProductList">
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
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <Droppable droppableId="dropable-1" type="PRODUCT" direction='horizontal'>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            className="products">
                            {
                                products
                                    .sort(compareValues(sortBy))
                                    .map((product, index) => (
                                        <Draggable key={product.id} draggableId={`product-${product.id}`} index={index} >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Product
                                                        key={product.id}
                                                        product={product} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))
                            }
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default ProductList;