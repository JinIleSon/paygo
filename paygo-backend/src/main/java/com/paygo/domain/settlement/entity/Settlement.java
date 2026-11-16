package com.paygo.domain.settlement.entity;

import com.paygo.domain.order.entity.Order;
import com.paygo.domain.user.entity.User;
import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(
    name = "settlements",
    uniqueConstraints = @UniqueConstraint(columnNames = {"seller_id", "order_id"})
)
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Settlement extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private SettlementStatus settlementStatus;

    @Column(nullable = false)
    private Long saleAmount;

    @Column(nullable = false)
    private Long fee;

    @Column(nullable = false)
    private Long amount;

    private LocalDateTime settledAt;
}
