
document.querySelectorAll('.image_space img').forEach(img => {
    img.onclick = () => {
        console.log(img)
        document.querySelector('.pop_up').style.display = "block";
        document.querySelector('.pop_up img').src =img.getAttribute('src');
        document.querySelector('.pop_up .tool_bar a').href =img.getAttribute('src');
}}
);
document.querySelector('.pop_up span').onclick = function() {
    document.querySelector('.pop_up').style.display = "none";
}
