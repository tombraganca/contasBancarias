import { Banco } from './bancos'
export interface Conta{
    name: string;
    banco: Banco;
    nConta: string;
    agencia: string;
}
