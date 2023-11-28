const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./DSC_7526.jpg",
        "author": {
            "name": "Riccardo Tieri",
            "image": "./DSC_5069.jpg"
        },
        "likes": 5,
        "created": "2021-03-05"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./DSC_5574.jpg",
        "author": {
            "name": "Riccardo Tieri",
            "image": "./DSC_5069.jpg"
        },
        "likes": 115,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./DSC_5574.jpg",
        "author": {
            "name": "Riccardo Tieri",
            "image": "./DSC_5069.jpg"
        },
        "likes": 95,
        "created": "2023-05-05"
    },

];

const container = document.getElementById('container');

posts.forEach((post) => {
    container.innerHTML += createPostFrom(post);
    if (post.author.image == null) {
        document.querySelector('.post-meta__icon-' + post.id).innerHTML = '';
        document.querySelector('.post-meta__icon-' + post.id).innerHTML = profilePicDefault(post.author.name);
    }
})

const likedPosts = [];

for (let i = 0; i < posts.length; i++) {
    let likeBtn = document.querySelector('a[data-postid="' + posts[i].id + '"]');
    let clicked = false;
    let likeCounter = document.querySelector('b#like-counter-' + [i]);
    likeCounter.innerHTML = i
    likeBtn.addEventListener('click', function () {
        if (!clicked) {
            likeBtn.classList.toggle('like-button--liked');
            clicked = true;
            likedPosts.push({ post_id: posts[i].id });
        } else {
            clicked = false;
        }
    })
}



// function

function createPostFrom(obj) {
    return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon-${obj.id}">
                    <img class="profile-pic" src="${obj.author.image}" alt="${obj.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${obj.author.name}</div>
                    <div class="post-meta__time">${obj.created.split("-").reverse().join("-")}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${obj.content}</div>
        <div class="post__image">
            <img src="${obj.media}" alt="${obj.author.name}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${obj.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${obj.id}" class="js-likes-counter">${obj.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
}


function profilePicDefault(userName) {
    let nameParts = userName.split(' ');
    let sign = nameParts[0].charAt(0) + nameParts[1].charAt(0);
    console.log(sign)
    return `
    <div class="profile-pic-default">
        <span>${sign}</span>
    </div>
    `
}