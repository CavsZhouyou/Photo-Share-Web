import com.photoshareweb.dao.PhotoClassMapper;
import com.photoshareweb.entitys.PhotoClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class) //spring的单元测试
@ContextConfiguration("classpath:spring/spring-*.xml")//上下文配置
public class PhotoClassTest {

    @Autowired
    private PhotoClassMapper photoClassMapperDao;

    @Test
    public void getPhotoClass(){
        List<PhotoClass> resultList = photoClassMapperDao.getPhotoClassList();
        for (PhotoClass photoClass : resultList) {
            System.out.println(photoClass.getClassname());
        }
    }
}
