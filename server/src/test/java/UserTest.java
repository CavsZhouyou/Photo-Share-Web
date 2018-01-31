import com.photoshareweb.dao.UserMapper;
import com.photoshareweb.entitys.User;
import com.photoshareweb.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class) //spring的单元测试
@ContextConfiguration("classpath:spring/spring-*.xml")//上下文配置
public class UserTest {

    @Autowired
    private UserMapper userDao; //初始化Dao层，面向接口编程

    @Autowired
    private UserService userService;

    @Test
    public void  testLogin(){
        User user = new User();
        user.setAccount("root");
        user.setPassword("123456");
        User result = null; //受影响的行数默认为0
        result = userDao.hasAccount(user);
        System.out.println(result.getAccount());
    }
}
