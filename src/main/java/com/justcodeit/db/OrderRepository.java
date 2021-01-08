package com.justcodeit.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.justcodeit.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
