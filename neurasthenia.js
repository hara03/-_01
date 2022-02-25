var card_box, card_img,images;

function back(){
  for( i = 0; i < 52; i++){
    card_box = document.getElementsByClassName("card_box");
    card_img = document.createElement("img");
    card_img.src ="card_img/card_back.png";
    card_img.alt ="";
    card_box[i].appendChild(card_img);
  }
  image_random();
}
back();

function image_random(){
  images = [];

  for(var m = 0; m < 4; m++){
    var n = ["club_","diamond_","heart_","spade_"];
    for(var o = 1; o < 14 ; o++){
        if(o < 10){
            var p = "0" + o;
        }else{
            p = o;
        }
        var q = "card_img/card_" + n[m] + p + ".png";
        images.push(q)
      }
}
//確認用　console.log(images);

  for(var j = 0; j < images.length; j++){
    var k = Math.floor(Math.random() * images.length);
    var random_box = images[j];
    images[j] = images[k];
    images[k] = random_box;

  }
  /*for( i = 0; i < 52; i++){
    card_box = document.getElementsByClassName("card_box"),
    card_img = document.createElement("img");
    card_img.src =images[i];
    card_img.alt ="";
    card_box[i].appendChild(card_img);
  }
  配列を入れ替えた後ランダムに表示できているかの確認用*/
}

var count = 0;
var card1,card2;
function turn_over(l){
  //同じ画像を２回押した場合何も処理しないように  
  if(count ==1 && card1 == l){
  }else{
    count += 1;
    card_box[l].innerHTML = "";
    card_img = document.createElement("img");
    card_img.src =images[l];
    card_img.alt ="";
    card_box[l].appendChild(card_img);
    if(count == 2){
      card2 = l;
      judge(card1, card2);
    }else if(count == 1){
      card1 = l; 
    }
  } 
}

function judge(ca1, ca2){
  slice_ca1 = images[ca1].slice(-6);
  slice_ca2 = images[ca2].slice(-6);
  //確認用　console.log(slice_ca1);
  //確認用　console.log(slice_ca2);
  if(slice_ca1 == slice_ca2){
    setTimeout(function(){
      card_box[ca1].innerHTML = "";
      card_box[ca2].innerHTML = "";
    },1000);
    card_box[ca1].removeAttribute("onclick");
    card_box[ca2].removeAttribute("onclick");
    count = 0; 
  }else{
    setTimeout(function(){
        card_reset(ca1);
        card_reset(ca2);
    },1000);
    count = 0;
  }
}

function card_reset(re){
  card_img = document.createElement("img");
  card_img.src ="card_img/card_back.png";
  card_img.alt ="";
  card_box[re].innerHTML = "";
  card_box[re].appendChild(card_img);
}
