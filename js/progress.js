function updateProgress() {

    const completed =
        JSON.parse(
            localStorage.getItem(
                "completedLessons"
            ) || "[]"
        );


    const total =
        roadmapModules.length;


    const count =
        completed.length;


    const percent =
        Math.round(
            (count / total) * 100
        );


    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const progressPercent =
        document.getElementById(
            "progressPercent"
        );


    const progressText =
        document.getElementById(
            "progressText"
        );


    if (progressBar) {

        progressBar.style.width =
            `${percent}%`;

    }


    if (progressPercent) {

        progressPercent.textContent =
            `${percent}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${count} / ${total} modules completed`;

    }

}


updateProgress();
