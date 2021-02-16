public class Post {
    private String title;
    private String text;
    private int likes;
    public Post() {
    }

    public Post(String title, String text) {
        this.title = title;
        this.text = text;
        this.likes = 0;
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
