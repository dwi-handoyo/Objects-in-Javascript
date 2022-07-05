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

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/1-objectLiteral.js

2. Function Declaration

function objectNew(params){

  let object = {};

  object.properties = params;

  object.methods = function;

  return object;

}

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/2-functionDeclaration.js

3. Constructor

function objectNew(params){
 
 this.properties = params;
 
 this.methods = function;

}

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/3-constructor.js

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

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/4-objectCreate.js

5. Prototype

function Object(params){
  
  this.properties = params;

}

Object.prototype.method

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/5-prototype.js

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

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/6-prototypeClass.js

7. Object by Function Expression

* https://github.com/dwi-handoyo/Objects-in-Javascript/blob/main/7-objectFunctionExpression.js




