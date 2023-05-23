refactorEl = document.getElementById("1");
portfolioEl = document.getElementById("2");
passwordEl = document.getElementById("3");
quizEl = document.getElementById("4");
weatherel = document.getElementById("5");
sneezyEl = document.getElementById("6");
kitchenAlchemistEl = document.getElementById("7");


function goToRefactor() {
    window.location.href = "https://zed-csp.github.io/refactor-hw/";
}
function goToPortfolio() {
    window.location.href = "https://zed-csp.github.io/portfolio-Website/";
}
function goToPassword() {
    window.location.href = "https://zed-csp.github.io/password-generator/";
}
function goToQuiz() {
    window.location.href = "https://zed-csp.github.io/js-Timed-Quiz/";
}
function goToWeather() {
    window.location.href = "https://zed-csp.github.io/weather-dashboard/";
}
function goToSneezy() {
    console.log("test");
    window.location.href = "https://zed-csp.github.io/dangerForce-Proj-1/";
}
function goToKitchenAlchemist() {
    window.location.href = "https://kitchen-alchemy.herokuapp.com/";
}


refactorEl.addEventListener("click", goToRefactor);
portfolioEl.addEventListener("click", goToPortfolio);
passwordEl.addEventListener("click", goToPassword);
quizEl.addEventListener("click", goToQuiz);
weatherel.addEventListener("click", goToWeather);
sneezyEl.addEventListener("click", goToSneezy);
kitchenAlchemistEl.addEventListener("click", goToKitchenAlchemist);