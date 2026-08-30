function startLearning() {

    document
        .getElementById("roadmap")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function openPractice() {

    document
        .getElementById("practice")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* THEME */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


themeBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("light");


        const isLight =
            document.body
                .classList
                .contains("light");


        themeBtn.textContent =
            isLight ? "☀" : "☾";


        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

    }
);


/* LOAD SAVED THEME */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "☀";

}


/* ESC CLOSE MODAL */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeLesson();

        }

    }
);
