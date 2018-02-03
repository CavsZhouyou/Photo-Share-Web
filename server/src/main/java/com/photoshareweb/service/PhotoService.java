package com.photoshareweb.service;

import com.photoshareweb.dao.PhotoMapper;
import com.photoshareweb.entitys.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("photoService")
public class PhotoService {

    @Autowired
    private PhotoMapper photoDao;

    public List<Photo> getPhotoByClass(String photoClass){
        List<Photo> resultList = new ArrayList<Photo>();;
        resultList = photoDao.selectByClass(photoClass);

        return resultList;
    }

    public List<Photo> getPhotoByAccount(String account){
        List<Photo> resultList = new ArrayList<Photo>();;
        resultList = photoDao.selectByAccount(account);

        return resultList;
    }

    public List<Photo> getPhotoByStatus(String status){
        List<Photo> resultList = new ArrayList<Photo>();;
        resultList = photoDao.selectByStatus(status);

        return resultList;
    }

    public  Photo getPhotoByID(int id){
        Photo result = photoDao.selectByPrimaryKey(id);
        return result;
    }

    public void deletePhotoByID(int id){
        photoDao.deleteByPrimaryKey(id);
    }
}
