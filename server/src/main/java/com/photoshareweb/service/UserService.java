package com.photoshareweb.service;

import com.photoshareweb.dao.UserMapper;
import com.photoshareweb.entitys.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService {

      @Autowired
      private UserMapper userDao;

      public User login(User user){
          User result = null;
          result = userDao.hasAccount(user);
          return result;
      }

      public void regist(User user){
          userDao.insertSelective(user);
      }

      public  User getSimpleUserByAccount(User user){
          User result = userDao.getSimpleUserByAccount(user);
          return  result;
      }

    public  User getUserByAccount(User user){
        User result = userDao.getUserByAccount(user);
        return  result;
    }
}
