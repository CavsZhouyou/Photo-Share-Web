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

    @RequestMapping(value = "/getPhotoByClass",method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> getPhotoByClass(HttpServletRequest request, HttpServletResponse response){
        List<Photo> resultList = new ArrayList<Photo>();
        HashMap<String, Object> map = new HashMap<String, Object>();
        resultList = photoService.getPhotoByClass(request.getParameter("photoclass"));
        if(resultList!=null){
            map.put("success", true);
            map.put("photoList",resultList);
        }else{
            map.put("success", false);
        }
        return map;

    }
}
