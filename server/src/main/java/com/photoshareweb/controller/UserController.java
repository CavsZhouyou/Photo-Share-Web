package com.photoshareweb.controller;

import com.photoshareweb.entitys.User;
import com.photoshareweb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "/share/user")
public class UserController {

    @Autowired
    private UserService userService;

    //登录接口
    @RequestMapping(value="/login",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> login(@RequestBody User user){
        User result;
        HashMap<String, Object> map = new HashMap<String, Object>();
        result = userService.login(user);
        if(result!=null){
            map.put("success", true);
            map.put("user",result);
        }else{
            map.put("success", false);
        }
        return map;
    }

    //注册接口
    @RequestMapping(value = "/regist",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> regist(@RequestBody User user){
        User result;
        HashMap<String, Object> map = new HashMap<String, Object>();
        result = userService.login(user);
        if(result==null){
            userService.regist(user);
            map.put("success", true);
        }else{
            map.put("success", false);
            map.put("message", "用户名已被注册！");
        }
        return map;
    }

    //获取用户信息接口
    @RequestMapping(value = "/getSimpleUserByAccount",method = RequestMethod.POST)
    public  @ResponseBody Map<String, Object> getSimpleUserByAccount(@RequestBody User user) {
        User result;
        HashMap<String, Object> map = new HashMap<String, Object>();
        result = userService.getSimpleUserByAccount(user);
        if(result!=null){
            map.put("success", true);
            map.put("user",result);
        }else{
            map.put("success", false);
        }
        return map;
    }

}
