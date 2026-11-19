package com.paygo.domain.product.entity;

import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "product_color_sets")
public class ProductColorSet extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String bg;
}
