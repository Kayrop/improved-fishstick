const image = document.getElementById("image");
const button = document.getElementById("button");
const loadingBar = document.getElementById("loading-bar");
const text = document.getElementById("text");

let loading = false;

button.addEventListener("click", () => {
    if (!loading) {
        loading = true;

        image.classList.add("fade-out");
        button.style.opacity = 0;
        loadingBar.style.transform = "scaleX(1)";
        loadingBar.style.transition = "transform 5s linear";

        setTimeout(() => {
            loadingBar.style.transform = "scaleX(1)";
            loadingBar.style.transition = "transform 0.5s ease-out";
            setTimeout(() => {
                loadingBar.style.transform = "scaleX(0)";
                loadingBar.style.transition = "none";
                text.innerHTML = "Tout est en ordre !";
                text.style.opacity = 1;

                setTimeout(() => {
                    image.classList.remove("fade-out");
                    button.style.opacity = 1;
                    text.style.opacity = 0;
                    loadingBar.style.transform = "scaleX(0)";
                    loadingBar.style.transition = "transform 0s ease-out";
                    loading = false;
                }, 2000);
            }, 500);
        }, 5000);
    }
});
