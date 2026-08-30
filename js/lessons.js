const lessons = {

    "01": {

        module: "MODULE 01",

        title: "C Fundamentals",

        content: `

            <h3>What is C?</h3>

            <p>
                C is a general-purpose programming language
                designed for speed, portability and low-level
                memory control.
            </p>


            <h3>Your First C Program</h3>

            <pre>#include &lt;stdio.h&gt;

int main() {

    printf("Hello, C!");

    return 0;
}</pre>


            <h3>How it works</h3>

            <p>
                <code>#include</code> includes the standard
                input/output library.
            </p>

            <p>
                <code>main()</code> is where program execution
                begins.
            </p>

            <p>
                <code>printf()</code> displays text.
            </p>

            <p>
                <code>return 0</code> indicates successful
                program completion.
            </p>

        `
    },


    "02": {

        module: "MODULE 02",

        title: "Variables & Data Types",

        content: `

            <h3>Variables</h3>

            <p>
                A variable is a named memory location
                used to store data.
            </p>

            <pre>int age = 20;

float price = 99.5;

char grade = 'A';</pre>


            <h3>Common Data Types</h3>

            <p>
                int → whole numbers
            </p>

            <p>
                float → decimal numbers
            </p>

            <p>
                double → higher precision decimal numbers
            </p>

            <p>
                char → a single character
            </p>

        `
    },


    "03": {

        module: "MODULE 03",

        title: "Operators",

        content: `

            <h3>Arithmetic Operators</h3>

            <pre>
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulus
            </pre>


            <h3>Example</h3>

            <pre>int a = 10;
int b = 3;

printf("%d", a % b);</pre>

            <p>
                Output: 1
            </p>

        `
    },


    "04": {

        module: "MODULE 04",

        title: "Input & Output",

        content: `

            <h3>printf()</h3>

            <p>
                printf() is used to display output.
            </p>

            <pre>printf("Hello C");</pre>


            <h3>scanf()</h3>

            <p>
                scanf() is commonly used to receive
                formatted input.
            </p>

            <pre>int age;

scanf("%d", &amp;age);</pre>

        `
    },


    "05": {

        module: "MODULE 05",

        title: "Conditions",

        content: `

            <h3>if / else</h3>

            <pre>int number = 10;

if (number &gt; 0) {

    printf("Positive");

} else {

    printf("Not positive");
}</pre>

            <p>
                Conditions allow a program to make decisions.
            </p>

        `
    },


    "06": {

        module: "MODULE 06",

        title: "Loops",

        content: `

            <h3>for Loop</h3>

            <pre>for (int i = 1; i &lt;= 5; i++) {

    printf("%d ", i);

}</pre>

            <p>
                Loops repeat a block of code.
            </p>

        `
    },


    "07": {

        module: "MODULE 07",

        title: "Functions",

        content: `

            <h3>Creating a Function</h3>

            <pre>int add(int a, int b) {

    return a + b;

}</pre>

            <p>
                Functions make programs reusable
                and easier to organize.
            </p>

        `
    },


    "08": {

        module: "MODULE 08",

        title: "Arrays",

        content: `

            <h3>Array</h3>

            <pre>int marks[5] = {
    80, 75, 90, 65, 88
};

printf("%d", marks[0]);</pre>

            <p>
                Array indexing starts from zero.
            </p>

        `
    },


    "09": {

        module: "MODULE 09",

        title: "Strings",

        content: `

            <h3>String</h3>

            <pre>char name[30];

fgets(
    name,
    sizeof(name),
    stdin
);

printf("%s", name);</pre>

            <p>
                Strings are represented using arrays
                of characters.
            </p>

        `
    },


    "10": {

        module: "MODULE 10",

        title: "Pointers",

        content: `

            <h3>Pointer Basics</h3>

            <pre>int x = 10;

int *ptr = &amp;x;

printf("%d", *ptr);</pre>

            <p>
                The &amp; operator obtains an address.
            </p>

            <p>
                The * operator can dereference a pointer.
            </p>

        `
    },


    "11": {

        module: "MODULE 11",

        title: "Structures & Unions",

        content: `

            <h3>Structure</h3>

            <pre>struct Student {

    char name[30];

    int age;

};</pre>

            <p>
                Structures group related values of
                different types.
            </p>

        `
    },


    "12": {

        module: "MODULE 12",

        title: "Dynamic Memory",

        content: `

            <h3>malloc()</h3>

            <pre>int *ptr;

ptr = malloc(
    5 * sizeof(int)
);

if (ptr != NULL) {

    /* use memory */

    free(ptr);
}</pre>

            <p>
                Dynamically allocated memory should
                be released when it is no longer needed.
            </p>

        `
    },


    "13": {

        module: "MODULE 13",

        title: "File Handling",

        content: `

            <h3>Opening a File</h3>

            <pre>FILE *fp;

fp = fopen(
    "data.txt",
    "w"
);

if (fp != NULL) {

    fprintf(
        fp,
        "Hello File"
    );

    fclose(fp);
}</pre>

        `
    },


    "14": {

        module: "MODULE 14",

        title: "Advanced C",

        content: `

            <h3>Preprocessor</h3>

            <pre>#define PI 3.14159

#include &lt;stdio.h&gt;</pre>

            <p>
                Advanced C includes preprocessing,
                macros, headers, bit manipulation
                and command-line arguments.
            </p>

        `
    }

};


let currentLesson = null;


function openLesson(id) {

    const lesson = lessons[id];

    if (!lesson) return;


    currentLesson = id;


    document.getElementById("modalModule")
        .textContent = lesson.module;


    document.getElementById("modalTitle")
        .textContent = lesson.title;


    document.getElementById("modalBody")
        .innerHTML = lesson.content;


    document.getElementById("lessonModal")
        .classList.remove("hidden");


    document.body.style.overflow = "hidden";
}


function closeLesson() {

    document.getElementById("lessonModal")
        .classList.add("hidden");

    document.body.style.overflow = "";

}


function completeCurrentLesson() {

    if (!currentLesson) return;


    const completed =
        JSON.parse(
            localStorage.getItem(
                "completedLessons"
            ) || "[]"
        );


    if (!completed.includes(currentLesson)) {

        completed.push(currentLesson);

    }


    localStorage.setItem(
        "completedLessons",
        JSON.stringify(completed)
    );


    updateProgress();


    closeLesson();

}
