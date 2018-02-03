import com.photoshareweb.dao.PhotoMapper;
import com.photoshareweb.entitys.Photo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class) //spring的单元测试
@ContextConfiguration("classpath:spring/spring-*.xml")//上下文配置
public class PhotoTest {

    @Autowired
    private PhotoMapper photoDao;


    @Test
    public void  testGetPhoto(){
        List<Photo> resultList = new ArrayList<Photo>();;
        resultList = photoDao.selectByAccount("yyc");

        for (Photo photo : resultList) {
            System.out.println(photo.getPhotourl());
        }
    }

    @Test
    public void testGetGetPhotoByID(){
        Photo result = photoDao.selectByPrimaryKey(1);
        System.out.println(result.getPhotourl());
    }

    @Test
    public void testUplataStatus(){
        Photo photo = new Photo();
        photo.setId(1);
        photo.setStatus("2");
       int result =  photoDao.updateStatusByID(photo);
       System.out.println(result);
    }
}
