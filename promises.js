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
function createPost(post) {
 return new Promise((resolve, reject) => {
    setTimeout(() => { 
        posts.push(post); 
        
        const error = false; 

        if(!error) {
            resolve()
        } else {
            reject("Error: Something went wrong.")
        }
        
    }, 2000); 
 }) 
}

createPost({title: "Post Three", body: "This is Post three."}).then(getPosts);