
// shlok stored & run with setinterval one by one. 
let shlok = [

    "Perform your duty without attachment to results. When actions are done selflessly, they purify the mind and lead toward inner freedom.",
    "The soul is eternal and cannot be destroyed. The body may perish, but the true self is beyond birth, death, and change.",
    "Those who worship the Divine with faith and love are protected and guided. Pure devotion brings the soul closer to the Supreme..",
    "True knowledge removes ignorance and reveals the unity of all beings. Wisdom leads one to see the same Divine presence everywhere.",
    "A restless mind can be disciplined through practice and detachment. Mastery over the mind leads to peace and clarity."
]

let index = 0;

function showSlok() {
    document.getElementById("shlokbox").innerText = shlok[index];
    index++;

    if (index >= shlok.length) {
        index = 0;
    }
}


showSlok();
setInterval(showSlok, 5000);



//  the chapters
async function fetchChapters() {
    try
    {
        const res = await fetch('https://vedicscriptures.github.io/chapters');
        const data = await res.json();

        let chapter = "";

        data.forEach(ch => {
            chapter += `
            <div class="col-4 chapterCard">
                <div class="card  h-100"             onclick="chapterNew(${ch. chapter_number})">
                        <div class="card-body">
                            <h5 class="card-title text-bold  fs-6 mb-4">Chapter:${ch.chapter_number}</h5>
                            <h6 class="card-subtitle  mb-2 fs-4  text-bold">${ch.transliteration}</h6>
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
    catch(err)
    {

        console.log("Error fetching chapters:",err);
        document.getElementById("chapters").innerText += "Failed to load chapters.";
    }
}

fetchChapters();



function chapterNew(chapterNO) {

    window.location.href = `chapter.html?number=${chapterNO}`;
}





let form = document.getElementById("myform");

form.addEventListener("submit", function (e) {

    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;

    let user = {
        name: name,
        email: mail
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));   
    alert("Subscribed Successfully!");
    form.reset();
    
});