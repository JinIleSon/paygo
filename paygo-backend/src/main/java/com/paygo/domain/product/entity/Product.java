package com.paygo.domain.product.entity;

import com.paygo.domain.user.entity.User;
import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(
        name = "products",
        uniqueConstraints = @UniqueConstraint(columnNames = {"seller_id", "product_name"})
)
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @Column(nullable = false)
    private String itemClassification;

    @Column(nullable = false)
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

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String subjectMatter;

    @Column(nullable = false)
    private String origin;

    @Column(nullable = false)
    private LocalDate releaseDate;

    @Column(nullable = false, length = 100)
    private String deliveryInfo;

    @Column(nullable = false, length = 100)
    private String returnInfo;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Long originPrice;

    @Column(nullable = false)
    private Long discountPrice; // 할인된 판매가
}
