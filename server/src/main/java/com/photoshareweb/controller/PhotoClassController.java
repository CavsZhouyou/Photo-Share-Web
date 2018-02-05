package com.photoshareweb.controller;

import com.photoshareweb.entitys.PhotoClass;
import com.photoshareweb.service.PhotoClassService;
import com.photoshareweb.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "/PhotoShareWeb/share/photoClass")
public class PhotoClassController {

    @Autowired
    private PhotoClassService photoClassService;

    //获取图片分类接口
    @RequestMapping(value = "/getPhotoClass",method = RequestMethod.POST)
    public @ResponseBody
    Map<String, Object> getPhotoByClass(HttpServletRequest request, HttpServletResponse response){
        PhotoClass result = photoClassService.getPhotoClass(request.getParameter("id"));
        HashMap<String, Object> map = new HashMap<String, Object>();
        if(result!=null){
            map.put("success", true);
            map.put("photoClass",result);
        }else{
            map.put("success", false);
        }
        return map;

    }
}
