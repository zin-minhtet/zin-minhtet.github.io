const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/luffy.jpg") {
        myImage.setAttribute("src", "images/nika.jpg");
    } else {
        myImage.setAttribute("src", "images/luffy.jpg");
    }
};

const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
