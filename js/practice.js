function showSolution() {

    const solution =
        document.getElementById("solution");


    solution.textContent =
`#include <stdio.h>

int main() {

    int number = 25;

    printf("%d", number);

    return 0;
}`;


    solution.classList.toggle("hidden");

}


function runCode() {

    const code =
        document.getElementById("codeEditor").value;

    const output =
        document.getElementById("output");


    if (
        code.includes(
            'printf("%d", number)'
        )
        &&
        code.includes(
            "int number = 25"
        )
    ) {

        output.textContent =
            "25\n\n✓ Program finished successfully.";

    }

    else {

        output.textContent =
            "Demo output:\n\n" +
            "This browser editor is ready.\n" +
            "Connect a real C compiler for actual execution.";

    }

}
