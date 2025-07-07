function countDigits (number) {
   if(number == 0) return 1;
   // change any -ve number to a +ve number
   number = Math.abs(number)
   
   let count = 0;
   
   while (number !== 0) {
   number = Math.floor(number / 10)
      count ++ ;
   }
   return count

}

console.log(countDigits(7878))
