
    // DOM elements
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn = document.getElementById("reset");
    const label = document.getElementById("mylabel");

    // Initialize counter
    let count = 0;
    updateDisplay();

    // Event listeners
    increaseBtn.addEventListener("click", increaseCount);
    decreaseBtn.addEventListener("click", decreaseCount);
    resetBtn.addEventListener("click", resetCount);

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") increaseCount();
      if (e.key === "ArrowDown") decreaseCount();
      if (e.key === " ") resetCount();
    });

    // Functions
    function increaseCount() {
      count++;
      updateDisplay();
    }

    function decreaseCount() {
      count--;
      updateDisplay();
    }

    function resetCount() {
      count = 0;
      updateDisplay();
    }

    function updateDisplay() {
      label.textContent = count;
      
      // Visual feedback
      if (count > 0) {
        label.style.color = "#4CAF50";
      } else if (count < 0) {
        label.style.color = "#f44336";
      } else {
        label.style.color = "#2196F3";
      }
      
      // Animation effect
      label.style.transform = "scale(1.1)";
      setTimeout(() => {
        label.style.transform = "scale(1)";
      }, 100);
    }
  