import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@XmlRootElement
public class User {
    private String username;
    private String password;
    private List<Post> posts = Collections.synchronizedList(new ArrayList<Post>());

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String username) {
        this.username = username;
        this.password = "password";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Post> getPosts() {
        return posts;
    }
    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", posts=" + posts +
                '}';
    }
}
