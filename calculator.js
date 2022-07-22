function topla(a, b) {
  return {
    functionName: "topla",
    result: a + b,
  };
}

function carp(a, b) {
  return {
    functionName: "carp",
    result: a * b,
  };
}

let resultArray = [topla(2, 3), carp(2, 3)];

let htmlRenderText = "Results:          ";
resultArray.forEach((element) => {
  htmlRenderText += element.functionName + ": " + element.result + "                 ";
});

document.getElementById("display").innerText = htmlRenderText;
