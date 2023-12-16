
//p5canvas에서 꼬이기 때문에 사용
//let width=windowWidth, height=windowHeight;
let star;
let stars=[];
let factor=100;
let speedSlider;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //Dom, Vector=(x,y,z),z는속도감을 표시, 사용하기 나름
  speedSlider=createSlider(0,20,5,0.1);  
  //createSlider(최소값, 최대값, 시작값)
  for(let i=0;i<500;i++){
  stars[i]=createVector(
    random(-width*factor, width*factor),
    random(-height*factor, height*factor),
    random(10,400));
    stars[i].pz=stars[i].z;
  }
} 
                                                                       
function draw() {
  //starfield
  background(0); //잔상을 만드려면 (0,25) 설정
  //fill(255,100,50); //다양한 색 가능
  fill(255);
  noStroke();
  translate(width/2, height/2);  //기준점 변경    
       
  for(let star of stars){ 
    let x=star.x/star.z;
    let y=star.y/star.z;
    let px=star.x/star.pz;
    let py=star.y/star.pz;
    let d=map(star.z,0,400,10,1);
    // 0-400까지의 범주에서 새로운 범주로 매칭해주는 기능, 비율 조정, 10-1 원근감 표현
    
      circle(x, y, d); //이미지 등 다양하게 변경 가능
      //textSize(d*5);
      //text('*', x,y);
      stroke(255);
      line(x,y,px,py);
      star.z=star.z;
      star.z -= speedSlider.value(); //속도    
    if(star.z<1){
      star.x=random(-width*factor, width*factor);
      star.y=random(-height*factor, height*factor);
      star.z=400;
      star.pz=400;
    }                      
  }
} 
   
