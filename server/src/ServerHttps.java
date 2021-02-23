
import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.ws.rs.core.UriBuilder;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.security.*;
import java.security.cert.CertificateException;

class  ServerHttps {
    private final static int port = 12345;
    private final static String host="https://localhost/";

    public static void main(String[] args) throws KeyStoreException, NoSuchAlgorithmException, IOException, CertificateException, UnrecoverableKeyException, KeyManagementException {
        SSLContext sslContext = SSLContext.getInstance("TLS");
        char[] keystorePassword = "password".toCharArray();
        KeyStore ks = KeyStore.getInstance("JKS");
        ks.load(new FileInputStream("server_keystore.ks"), keystorePassword);
        KeyManagerFactory kmf = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
        kmf.init(ks, keystorePassword);
        sslContext.init(kmf.getKeyManagers(), null, null);

        URI baseUri = UriBuilder.fromUri(host).port(port).build();
        ResourceConfig config = ResourceConfig.forApplication(new MyApplication());
        config.register(new CORSFilter());
        JdkHttpServerFactory.createHttpServer(baseUri, config ,sslContext);
    }

}
