let breadcrumb = document.getElementById("bread");

if (breadcrumb) {

    // read and get the number from URL.
    const params = new URLSearchParams(window.location.search);
    const chapterNO = params.get("number");

    // Add html from the JS.
            breadcrumb.innerHTML = `
                 <ol class="breadcrumb justify-content-center fs-5 ">
                        <li class="breadcrumb-item "><a href="./index.html" class="text-white">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Chapter: ${chapterNO}</li>
                    </ol>
            `
        
}   

// Html id address store in js
let container = document.getElementById("summary-detail");
const verseBox = document.getElementById("verseBox");
if (container) {

    // Reading , get and store the number from URL.
    const params = new URLSearchParams(window.location.search);
    const chapterNO = params.get("number");

    // Fetch chapter number from url, got the chapter number  
    fetch(`https://vedicscriptures.github.io/chapter/${chapterNO}`)
        .then(response => response.json())
        .then(async  data => {

            // Display Title details [html from js to chapter.html]
            container.innerHTML = `
                <div class="card w-100 text-center ">
                    <div class="card-body background ">
                        <h4 class="text-grey">
                            Chapter ${data.chapter_number} : ${data.transliteration}
                        </h4>
                        <span class="text-grey italic" >${data.meaning.en} ● </span>  <span class="text-grey italic">${data.verses_count} Verse </span>
                    </div>
                </div>

                <div class="fs-5 mt-5 text-justify letter-spacing">
                    ${data.summary.en}
                </div>
                    
            `;

            // display Verses
            verseBox.innerHTML = ""; 

            for (let i = 1; i <= data.verses_count; i++) {
                // fetching the verses from the chapter
                const response = await fetch(
                    `https://vedicscriptures.github.io/slok/${chapterNO}/${i}`
                );
                // Convert to JSON
                const verse = await response.json();

                // Add html from js to Chapter.html
                        verseBox.innerHTML += `

                          <div class="d-flex verseContent gap-5 "  onclick="GetVerseNo(${verse.chapter},${verse.verse})">
                                <div class="verseNo primary-text fs-5 ">
                                    Verse:${verse.verse}
                                </div>
                                <div class="verseSummary fs-5 text-justify">
                                    ${verse.siva.et}
                                </div>
                            </div>
                        `;
                    };})

        }

function GetVerseNo(ChapterNo, VerseNo) {
    window.location.href = `verse.html?chapter=${ChapterNo}&verse=${VerseNo}`;
}








