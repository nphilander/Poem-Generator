function generatePoem(e) {
  e.preventDefault();

  let apiKey = "ob2cf76b441t303bab3624054158f86a";
  let prompt = "";
  let context = "";
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
