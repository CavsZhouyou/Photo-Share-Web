import com.photoshareweb.common.Auth;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class) //spring的单元测试
@ContextConfiguration("classpath:spring/spring-*.xml")//上下文配置
public class AuthTest {

    @Test
    public void getUpToken(){
        String accessKey = "MVorSHa-Ok1amT_F30IRN7grLQDub6Qw4nU9bjmb";
        String secretKey = "gyaLNjWt4XJUCHaFRRL5SH_vGY2Z0mdvRbjJaz1q";
        String bucket = "photoshareweb";
        Auth auth = Auth.create(accessKey, secretKey);
        String upToken = auth.uploadToken(bucket);
        System.out.println(upToken);
    }
}
