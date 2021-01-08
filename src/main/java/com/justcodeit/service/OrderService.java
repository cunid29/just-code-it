package com.justcodeit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.justcodeit.db.OrderRepository;
import com.justcodeit.model.Order;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAll() {
		return orderRepository.findAll();
	}

	public Order findOne(Long orderId) throws Exception {
		return orderRepository.findById(orderId)
				.orElseThrow(() -> new Exception("Order not found, id: " + orderId));
	}

	public Order save(Order order) {
		return orderRepository.save(order);
	}

	public void delete(Long orderId) {
		orderRepository.deleteById(orderId);
	}
	
}
