import { Banco } from './bancos'
export interface Conta{
    id: string;
    name: string;
    banco: Banco;
    nConta: string;
    agencia: string;
}
