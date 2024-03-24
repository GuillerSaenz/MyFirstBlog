const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit")

function createAndRenderBlog(event){
    event.preventDefault();
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    //const blogs = localStorage.getItem('blogs');
   // blogs.push(blog);
    localStorage.setItem('blog', JSON.stringify(blog));
    window.location.assign("blog.html")
}

submitButton.addEventListener("click", createAndRenderBlog)