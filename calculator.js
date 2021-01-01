function calculator(input){
//debugger;
var result = 0;
var operators = ['/','*'];
var str = input;
var regex= /[0-9]+/g;
var nums = str.match(regex);
var operands = str.split(/[0-9]+/);
operands.pop();
//console.log(operands);
var firstOp = 1;
var secondOp = -1;
var mainOp = 1;
for(var i = 0; i < operands.length; i++){
//////////////////////////////////////////////    for first operand   ////////////////////////////////////
if(i === 0 && operands[i]  === '-'){

firstOp = -1;

}

//////////////////////////////////////////////    for second operand   ////////////////////////////////////

if(i === 1 && operands[i].length === 1){

secondOp = 1;
mainOp = operands[i];

}

//////////////////////////////////////////////    for Main operand   ////////////////////////////////////

if(i === 1 && operands[i].length === 2){
secondOp = operands[i][1];
mainOp = operands[i][0];
if(mainOp === secondOp){ // + + or -  -
mainOp = '+';
secondOp = 1;
}else if(mainOp === '-' && secondOp === '+' ){
secondOp = 1;
}else{
secondOp = -1;
}
}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(firstOp, secondOp, mainOp);
switch(mainOp) {
  case '+':
    result = ((firstOp) * Number(nums[0])) + ((secondOp) * Number(nums[1]))
    break;
  case '-':
    result = ((firstOp) * Number(nums[0])) - ((secondOp) * Number(nums[1]))
    
    break;
   case '*':
        result = ((firstOp) * Number(nums[0])) * ((secondOp) * Number(nums[1]))
    break;
  case '/':
       result = ((firstOp) * Number(nums[0])) / ((secondOp) * Number(nums[1]))
    break;
   
}

return result;

}
