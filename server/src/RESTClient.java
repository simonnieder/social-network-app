import javax.ws.rs.client.*;
import javax.ws.rs.core.MediaType;

public class RESTClient {
    public static void main(String[] args) {
        System.getProperties().put("javax.net.ssl.trustStore", "client_truststore.ks"); //add location of the truststore needed for SSL to the properties
        System.getProperties().put("javax.net.ssl.trustStorePassword", "password"); //add trusstore password to properties
        Client client = ClientBuilder.newClient();
        WebTarget webTarget = client.target("https://localhost:12345/users");
        Invocation.Builder invocationPoster = webTarget.request(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
        for (int i=1;i<=100;++i){
            String r = invocationPoster.post(Entity.json(new User("user" + i)), String.class);
            System.out.println(r);
        }


//        Invocation.Builder invocationGetter = webTarget.request(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
//        Response response = invocationGetter.get();
//        System.out.println(response.readEntity(String.class));

//        WebTarget postPoster = client.target("http://localhost:12345/users/posts/" + "user1" );
//        Invocation.Builder invocationPost = postPoster.request(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
//        String rres = invocationPost.post(Entity.json(new Post("titel", "text"+ new Random().nextInt(1000))),String.class);
//        System.out.println(rres);
//
//        WebTarget getGeter = client.target("http://localhost:12345/users/posts/" );
//        Invocation.Builder getGetter = getGeter.request(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
//        Response rrres = getGetter.get();
//        System.out.println(rrres.readEntity(String.class));
//        User[] u = response.readEntity(User[].class);
//        for (User user:u
//             ) {
//            System.out.println(user);
//        }
    }
}