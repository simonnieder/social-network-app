import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

@Path("/users")
public class SocialMedia {
    private List<User> users = Collections.synchronizedList(new ArrayList<User>());
    private List<Post> posts = Collections.synchronizedList(new ArrayList<Post>());
    private ConcurrentHashMap<Post, List<String>> likes = new ConcurrentHashMap<>();

    public  SocialMedia() {
        try (BufferedReader br = new BufferedReader(new FileReader("defaultUsers.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                users.add(new User(values[0], values[1]));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        try (BufferedReader br = new BufferedReader(new FileReader("defaultPosts.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                posts.add(new Post(values[0], values[1], values[2], values[3]));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    @GET
    @Produces("application/json")
    public Response getUsers() {
        User[] userArray = new User[users.size()];
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

    @Path("/{username}")
    @Consumes("application/json")
    @Produces("application/json")
    @DELETE
    public Response deleteUser(@PathParam("username") String username) {
        for (User user :
                users) {
            if (username.equals(user.getUsername())) {
                users.remove(user);
                posts.removeIf(p -> p.getAuthor().equals(username));
                return Response.status(Response.Status.OK).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @Path("/posts")
    @GET
    @Produces("application/json")
    public Response getAllPosts() {
        Post[] postsArray = new Post[posts.size()];
        if (posts.isEmpty()) return Response.status(Response.Status.NO_CONTENT).build();
        return Response.status(Response.Status.OK).entity(posts.toArray(postsArray)).build();
    }

    @Path("/posts")
    @PUT
    @Consumes("application/json")
    public Response editPost(Post newPost) {
        for (Post p : posts) {
            if(p.getId().equals(newPost.getId())) {
                posts.set(posts.indexOf(p), newPost);
                return Response.status(Response.Status.OK).build();
            }
        }
       return Response.status(Response.Status.NOT_FOUND).build();
    }

    @Path("/posts/{username}")
    @GET
    @Produces("application/json")
    public Response getPosts(@PathParam("username") String username) {
        ArrayList<Post> userPosts = new ArrayList<>();
        for (Post p : posts) {
            if (p.getAuthor().equals(username)) {
                userPosts.add(p);
            }
        }
        if (userPosts.isEmpty()) return Response.status(Response.Status.NO_CONTENT).build();
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

    @Path("/posts/{id}")
    @DELETE
    public Response deletePost(@PathParam("id") String id) {
        for (Post p :
                posts) {
            if (id.equals(p.getId())) {
                posts.remove(p);
                return Response.status(Response.Status.OK).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }
}
