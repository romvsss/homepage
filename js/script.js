{
    const welcome = () => {
        console.log("siema siemano");
    }
    const removePicture = (button__remove) => {
        const picture = document.querySelector(".js-picture");
        picture.classList.toggle("js-picture--removed")
        picture.classList.contains("js-picture--removed") ? button__remove.innerText = "Przywróć fote!" : button__remove.innerText = "Usuń fote!"
    }
    const init = () => {
        welcome();
        const button__remove = document.querySelector(".js-button");

        button__remove.addEventListener("click", () => {
            removePicture(button__remove);
        }
        );
    }
    init();
}