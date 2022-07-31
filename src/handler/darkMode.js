const html = document.querySelector('html');
const darkModer = (mode) => {
    localStorage.setItem("mode", mode);
    const myMode = localStorage.getItem('mode');
    html.className = myMode;
}

export default darkModer;