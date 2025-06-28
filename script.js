let currentStep = 0;

window.toggleIngredients=function() {
  const ing = document.getElementById("ingredients");
  ing.style.display = ing.style.display === "none" ? "block" : "none";
};

window. toggleSteps=function() {
  const stepsContainer = document.getElementById("steps-container");
  stepsContainer.style.display = stepsContainer.style.display === "none" ? "block" : "none";
};

window.startCooking=function() {
  const steps = document.querySelectorAll(".step");
  const progressBar = document.getElementById("progressBar");

  if (currentStep < steps.length) {
    steps[currentStep].classList.add("active");
    currentStep++;
    progressBar.value = currentStep;
  } else {
    alert("All steps completed!");
  }
};