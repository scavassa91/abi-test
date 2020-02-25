import React, { FunctionComponent, useState, FunctionComponentElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { addProductAction, updateProductAction } from '../../actions/cartActions';

import { ProductProps } from './ProductTypes';
import { ReduxState } from '../../store/reduxStoreTypes';

import './Product.scss';
import RoundedButton from '../../components/RoundedButton/RoundedButton';

const Card: FunctionComponent<{product: ProductProps}> = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const products = useSelector((state: ReduxState) => state.cart.products);
    const dispatch = useDispatch();

    const onAddProduct = (): void => {
        dispatch(addProductAction({
            ...product,
            quantity
        }));
    };

    const onUpdateProduct = (): void => {
        dispatch(updateProductAction({
            id: product.id,
            quantity
        }));
    };

    const onRemoveHandle = (): void => {
        setQuantity((quantity) => quantity > 0 ? quantity - 1 : quantity);
    };

    const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setQuantity(parseInt(event.target.value) || 0);
    };

    const renderAddButton = (): FunctionComponentElement<{}> => {
        const found = products.find(reduxProduct => reduxProduct.id === product.id);
        if (found) {
            return (
                <button
                    type="button"
                    className="button squareBtn"
                    onClick={onUpdateProduct} disabled={quantity === found.quantity}>
                    {
                        quantity === found.quantity ?
                            <img className="checkImg" src={`${process.env.PUBLIC_URL}/assets/images/check.svg`} alt="ADDED" /> :
                            'UPDATE'
                    }
                </button>
            );
        }
        return <button className="button squareBtn" onClick={onAddProduct} disabled={quantity <= 0}>ADD</button>;
    }

    return (
        <div className="Product">
            <Link to={`/edit/${product.id}`}>
                <img className="editImg" alt="edit" src={`${process.env.PUBLIC_URL}/assets/images/edit.svg`} />
            </Link>
            <div className="productInformation">
                <img className="productImage" src={product.imageURL} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="productDescption">
                    {`${product.pack} Unit · ${product.size} ${product.description}`}
                    { product.returnable ? <img className="recycleImg" src={`${process.env.PUBLIC_URL}/assets/images/recycle.png`} alt="retornable" /> : null }
                </p>
                <p className="productPrice">
                    <strong>{`RD$${product.price}/Unit`}</strong>
                </p>
                <label className="productPromo">{product.promo}</label>
                <label className="productDetails"><a href="#">View details</a></label>
            </div>
            <div className="productButtons">
                <div>
                    <RoundedButton
                        className="remove"
                        label="-"
                        disabled={quantity === 0}
                        onClick={onRemoveHandle}
                    />
                    <input
                        type="number"
                        className="productQuantity"
                        onChange={onQuantityChange}
                        value={quantity}/>
                    <RoundedButton
                        className="add"
                        label="+"
                        onClick={() => setQuantity(quantity + 1)}
                    />
                </div>
                {renderAddButton()}
            </div>
        </div>
    );
};

export default React.memo(Card);