package com.paygo.domain.product.entity;

import com.paygo.global.common.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(
        name = "product_sizes",
        uniqueConstraints = @UniqueConstraint(columnNames = {"product_id", "size"})
)
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductSize extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Long size;
}
