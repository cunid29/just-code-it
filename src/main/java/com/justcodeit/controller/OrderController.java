package com.justcodeit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.justcodeit.model.Order;
import com.justcodeit.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;

	@GetMapping
	public List<Order> getAllOrders() {
		return orderService.getAll();
	}
	
	@PostMapping
	public ResponseEntity<Order> createOrder(@RequestBody Order order) {
		return ResponseEntity.ok(orderService.save(order));
	}
	
	@GetMapping("/{orderId}")
	public Order getOrder(@PathVariable Long orderId) throws Exception {
		return orderService.findOne(orderId);
	}

	@DeleteMapping("/{orderId}")
	public void deleteOrder(@PathVariable Long orderId) {
		orderService.delete(orderId);
	}
}
