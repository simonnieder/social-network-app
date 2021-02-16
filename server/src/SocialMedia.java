import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Path("/users")
public class SocialMedia {
    private List<User> users = Collections.synchronizedList(new ArrayList<User>());

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
        ArrayList<Post> posts = new ArrayList<>();
        for (User u : users) {
            posts.addAll(u.getPosts());
        }
        Post[] postsArray = new Post[posts.size()];
        if (posts.isEmpty()) return Response.status(Response.Status.NOT_FOUND).build();
        return Response.status(Response.Status.OK).entity(posts.toArray(postsArray)).build();
    }

    @Path("/posts/{username}")
    @GET
    @Produces("application/json")
    public Response getPosts(@PathParam("username") String username) {
        ArrayList<Post> posts = new ArrayList<>();
        for (User u : users) {
            if (username.equals(u.getUsername())) {
                posts.addAll(u.getPosts());
                break;
            }
        }
        if (posts.isEmpty()) return Response.status(Response.Status.NOT_FOUND).build();
        Post[] postsArray = new Post[posts.size()];
        return Response.status(Response.Status.OK).entity(posts.toArray(postsArray)).build();
    }

    @Path("/posts/{username}")
    @POST
    @Consumes("application/json")
    public Response createPost(@PathParam("username") String username, Post post) {
        for (User u : users) {
            if (username.equals(u.getUsername())) {
                u.getPosts().add(post);
                return Response.status(Response.Status.CREATED).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

}
