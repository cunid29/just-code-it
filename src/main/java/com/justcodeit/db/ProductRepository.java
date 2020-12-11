package com.justcodeit.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.justcodeit.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
