import type { Wallet } from "../types/wallet";

export const userWallet : Wallet = {
    userId: 'sonjinil', // PK이자 FK. user 테이블과 1:1
    balance: 3842000,
    minCharge: 10000,
    maxCharge: 2000000
}