package com.paygo.domain.wallet.entity;

public enum TransactionHistoryType {
    CHARGE, // 충전
    BUY, // 구매
    REFUND, // 환불
    TRANSFER_IN, // 입금
    TRANSFER_OUT, // 출금
    SETTLEMENT // 정산
}
