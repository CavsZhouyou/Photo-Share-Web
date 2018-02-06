package com.photoshareweb.service;

import com.photoshareweb.dao.PhotoClassMapper;
import com.photoshareweb.entitys.PhotoClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("photoClassService")
public class PhotoClassService {

    @Autowired
    private PhotoClassMapper photoClassDao;

    public PhotoClass getPhotoClass(String id){
        PhotoClass className = photoClassDao.selectByPrimaryKey(id);
        return className;
    }

    public List<PhotoClass> getPhotoClassList(){
       List<PhotoClass> resultList = photoClassDao.getPhotoClassList();

       return resultList;
    }
}
