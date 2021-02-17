public class Post {
    private String title;
    private String text;
    private int likes;
    private String author;
    public Post() {
    }

    public Post(String title, String text, String author) {
        this.title = title;
        this.text = text;
        this.author = author;
        this.likes = 0;
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

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
