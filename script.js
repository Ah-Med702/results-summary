let span1 = document.querySelector(".reaction .result span");
let span2 = document.querySelector(".memory .result span");
let span3 = document.querySelector(".verbal .result span");
let span4 = document.querySelector(".visual .result span");

let result = document.querySelector(".result .result-box span");

result.innerHTML = Math.round(
    ((+span1.innerHTML +
       +span2.innerHTML +
        +span3.innerHTML +
        +span4.innerHTML) /
        400) *
        100
);
