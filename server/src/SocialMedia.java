import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Path("/users")
public class SocialMedia {
    private List<User> users = Collections.synchronizedList(new ArrayList<User>());
    private List<Post> posts = Collections.synchronizedList(new ArrayList<Post>());
    @GET    
    @Produces("application/json")
    public Response getUsers() {
        User[] userArray = new User[users.size()];
        System.out.println(users.toString());
        if (users.isEmpty()) return Response.status(Response.Status.NOT_FOUND).build();
        return Response.status(Response.Status.OK).entity(users.toArray(userArray)).build();
    }


    @Path("/{username}")
    @GET
    @Produces("application/json")
    public Response getUser(@PathParam("username") String userName) {
        for (User u : users) {
            if (userName.equals(u.getUsername())) {
                return Response.status(Response.Status.OK).entity(u).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @POST
    @Consumes("application/json")
    public Response postUser(User u) {
        for (User user :
                users) {
            if (u.getUsername().equals(user.getUsername())) {
                return Response.status(Response.Status.CONFLICT).build();
            }
        }
        users.add(u);
        return Response.status(Response.Status.CREATED).build();
    }

    @Path("/posts")
    @GET
    @Produces("application/json")
    public Response getAllPosts() {
        Post[] postsArray = new Post[posts.size()];
        if (posts.isEmpty()) return Response.status(Response.Status.NOT_FOUND).build();
        return Response.status(Response.Status.OK).entity(posts.toArray(postsArray)).build();
    }

    @Path("/posts/{username}")
    @GET
    @Produces("application/json")
    public Response getPosts(@PathParam("username") String username) {
        ArrayList<Post> userPosts = new ArrayList<>();
        for (Post p : posts) {
            if (p.getAuthor().equals(username)) {
                userPosts.add(p);
                break;
            }
        }
        if (userPosts.isEmpty()) return Response.status(Response.Status.NOT_FOUND).build();
        Post[] postsArray = new Post[userPosts.size()];
        return Response.status(Response.Status.OK).entity(userPosts.toArray(postsArray)).build();
    }

    @Path("/posts")
    @POST
    @Consumes("application/json")
    public Response createPost(Post post) {
        for (User u : users) {
            if (post.getAuthor().equals(u.getUsername())) {
                posts.add(post);
                return Response.status(Response.Status.CREATED).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

}
