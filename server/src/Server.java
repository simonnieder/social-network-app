import com.sun.net.httpserver.HttpServer;
import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.core.UriBuilder;
import java.net.URI;

class Server {
    private final static int port = 12345;
    private final static String host = "http://localhost/";

    public static void main(String[] args) {
        URI baseUri = UriBuilder.fromUri(host).port(port).build();
        ResourceConfig config = ResourceConfig.forApplication(new MyApplication());
        config.register(new CORSFilter());
        HttpServer server = JdkHttpServerFactory.createHttpServer(baseUri, config);
    }

}
