// REMOVE TWITTER ON LOAD

let asideBarContainers = document.getElementsByClassName("list-unstyled");

let altroList = asideBarContainers[1];

let liList = altroList.getElementsByTagName("li");

let twitterLi = liList[1];

liList.onload = twitterRemove()

function twitterRemove() {
    twitterLi.remove();
}


// REMOVE PARENT OF CONTINUA A LEGGERE

let contLeggereAnchor = document.querySelector("p.lead.mb-0 > a");
console.log(contLeggereAnchor);

let paragraphContLeggere = document.querySelector("p.lead.mb-0");


contLeggereAnchor.addEventListener("click", ()=>{
    paragraphContLeggere.remove();
})


// ALERT AUTHOR'S NAME

let anchorAuthors = document.querySelectorAll("p.blog-post-meta > a");
console.log(anchorAuthors);

for (let i =0; i < anchorAuthors.length; i++) {
    anchorAuthors[i].addEventListener("mouseover", ()=>{
        alert("Blog Post author is " + anchorAuthors[i].innerHTML);
    })
}

