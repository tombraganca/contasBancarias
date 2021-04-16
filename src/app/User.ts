import { Banco } from './bancos'
export interface Conta{
    id: number;
    name: string;
    banco: Banco;
    nConta: string;
    agencia: string;
}
