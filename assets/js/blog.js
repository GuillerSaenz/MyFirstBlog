const userInformationDisplay = document.getElementById("userInformation");
const backButton = document.getElementById("back");

function backToStart(event){
    window.location.assign("index.html")
}

const blogPost = JSON.parse(localStorage.getItem("blog"));

const username = document.createElement("div");
username.textContent = blogPost.username;

const title = document.createElement("div");
title.textContent = blogPost.title;

const content = document.createElement("div");
content.textContent = blogPost.content;

userInformationDisplay.append(title, username, content);

backButton.addEventListener("click", backToStart)