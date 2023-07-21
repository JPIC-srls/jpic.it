// document.getElementById("jaida").classList.remove("translate-x-full");

document.addEventListener("scroll", e => {
    const toolbar = document.getElementById("toolbar");
    if (window.scrollY !== 0) {
        toolbar.classList.remove("border-transparent");
        toolbar.classList.add("backdrop-blur-lg", "border-slate-800");
    } else {
        toolbar.classList.remove("backdrop-blur-lg", "border-slate-800");
        toolbar.classList.add("border-transparent");
    }
});