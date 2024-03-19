
const mainPart = document.querySelector(".mainPart");

async function getItem(){
    const response = await fetch("/data.json");
    const data = await response.json()

    return data;
}

async function printItem(){
    const data = await getItem();
    console.log(data);
     
        mainPart.innerHTML += 
        
        `
        <img class="mainPhoto" src="${data.mainPart.photo}" alt="">
            <div class= "mainTexts">
        <li class="mainTitle">${data.mainPart.title}</li>
        <div class="paragraphAndBtn">
        <li class="mainParagraph">${data.mainPart.paragraph}</li>
        <a href="#"> <li class="readMoreBtn">${data.mainPart.button}</li></a>
        </div>
            </div>
        `
}

printItem();


const sidePartCard = document.querySelector(".sidePartCard");

async function getSide(){
    const response = await fetch("/data.json");
    const news = await response.json();

    return news;
}

async function printSide(){
    const news = await getSide();
    console.log(news);

    for (const sideNews of news.sideNews) {
        sidePartCard.innerHTML += 
        
        `
        <div class="cardNews">
    <ul>
        <li class="sideHeaders">${sideNews.title}</li>
        <li class="sideParagraphs">${sideNews.paragraph}</li>
    </ul>
        
        
        </div>
        `
    }
}

printSide();


const bottomPart = document.querySelector(".bottomPart");

async function getBottom(){
    const response = await fetch("/data.json");
    const bottoms = await response.json();

    return bottoms;
}

async function printBottom(){
    const bottoms = await getBottom();
    console.log(bottoms);

    for (const bottomNew of bottoms.bottomNews ) {
        bottomPart.innerHTML += 
                
        `
          <div class="bottomNews">
          
          <div class="bottomImg">
          <img src="${bottomNew.photo}" alt="">
          </div>
          <ul>
            <li class="bottomNumbers">${bottomNew.number}</li>
            <li class="bottomTitle">${bottomNew.title}</li>
            <li class="bottomParagraph">${bottomNew.paragraph}</li>          
          </ul>
          
          
          </div>
        `
    }
}

printBottom();