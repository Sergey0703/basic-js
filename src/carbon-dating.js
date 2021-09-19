import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 //sampleActivity=1;
export default function dateSample( sampleActivity ) {
  console.log('s=',sampleActivity);

  let num = Number(sampleActivity);
  if (isNaN(num)||(num===0)||(num<0)){
    return false;
  }
 // console.log('n=',num);

  let answ= Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
  //console.log('answ=',answ);
  
  if (answ>0){
    return answ;
  }else{
    return false;
  }


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

