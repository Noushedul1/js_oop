class details{
	constructor(name,age){
			this.studentName= name;
			this.studentAge= age;
			let country;
	}
	akibbio(){
		return `${this.studentName} and ${this.studentAge}`;
	}
	static mystaticMethod(){
		console.log('From Southern university');
	}
	myCountry(){
		console.log(`My country name: ${this.country}`);
	}
	favSeries(){
		console.log('Artugrul and Osman');
	}
}
let a = new details('noushed',25);
a.country='Bnagladesh';
a.favActor='Engin Altan Dujatan';
a.myCountry();

let b = new details('farhad',24);

document.write(a.akibbio());

console.log(b.akibbio());

details.mystaticMethod();

//for inheritance 
class biodata extends details{
	constructor(){
		super();
		console.log('Hello bangladesh');
	}
	add(y,z){
		console.log(y+z);
		alert(y+z);
	}
}
let q = new biodata();
q.favSeries();
q.add(10,10);