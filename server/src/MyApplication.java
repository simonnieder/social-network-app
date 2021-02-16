import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/")
public class MyApplication extends Application {
    SocialMedia socialMedia = new SocialMedia();
    @Override
    public Set<Object> getSingletons() {
        HashSet<Object> h = new HashSet<>();
        h.add(socialMedia);
        return h;
    }
}