package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor  // Generates a no-argument constructor
@AllArgsConstructor // Generates an all-arguments constructor
public class UserDTO {
    private int id;
    private String name;
    private String email;
    private String phone;
    // Add other fields as needed to mirror exposed data, e.g. email/phone, but keeping as originally minimal
}
