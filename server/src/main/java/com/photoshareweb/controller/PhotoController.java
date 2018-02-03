package com.photoshareweb.controller;

import com.photoshareweb.entitys.Photo;
import com.photoshareweb.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/share/photo")

public class PhotoController {

    @Autowired
    private PhotoService photoService;

    //通过分类获取图片列表接口
    @RequestMapping(value = "/getPhotoByClass",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getPhotoByClass(HttpServletRequest request, HttpServletResponse response){
        List<Photo> resultList = new ArrayList<Photo>();
        HashMap<String, Object> map = new HashMap<String, Object>();
        resultList = photoService.getPhotoByClass(request.getParameter("photoClass"));
        if(resultList!=null){
            map.put("success", true);
            map.put("photoList",resultList);
        }else{
            map.put("success", false);
        }
        return map;
    }

    //通过分类获取图片列表接口
    @RequestMapping(value = "/getPhotoByAccount",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getPhotoByAccount(HttpServletRequest request, HttpServletResponse response){
        List<Photo> resultList = new ArrayList<Photo>();
        HashMap<String, Object> map = new HashMap<String, Object>();
        resultList = photoService.getPhotoByAccount(request.getParameter("account"));
        if(resultList!=null){
            map.put("success", true);
            map.put("photoList",resultList);
        }else{
            map.put("success", false);
        }
        return map;
    }

    //通过ID获取图片接口
    @RequestMapping(value = "/getPhotoByID",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getPhotoByID(HttpServletRequest request, HttpServletResponse response){
        Photo result =photoService.getPhotoByID(Integer.parseInt(request.getParameter("id")));
        HashMap<String, Object> map = new HashMap<String, Object>();

        if(result!=null){
            map.put("success", true);
            map.put("photo",result);
        }else{
            map.put("success", false);
        }
        return map;
    }

    //通过ID获取图片接口
    @RequestMapping(value = "/deletePhotoByID",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> deletePhotoByID(HttpServletRequest request, HttpServletResponse response){
       photoService.deletePhotoByID(Integer.parseInt(request.getParameter("id")));
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("success", true);
        return map;
    }
}
