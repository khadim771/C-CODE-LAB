const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                renderRoadmap();

                return;

            }


            const results =
                roadmapModules.filter(
                    module =>

                        module.title
                            .toLowerCase()
                            .includes(query)

                        ||

                        module.description
                            .toLowerCase()
                            .includes(query)

                );


            renderRoadmap(results);

        }
    );

}
