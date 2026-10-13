const chapterLinks = document.querySelectorAll(
    '.card .front a[href^="Chapter"], .card .back a[href^="Chapter"]'
);

    chapterLinks.forEach(chapterLink => {
        chapterLink.addEventListener("click", event => {
            event.preventDefault();
            const transition = document.createElement("div");
            transition.className = "page-transition";
            document.body.appendChild(transition);

            const groups = [
                [2, 24, 49, 73, 90],
                [6, 29, 53, 76, 90],
                [3, 25, 50, 74, 90],
                [1, 24, 49, 74, 90],
                [4, 27, 52, 76, 90],
                [7, 31, 56, 78, 90]
            ];

            groups.forEach((positions, groupIndex) => {
                setTimeout(() => {
                    positions.forEach(topPosition => {
                        const person = document.createElement("div");
                        person.className = "transition-person";
                        person.setAttribute("aria-hidden", "true");
                        person.style.setProperty("--transition-top", `${topPosition}%`);
                        person.innerHTML = `
                            <span class="head"></span>
                            <span class="body"></span>
                            <span class="arm"></span>
                            <span class="leg leg-front"></span>
                            <span class="leg leg-back"></span>
                        `;
                        transition.appendChild(person);
                    });
                }, groupIndex * 250 + 1200);
            });

            const addTitle = () => {
                const title = document.createElement("div");
                title.className = "transition-title transition-title-travel";
                if (chapterLink.getAttribute("href") === "Chapter2.html") {
                    title.classList.add("chapter-two-title");
                    title.innerHTML = `
                        <span class="title-line">PROBLEMS CAUSED</span>
                        <span class="title-line">BY CROWDING</span>
                    `;
                } else if (chapterLink.getAttribute("href") === "Chapter3.html") {
                    title.innerHTML = `
                        <span class="title-line">METHODOLOGY AND</span>
                        <br>
                        <span class="title-line">URBAN DESIGN</span>
                    `;
                } else {
                    title.innerHTML = `<span class="title-line">WHY NYC'S SO CROWDED?</span>`;
                }
                transition.appendChild(title);
            };

            addTitle();

            setTimeout(() => {
                window.location.href = chapterLink.href;
            }, 7100);
        });
    });
