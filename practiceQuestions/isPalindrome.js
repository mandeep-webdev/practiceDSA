function isPalindrome (n) {
   if(n == 0) return true;
   // -ve number cannot be a Palindrome
   if(n < 0) return false;
   let copyOfN = n;
   let rev = 0
   while(n > 0){
      let rem = n%10
      rev = (10 * rev) + rem
      n = Math.floor(n/10)

   }
   if(copyOfN == rev) return true
   else return false

}

console.log(isPalindrome(1221))
