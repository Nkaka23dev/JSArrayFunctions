posts = [
    {title: "Post one", body: "This is a post One"},
    {title: "Post Two", body: "This is post Two"},
    
] 
function getPosts() {
    setTimeout(() => { 
        let output ='';
        posts.forEach((post, index) => {
            output += `<li>Title:   <b style="color: blue;">${post.title}</b></li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post, callback) {
    setTimeout(() => { 
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: "Post Three", body: "This is Post three."},getPosts)