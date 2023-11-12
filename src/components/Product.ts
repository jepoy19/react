export interface iProducts {
    id: string;
    productname: string;
    quantity: string;
    unit_price: string;
}

export const sampleProducts: iProducts[] = [
    {
        id: new Date().toJSON().toString(),
        productname: "Product 1",
        quantity: "20",
        unit_price: "50000",
    },
    {
        id: new Date().toJSON().toString(),
        productname: "Product 2",
        quantity: "20",
        unit_price: "50000",
    }
]

export enum PageEnum{
    list,
    add,
    edit,
}