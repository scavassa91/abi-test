export interface ProductProps {
    id: number,
    imageURL: string,
    name: string,
    pack: number,
    size: string,
    description: string,
    price: string,
    returnable: boolean,
    promo: string
};

export interface UpdateProduct {
    id: number,
    quantity: number
};

export interface Product extends ProductProps {
    quantity: number
};