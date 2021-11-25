import { ItemVenda } from './item-venda';

export interface Venda {
    vendaId?: number;
    cliente: string,
    itens: any,
}