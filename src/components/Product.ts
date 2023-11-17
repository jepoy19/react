export interface iProduct{
    id: string;
    productname: string;
    quantity: string;
    unit_price: string;
}
export enum PageEnum{
    list,
    add,
    edit,
}