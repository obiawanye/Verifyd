const buttons = document.querySelectorAll(".filter");
const checks = document.querySelectorAll(".check-item");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.textContent.toLowerCase();

        checks.forEach(check => {

            if (filter === "all") {
                check.style.display = "block";
            }
            else if (check.dataset.status === filter) {
                check.style.display = "block";
            }
            else {
                check.style.display = "none";
            }

        });

    });

});