package com.paygo.domain.product.entity;

import com.paygo.domain.user.entity.User;
import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @Column(nullable = false)
    private String itemClassification;

    @Column(nullable = false, unique = true)
    private String productName;

    @Column(nullable = false)
    private Long stock;

    @Column(nullable = false, length = 20)
    private String itemBg;

    @Column(nullable = false, length = 30)
    private String itemText;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private IconName iconName;
}
