const roadmapModules = [

    {
        id: "01",
        title: "C Fundamentals",
        description:
            "Introduction, history, syntax, compiler and your first C program."
    },

    {
        id: "02",
        title: "Variables & Data Types",
        description:
            "Variables, constants, int, float, double, char and type casting."
    },

    {
        id: "03",
        title: "Operators",
        description:
            "Arithmetic, relational, logical, assignment and bitwise operators."
    },

    {
        id: "04",
        title: "Input & Output",
        description:
            "printf, scanf, getchar, putchar, fgets and puts."
    },

    {
        id: "05",
        title: "Conditions",
        description:
            "if, else, else-if, nested if and switch statements."
    },

    {
        id: "06",
        title: "Loops",
        description:
            "for, while, do-while, nested loops, break and continue."
    },

    {
        id: "07",
        title: "Functions",
        description:
            "Functions, parameters, return values, scope and recursion."
    },

    {
        id: "08",
        title: "Arrays",
        description:
            "1D arrays, 2D arrays, searching, sorting and matrices."
    },

    {
        id: "09",
        title: "Strings",
        description:
            "Character arrays and common string manipulation functions."
    },

    {
        id: "10",
        title: "Pointers",
        description:
            "Addresses, dereferencing, pointer arithmetic and pointer relationships."
    },

    {
        id: "11",
        title: "Structures & Unions",
        description:
            "struct, union, enum, typedef and structure pointers."
    },

    {
        id: "12",
        title: "Dynamic Memory",
        description:
            "malloc, calloc, realloc, free and memory management."
    },

    {
        id: "13",
        title: "File Handling",
        description:
            "Create, read, write, append and manage files in C."
    },

    {
        id: "14",
        title: "Advanced C",
        description:
            "Preprocessor, macros, headers, bit manipulation and command-line arguments."
    }

];


function renderRoadmap(list = roadmapModules) {

    const container =
        document.getElementById("roadmapContainer");

    if (!container) return;


    if (list.length === 0) {

        container.innerHTML = `
            <div class="roadmap-item">
                <div></div>

                <div>
                    <h3>No topic found</h3>
                    <p>Try another search.</p>
                </div>

                <div></div>
            </div>
        `;

        return;
    }


    container.innerHTML =
        list.map(module => `

            <article
                class="roadmap-item"
                onclick="openLesson('${module.id}')">

                <div class="roadmap-number">
                    ${module.id}
                </div>

                <div>

                    <h3>
                        ${module.title}
                    </h3>

                    <p>
                        ${module.description}
                    </p>

                </div>

                <div class="roadmap-arrow">
                    →
                </div>

            </article>

        `).join("");
}


renderRoadmap();
