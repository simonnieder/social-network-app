import java.util.UUID;

public class Post {
    private String title;
    private String text;
    private String author;
    private String id;

    public Post() {
    }

    public Post(String title, String text, String author, String id) {
        this.title = title;
        this.text = text;
        this.author = author;
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
