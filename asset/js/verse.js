let versebread = document.getElementById("versebread");
if (versebread) {

    // read and get the number from URL.
    const params = new URLSearchParams(window.location.search);
    const chapterNO = params.get("chapter");
    const VerseNo = params.get("verse");

    console.log(VerseNo);

    versebread.innerHTML = `
                 <ol class="breadcrumb justify-content-center fs-5 ">
                        <li class="breadcrumb-item "><a href="./index.html" class="text-white">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page"><a href="chapter.html?number=${chapterNO}" class="text-white">Chapter ${chapterNO}</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Verse: ${VerseNo}</li>
                    </ol>
            `

}

const verseContentBox = document.getElementById("verseSlok");

if (verseContentBox) {
    const params = new URLSearchParams(window.location.search);
    const verseNum = params.get("verse");
    const chapterNO = params.get("chapter");

    fetch(`https://vedicscriptures.github.io/slok/${chapterNO}/${verseNum}/`)
        .then(response => response.json())
        .then(slok => {


            verseContentBox.innerHTML = `


                <div class="card  text-center mt-5   ">
                    <div class=" w-auto background ">
                        <h4 class="text-grey verse-title">
                            Bhagavad Gita |  chapter: ${slok.chapter} | Verse: ${slok.verse}
                        </h4>
                      
                    </div>
                </div>
                <div class="card slokSummary">
                    <div class="card-body">                
                        <p class="card-text fs-5 mt-5  letter-spacing primary-text">
                              ${slok.slok}
                        </p>
                        <p class="card-text fs-5 mt-5  letter-spacing text-grey">
                        ${slok.transliteration}
                        </p>  
                    </div>
                </div>
             
                
            `;
        })
}
