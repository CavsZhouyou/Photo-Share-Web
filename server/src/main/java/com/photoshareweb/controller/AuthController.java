package com.photoshareweb.controller;

import com.photoshareweb.common.Auth;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(value = "/PhotoShareWeb/share/auth")
public class AuthController {


    //通过七牛云上传凭证
    @RequestMapping(value = "/getUpToken",method = RequestMethod.GET)
    public @ResponseBody String getUpToken(){
        String accessKey = "MVorSHa-Ok1amT_F30IRN7grLQDub6Qw4nU9bjmb";
        String secretKey = "gyaLNjWt4XJUCHaFRRL5SH_vGY2Z0mdvRbjJaz1q";
        String bucket = "cavszhouyou";
        Auth auth = Auth.create(accessKey, secretKey);
        String upToken = auth.uploadToken(bucket);
        return upToken;
    }

}
