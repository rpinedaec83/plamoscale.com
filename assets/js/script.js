let data = [
    {
        nombre: "Aldo Perich",
        id:"aperich",
        redes:["https://www.instagram.com/gunpla_warrior_peru/"],
        img:[
            1,2,3,4,5,6,7,8,9,10,11,12,13,1,4,15,16
        ]
    },
    {
        nombre: "Cristian Luna",
        id:"cluna",
        redes:["https://www.instagram.com/cristhian_ls17","https://www.tiktok.com/@rayitothecat"],
        img:[
            23,24,25,26,27,28
        ]
    }
];

function shuffle(arr){
    arr.forEach((val, key) => {
        randomIndex = Math.ceil(Math.random()*(key + 1));
        arr[key] = arr[randomIndex];
        arr[randomIndex] = val;
      });
    return arr;
}

let arrShuffle = [];
let arrImg = []
data.forEach(element => {
    console.log(element.img)
    let imgs = element.img;
    imgs.forEach(datos => {
        let data = {
            img : datos,
            nombre:element.nombre,
            redes:element.redes,
            id:element.id
        }
        arrImg.push(data);
    });
});

arrShuffle = shuffle(arrImg);
console.log(arrShuffle)

/*
<article class="thumb">
				<a href="images/fulls/01.jpg" class="image"><img src="images/thumbs/01.jpg" alt="" /></a>
				<h2>Magna feugiat lorem</h2>
				<p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
			</article>
*/
let divMain = document.getElementById("main");
let strHtml="";
arrShuffle.forEach(element => {
    let strRedes = "";
    element.redes.forEach(red => {
        strRedes += `<a href="${red}" target="_blank">${red}</a><br>`
    });
    strHtml +=`<article class="thumb">
    <a href="images/${element.id}/fulls/${element.img}.jpg" class="image"><img src="images/${element.id}/thumbs/${element.img}.jpg" alt="" /></a>
    <h2>${element.nombre}</h2>
    <p>${strRedes}</p>
</article>`;
});

divMain.innerHTML = strHtml;
