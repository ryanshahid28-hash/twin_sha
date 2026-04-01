document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // Move 1: Tennis Serve Strike
    // ----------------------------------------------------
    const btnTennis = document.getElementById("btn-tennis");
    btnTennis.addEventListener("click", () => {
        // Create the ball element
        const ball = document.createElement("div");
        ball.classList.add("tennis-ball");
        document.body.appendChild(ball);

        // Play animation
        ball.classList.add("animate-serve");

        // When animation ends
        ball.addEventListener("animationend", () => {
            ball.remove();
            
            // Select a random text element on the page
            const textElements = document.querySelectorAll("h1, h2, p, span, .btn");
            if (textElements.length > 0) {
                const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
                // Permanently apply transform: rotate(-15deg)
                randomElement.style.transform = "rotate(-15deg)";
            }
        });
    });

    // ----------------------------------------------------
    // Move 2: Short Circuit
    // ----------------------------------------------------
    const btnShortCircuit = document.getElementById("btn-short-circuit");
    btnShortCircuit.addEventListener("click", () => {
        document.body.classList.add("flicker");
        setTimeout(() => {
            document.body.classList.remove("flicker");
        }, 2000);
    });

    // ----------------------------------------------------
    // Move 3: Dismantle Gadget
    // ----------------------------------------------------
    const btnDismantle = document.getElementById("btn-dismantle");
    const mainHeader = document.getElementById("main-header");
    
    btnDismantle.addEventListener("click", () => {
        // Drop the header to the bottom of the viewport
        const headerRect = mainHeader.getBoundingClientRect();
        
        // Ensure header acts position absolute/fixed so it doesn't mess up layout when translated extremely 
        // Or simply translating it works normally with absolute values? Wait, CSS transition solves it.
        const dropDistance = window.innerHeight - headerRect.top + 200;
        mainHeader.style.transform = `translateY(${dropDistance}px) rotate(15deg)`;
        
        // Disable button to prevent spamming while dismantling
        btnDismantle.disabled = true;
        
        // Dynamically generate 10 screws
        for (let i = 0; i < 10; i++) {
            createScrew();
        }
    });

    function createScrew() {
        const screw = document.createElement("div");
        screw.classList.add("screw");
        
        // Random horizontal position
        const randomX = Math.random() * 90 + 5; // 5vw to 95vw
        screw.style.left = `${randomX}vw`;
        
        document.body.appendChild(screw);

        // Random duration between 1s and 2.5s
        const duration = Math.random() * 1500 + 1000;
        
        screw.animate([
            { transform: 'translateY(0) rotate(0deg)' },
            { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)` }
        ], {
            duration: duration,
            easing: 'ease-in'
        });

        // Remove element after animation
        setTimeout(() => {
            screw.remove();
        }, duration);
    }
});
