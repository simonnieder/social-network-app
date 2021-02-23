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
    }
}