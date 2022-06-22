# Objects-in-Javascript
Objects in Javascript
 
Summary / Rangkuman

Object types in JS
Berbagai jenis obyek di JS
 
1. Object Literal

let object = {
property1: prop1,
property2: prop2,
method1: meth1,
method2: meth2
}

2. Function Declaration

function objectNew(params){
let object = {};
object.properties = params;
object.methods = function;
return object;
}

3. Constructor

function objectNew(params){
 this.properties = params;
 this.methods = function;
}

4. Object Create

const objectMethod = {
 method: method;
}

function objectNew(params){
let object = Object.create(objectMethod);
//property
object.param = param
return object;
}

5. Prototype

function Object(params){
this.properties = params;
}

Object.prototype.method

6. Class Prototype
Class Object{
 constructor(params){
 this.properties = params;
 }
 
 function (params){
  return value;
 }
}

let obj = Object(params)

