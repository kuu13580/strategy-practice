const canvas = document.querySelector("#canvas");
// キャンバスのサイズ
canvas.width = 900;
canvas.height = 900;

let ctx = canvas.getContext("2d");

// 設定値
const BLOCK_PIXEL = 300; // 1マスのサイズ
const NUM_BLOCK_X = canvas.width / BLOCK_PIXEL;
const NUM_BLOCK_Y = canvas.height / BLOCK_PIXEL;
const BACKGROUND_COLOR = "limegreen";
const LINE_COLOR = "black";

// ================メイン処理
clearCanvas();
arrayPractice();

// fillSpot(2, 3, "black");

// キャンバスを初期化する
function clearCanvas() {
  // 背景を塗りつぶし
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // マスの描画
  ctx.strokeStyle = LINE_COLOR;
  for (let i = 0; i < NUM_BLOCK_X; i++) {
    for (let j = 0; j < NUM_BLOCK_Y; j++) {
      let start_x = BLOCK_PIXEL * i;
      let start_y = BLOCK_PIXEL * j;
      let width = BLOCK_PIXEL;
      let height = BLOCK_PIXEL;
      ctx.strokeRect(start_x, start_y, width, height);
    }
  }
}

// キャンバスの指定座標を塗りつぶす
function fillSpot(x, y, color) {
  ctx.fillStyle = color;
  let start_x = BLOCK_PIXEL * x;
  let start_y = BLOCK_PIXEL * y;
  let width = BLOCK_PIXEL;
  let height = BLOCK_PIXEL;
  ctx.fillRect(start_x, start_y, width, height);
  ctx.strokeStyle = LINE_COLOR;
  ctx.strokeRect(start_x, start_y, width, height);
}

//  キャンバスの指定座標に●を描く
function drawCircle(x, y, color, radius) {
  ctx.beginPath();
  ctx.fillStyle = color;
  let center_x = BLOCK_PIXEL * x + (BLOCK_PIXEL / 2);
  let center_y = BLOCK_PIXEL * y + (BLOCK_PIXEL / 2);
  let start_angle = Math.PI / 2;
  let end_angle = 3 / 2 * Math.PI;
  ctx.arc(center_x, center_y, radius, start_angle, end_angle)
  ctx.fill();
}

// パックマンの描画
function drawPackman(x, y, radius) {
  fillSpot(x, y, BACKGROUND_COLOR);
  ctx.beginPath();
  let center_x = BLOCK_PIXEL * x + (BLOCK_PIXEL / 2);
  let center_y = BLOCK_PIXEL * y + (BLOCK_PIXEL / 2);
  ctx.moveTo(center_x, center_y);

  let start_angle = Math.PI / 4;
  let end_angle = 7 / 4 * Math.PI;
  ctx.arc(center_x, center_y, radius, start_angle, end_angle, false);
  ctx.lineTo(center_x, center_y);
  // ctx.strokeStyle = "yellow";
  ctx.fillStyle = "yellow";

  // ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // 試行錯誤の残骸
  // ctx.fillStyle = color
  // ctx.moveTo(center_x , center_y)
  // ctx.lineTo(BLOCK_PIXEL * (x+1) , BLOCK_PIXEL * y);
  // ctx.lineTo(BLOCK_PIXEL * (x+1) , BLOCK_PIXEL * (y+1));
  // ctx.fill();
}

// クリック時の処理
canvas.addEventListener("click", (e) => { clicked(e); });//ラムダ式、アロー式
function clicked(event) {
  if (event.altKey == true) {
    console.log("Toilet");
  }
  else {
    const x = Math.floor(event.offsetX / BLOCK_PIXEL);
    const y = Math.floor(event.offsetY / BLOCK_PIXEL);
    // drawCircle(x, y, "red", 20);
    drawPackman(x, y, 20);
  }
  // なんかの処理
}

function arrayPractice() {
  let numbers = [3, 1, 4, 1, 5, 6, 2];

  numbers[2] = 5;
  numbers.push(9);

  // 大きさ
  // console.log(`size : ${numbers.length}`);

  // スライス
  // console.log(`slice : ${numbers.slice(2, 4)}`);
  // console.log(`slice : ${numbers.slice(2, -2)}`);

  // forEach
  // 通常
  // for (let i = 0; i < numbers.length; i++){
  //   console.log(numbers[i]);
  // }
  numbers.forEach((x) => {
    // ここに処理書く
  });

  // map関数
  let output = numbers.map((x) => {
    return x * 2;
  });
  // console.log(output);




  // 2次元配列

  // let test = ["red", "green", "blue"];
  // for (let i = 0; i < test.length; i++) {
  //   color = test[i];
  //   fillSpot(i, 0, color);
  //   console.log(i);
  // }

  let arr = [["red", "green", "blue"],
  ["blue", "green", "red"],
  ["red", "blue", "green"]];

  // arr[0][0];
  // console.log(arr[0][0]);

  // arrに従って盤面を塗る(fillSpot)

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      color = arr[j][i];
      fillSpot(i, j, color);
      console.log(i, j, color);
    }
  }
}