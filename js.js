let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://boiling-refuge-66454.herokuapp.com/images', false);
xhr.send();
let imgArray = JSON.parse(xhr.response);


// let xhr2 = new XMLHttpRequest();
// xhr2.open('GET', 'https://boiling-refuge-66454.herokuapp.com/images/:imageId', false);
// xhr2.send();
// let imgArray2 = JSON.parse(xhr2.response);
// console.log(imgArray2);


let array_size = 3;
let sliced_array = [];

for (let j = 0; j < imgArray.length; j += array_size) {
    sliced_array.push(imgArray.slice(j, j + array_size));

}

 console.log(sliced_array);


let imgContainer = document.getElementById("img");   //див для рядов


    for (let a = 0; a < sliced_array.length; a++) {
        let row = document.createElement('div');  // ряд
        row.classList.add('row');
        imgContainer.appendChild(row);    //ряд в контейнер
        for (let i = 0; i < 3; i++) {
            let picture = document.createElement('img');  //создание картинки
            picture.classList.add('photo_mini');
            row.appendChild(picture);
            picture.src = sliced_array[a][i].url;
        }
    }


// Get the modal
let modal = document.getElementsByClassName('modal');
let close = document.getElementsByClassName('close');





// миниатюры фото
let minis = document.querySelectorAll('.photo_mini');

//приписываю id миниатюрам
for (let k = 0; k < minis.length; k++) {
    let a = minis[k];
    a.setAttribute('data-id', imgArray[k].id);
    console.log(a.dataset.id)

}

let addFullPhotoClick = function (index) {
    minis[index].addEventListener('click', function (i) {
         modal[0].style.display = "block";
        console.log(i.target);





        let min = i.target;
        let id = min.dataset.id;
        let urlTemplate = 'https://picsum.photos/id/';



            let picture_Big = document.createElement('img');  //создание большой картинки
            picture_Big.classList.add('photo_big');
            modal[0].prepend(picture_Big);
            picture_Big.src = urlTemplate + id + '/600/400';


        //закрыть модальное окно
        close[0].onclick = function() {
            modal[0].style.display = "none";
            picture_Big.remove();

        };





    });
};






for (let i = 0; i < minis.length; i++) {
    addFullPhotoClick(i);
}


