//operators types
//Arithemetic operators : +,-,*,%,++,--
//Assignment operators : =,+=,-=,*=,/=,%=,**=(x+=y : x=x+y)
//string operator:+,+=(to concatenate)
//comparison operators: ==,===,!=,!==,>,<,>=,<=,?
//Logical operators:&&,||,!
//Typeof and Instanceof operators(typeof returns type  of variable and instanceof returns true if an obbject is an instance of an object type )
//bitwise operators 

 //arimethtic 
var a = 5;
var b = 10;
 var c;
c = a+b;//15
c = a-b;//-5
c = a*b;//50
c = a%b;//5
c= a/b;//0.5
c = a++;//5
c = ++a;//7
c = b--;//10
c = --b;//8
console.log(c)

//Assignment operator
var d = 20;
d += 10;//30
console.log(d)
d -= 10;//20
d *= 10;//200
d /= 10;//20
d %= 10;//
d **= 10;//

//String operator
let fname = "iswarya"
let lname = "M"

console.log(fname+lname)//iswaryaM
console.log(fname+="M")//iswaryaM

//comparison operator

let f = 8;
  var output;
  output = f==10;//fa;se
  console.log(output)
  output = f==="10";//false
  console.log(output)
  output = f===8; //true
  console.log(output)
  output = f!=10;//true
  output = f!=="8";//true
  console.log(output)
  output = f>10;//false
  output = f<10;//true
  output = f>=10;//false
  console.log(output)
  output = f<=8;//true
  console.log(output)
  
  //logical operator
  var x = 3;
  var y = 4;
  var val;
  val = (x < 2 && y > 5);//false
  console.log(val)
   val = (x < 5 || y > 3);//true
   console.log(val)
  val = (x == 2 && y == 5);//false
  console.log(val)
  val = (x !=5);//true
  console.log(val)
  val = !(x==y);//true
  console.log(val)
 //typeof and instanceof operator
 var name = "ishu"
 var num = 7
 var data = false
 var nodata = undefined
 var obj1 ={fname:"iswarya"}
 const h = 5
  console.log(typeof(num))//number
  console.log(typeof(data))//boolean
  console.log(typeof(nodata))//undefined
  console.log(typeof(obj1))//object
  console.log(typeof(h))//number
  console.log(typeof(name))//string
 //array
  var arr = ["tiger","cheetah","leopard"]
  console.log(arr[0])//tiger
  console.log(typeof(arr))//object
  //terenary(?) operator
  var flower = "lotus";
 console.log(flower="lotus" ? "national flower":"not national flower")//national flower
