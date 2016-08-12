// EX 1.1
// var x=5;
// var y=6;
// 
// if (x>y){
	// console.log(x);
// }
// else {
	// console.log(y);
// }

//EX 1.2
// var x=3, y=-7, z=2;
// 
// if((x+y+z)>=0){
	// console.log("the sign is +");
// }
// else{
	// console.log("the sign is -");
// }

//EX 1.3

// var x=0, y=-1, z=4;
// var num=[];
// if ((x>y)&&(x>z)&&(z>y)){
	// num[0]=x;
	// num[1]=z;
	// num[2]=y;
// }
// else if((y>x)&&(y>z)&&(x>z)){
	// num[0]=y;
	// num[1]=x;
	// num[2]=z;
// 	
// }
// else if((z>x)&&(z>y)&&(x>y)){
	// num[0]=z;
	// num[1]=x;
	// num[2]=y;
// 	
// }
// console.log(num);

// Ex 1.4

// var a=-5, b=-2,c=-6,d=0,e=-1;
// if ((a>b)&&(a>c)&&(a>d)&&(a>e)){
	// console.log(a + " is the biggist number");
// }
// else if((b>a)&&(b>c)&&(b>d)&&(b>e)){
	// console.log(b + " is the biggist number");
// }
// else if((c>a)&&(c>b)&&(c>d)&&(c>e)){
	// console.log(c + " is the biggist number");
// }
// else if((d>a)&&(d>b)&&(d>c)&&(d>e)){
	// console.log(d + " is the biggist number");
// }
// else if((e>a)&&(e>b)&&(e>c)&&(e>d)){
	// console.log(e + " is the biggist number");
// }

//Ex 1.5

var david=80, vinoth=77, divya=88, lshitha=95, thomas=68, x;

x=(david+vinoth+divya+lshitha+thomas)/5;

if (x<60){
	console.log(x + " הממוצע גרוע מאוד");
}
else if(x<70){
	console.log(x + " הממוצע גרוע");
}
else if(x<80){
	console.log(x + " הממוצע בינוני");
}
else if(x<90){
	console.log(x + " הממוצע טוב");
}
else if(x<100){
	console.log(x + " הממוצע טוב מאוד");
}






