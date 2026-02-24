
async function fetchChapters() {
    try {
        const res = await fetch('https://vedicscriptures.github.io/chapters');
        const data = await res.json();

        let chapter = "";

        data.forEach(ch => {
            chapter += `
            <div class="col-4 chapterCard">
                <div class="card  h-100"             onclick="chapterNew(${ch.chapter_number})">
                        <div class="card-body">
                            <h5 class="card-title text-bold  fs-6 mb-4">Chapter:${ch.chapter_number}</h5>
                            <h6 class="card-subtitle  mb-2 fs-3  text-bold">${ch.transliteration}</h6>
                            <p class="card-text  w-100 mb-3 fs-6 ">
                            ${ch.summary.en.slice(0, 150)}...</p>
                            <span class="card-text-verse  w-100"> 
                                <i class="bi bi-list-ul"></i>
                                ${ch.verses_count} Verses
                            </span>
                            
                        </div>
                </div>
            </div>

            <div class="col-3 tiles ">
                <div class="card " onclick="chapterNew(${ch.chapter_number})">
                        <div class="card-body tilesBody">
                            <h5 class="card-title text-bold  fs-5 ">${ch.chapter_number}</h5>
                        </div>
                </div>
            </div>
        
    `;
        });

        document.getElementById("chapters").innerHTML = chapter;
    }
    catch (err) {

        console.log("Error fetching chapters:", err);
        document.getElementById("chapters").innerText += "Failed to load chapters.";
    }
}

fetchChapters();