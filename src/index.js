// const PageFlip = require('page-flip')
import { PageFlip } from "page-flip"


document.addEventListener("DOMContentLoaded",()=>{
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '7610dada3bmsh61f05a1a07c8822p1b4f32jsnfe2ddedeac0b',
// 		'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		text: 'After living abroad for such a long time, seeing my family was the best present I could have ever wished for.'
// 	})
// };

// fetch('https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/', options)
// .then((r)=>r.json())
// .then((json)=>console.log(json))
const pageFlip = new PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 550, // base page width
            height: 733, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );

    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });

    // triggered by page turning
    pageFlip.on("flip", (e) => {
        document.querySelector(".page-current").innerText = e.data + 1;
    });

    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });

    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });

})

