//Factory function 

function createCircle(radius){
    return{
    radius,
   draw: function (){
       console.log('draw')
   }
}
}
const circle=createCircle(1)
circle.draw()



//Constructor funnction
// spored konvencija sekogas zapocnuva so golema bukva ova e vid na klasa no vo JS nemame klasa 
//this- e reference na objektot sto ke go ozvrsuva ovoj kod 
//1 e argument
//new pravi prazen objekt i ke go stavi this kako point na ovoj objekt i ke go vrati toa this , ako nemame this ke bide globalen objekt vo oovoj slucaj Window object 

//ova se dva nacina na pravenje na funkcii ako koristime retun toa e factory function a ako koristime zborot this i new togas toa e constructor function 
//razlikata megu niv
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw')
    }
}
 
//ova se metodi 
Circle.call({},1)
//ovoj nacin na povikuvanje na funkcijata e ist so dolniot prviot argument e prazen objekt pr.{} i se odnesuva na this ili vo dolniot slucaj isto sto ni e new a vtoriot parametar vo dvata slujaca e 1
//ovde argumentite moze da gi povikuvame poveke pati pr. 1,2,3 itn
Circle.apply({},[1,2])
// dodeka so apply argumentite gi povikuvame kako niza [], ova e super ako imas niza 

const another= new Circle(1)

//Constructor property 
//Sekoj objekt vo JS ima property nareceno constructor  i toa se odnesuva na funkcijata sto ja korisitme da contstruirame  ili krearirame objket pr.function Circle
//Funkicitte vo JS se objekti taka na primer function Circle e objekt  


//Reference type vs value 
// vo Js imame dva kategorii  na types: value types nareceni primitives (number,string, boolean, symbol,undefindd i null )  i reference types (object,functions,arrays)
//primitives se kopiraat po nivnata vrednost  a objektite se kopiraat po nivnite reference types
//array e objekt 
circle.location={x:1} //dodavame novo proppery koga ke odime na console.lgo ke vidime deka imame dve propreties location i radius
circle['location']={x:1} //ova e drug nacin na dodavanje na property no dot (. ) gorniot primer e polesen no gi koristime koga na primer imeto na propretu e so crta ili so space primer. location-centered
delete circle.location;
delete circle['location'] // koga sakame da izbirseme edno ili poveke proprety na priemr pass na klientot ili sl 

//enimerating so for ili in

for (let key in circle){
    if (typeof circle[key] !== 'function')
    console.log(key,circle[key])
}

 var type= Object.keys(circle)
 console.log(type)
//koga sakame da zememe property na odreden objekt pisuvame circle[key] a ako sakame da prikaze se sto ne e funkcija korsitime typeof ili pak preku Object.keys
//ako sakame da pristapime do eden property so nacinot Object.keys togas korisitme in

if ('radius' in circle){
    console.log("Circle has a radius" )
}
//Zaklucok : za da gi enumrating (proverime) site members(clenovi) vo objektot korisitme for in loop, da gi zememe site keys koristime Object.keys a za da izvleceme edno proprety ili method korisitme in operator 


//Abstraction 
