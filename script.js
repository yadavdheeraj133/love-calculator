let alreadyCalculated = false;

function isValidName(name) {
  // Allow only letters and spaces (no digits or symbols)
  return /^[A-Za-z\s]+$/.test(name);
}

function calculateLove() {
  const name1Input = document.getElementById("name1");
  const name2Input = document.getElementById("name2");
  const resultDiv = document.getElementById("result");
  const button = document.querySelector("button");

  // Reload the page if already calculated
  if (alreadyCalculated) {
    window.location.reload();
    return;}

  const name1 = name1Input.value.trim();
  const name2 = name2Input.value.trim();

  resultDiv.classList.remove("show");
  resultDiv.innerHTML = "";

  // 🛑 Validation
  if (!name1 || !name2) {
    resultDiv.innerHTML = "⚠ Please enter both names.";
    resultDiv.classList.add("show");
    return;
  }

  if (!isValidName(name1) || !isValidName(name2)) {
    resultDiv.innerHTML = "❌ Names must only contain letters and spaces.";
    resultDiv.classList.add("show");
    return;
  }

  // Disable button to prevent spam
  button.disabled = true;
  button.innerText = "Calculating...";

  // ⏳ Delay for animation effect
  setTimeout(() => {
    const loveScore = Math.floor(Math.random() * 101); // 0-100
    let message = "";

    if (loveScore > 90) {
      message = "You're a perfect match! 💖";
    } else if (loveScore > 70) {
      message = "Strong chemistry! 💞";
    } else if (loveScore > 50) {
      message = "There's potential! 💘";
    } else if (loveScore > 30) {
      message = "Could work with effort 🤝";
    } else {
      message = "Better as friends 🤗";
    }

    resultDiv.innerHTML = `
      <strong>${name1}</strong> ❤ <strong>${name2}</strong><br>
      <span style="font-size: 24px;">${loveScore}%</span><br>
      <em>${message}</em>
    `;
    resultDiv.classList.add("show");

    // Enable reset on next click
    button.disabled = false;
    button.innerText = "Try Again 🔁";
    alreadyCalculated = true;
  }, 1000);
}