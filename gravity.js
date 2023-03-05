const canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext('2d');
let radius=20//Math.ceil(Number(Math.random().toString()[2]))
function Balls(x,y){
    this.x=x;
    this.y=y;
    var x_velocity=0;
    var y_velocity=5;
   

    this.draw=()=>{
        ctx.beginPath();
        ctx.arc(this.x+=x_velocity,this.y+=y_velocity,radius,0,2*Math.PI,false);
        ctx.fillStyle='yellow';
        ctx.fill()
}
this.update=()=>{
  this.draw()
  if(this.y+radius>=innerHeight){y_velocity=0}
}


}
const ball= new Balls(300,300)
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ball.update()
}
animate()



console.log(radius)
