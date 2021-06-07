/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

const generateShape = (integer) => {
  let shape = '';
  let lap = 0;
  let index = 0;
  while(lap < integer){
    if(index < integer) {
      shape += '+';
      index++;
    }
    if(index === integer && lap + 1 < integer) {
      lap++;
      index = 0;
      shape += '\n';
    }
    if(index === integer && lap + 1 === integer) {
      lap++;
      index = 0;
    }
  }

  return shape
}