import type { Wallet } from "../types/wallet";

export const userWallet : Wallet = {
    id: 1,
    userId: 'sonjinil', // PK이자 FK. user 테이블과 1:1
    walletNumber: 'PG-1234-5678-9012',
    balance: 3931000,
    minCharge: 10000,
    maxCharge: 2000000
}