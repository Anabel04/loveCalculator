var name1 = prompt("Insert name 1");
var name2 = prompt("Insert name 2");
var n = Math.random()*100;
var compatibility = Math.floor(n);

if(compatibility > 70){
    alert(name1 +" and "+ name2 + " have a compatibility of " + compatibility + "%" + " Congratulations you are made for each other.");
}
if(compatibility > 30 && compatibility <= 70){
    alert(name1 +" and "+ name2 + " have a compatibility of " + compatibility + "%" + " Pecfect."); 
}
if(compatibility <= 30){
    alert(name1 +" and "+ name2 + " have a compatibility of " + compatibility + "%" + " It's okay anyway");
};