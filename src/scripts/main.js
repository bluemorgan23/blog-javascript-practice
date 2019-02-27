// 1. Use JavaScript to obtain a reference to the first section
//      with the class of article_header and change its text with the 
//      textContent property to "Welcome to the {insert your name here} blog"

const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Chris Morgan Blog";


// 2. Use JavaScript to obtain a reference to all article__header elements
//      and change their classList property value to article__header important.

const allHeaders = document.querySelectorAll(".article__header");

for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add("important");
}

// 3. Obtain a reference the element with a class of dashed and remove it.

const parent = document.querySelector(".article");
const child = document.querySelector(".dashed");
parent.removeChild(child);

// 4. Obtain a reference the element with a class of article_footer
//      and add the class of goldenrod it.

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");