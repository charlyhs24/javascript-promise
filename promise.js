const posts = [
    { 
        title : 'Post One', 
        body : 'this is post one'
    },
    { 
        title : 'Post Two', 
        body : 'this is post two'
    }
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else {
                reject('something went wrong');
            }
        },2000);
    })
}
// createPost({title : 'Post Three',body : 'this is post three'})
// .then(getPosts);

async function init(){
    await createPost({ title : 'Post Three', body: 'this is post three'});
    getPosts();
}
init();