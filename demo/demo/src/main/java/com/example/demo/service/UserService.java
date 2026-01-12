package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional //For data transaction management

public class UserService {

    @Autowired // Dependency Injection
    private UserRepo userRepo; // Repository for User entity

    @Autowired
    private ModelMapper modelMapper; // For object mapping

    // Service methods will go here
    public List<UserDTO> findAllUsers(){
        List<User> usersList = userRepo.findAll(); // Fetch all users from the database
        return modelMapper.map(usersList, new TypeToken<List<UserDTO>>(){}.getType()); // Map List<User> to List<UserDTO>
    }

    //Adding a user
    public UserDTO addUser(UserDTO userDTO){

        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    //Updating a user
    public UserDTO updateUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO , User.class));
        return userDTO;
    }

    //Deleting a user first method
    public String deleteUser(UserDTO userDTO){
        userRepo.delete(modelMapper.map(userDTO , User.class));
        return "User Deleted";
    }

    //Delete a user by id second method
    public String deleteUserById(int id) {
        userRepo.deleteById(id);
        return "User Deleted by Id";
    }
}
