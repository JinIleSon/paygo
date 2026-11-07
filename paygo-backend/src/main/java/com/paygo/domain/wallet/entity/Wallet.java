package com.paygo.domain.wallet.entity;

import com.paygo.domain.user.entity.User;
import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "wallets")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Wallet extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(nullable = false, unique = true, length = 30)
    private String walletNumber;

    @Column(nullable = false)
    private Long balance;

    @Column(nullable = false)
    private Long minCharge;

    @Column(nullable = false)
    private Long maxCharge;

    @Version
    private Long version; // 낙관적 락 버전
}
