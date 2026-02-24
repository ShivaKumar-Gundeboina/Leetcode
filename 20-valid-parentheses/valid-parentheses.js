/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let stack=[];

     const pairs={
        "(":")",
        "[":"]",
        "{":"}"
     }
   
   for (let char of s){
   
    if(pairs[char]){
        stack.push(pairs[char])
        
    }else{
        if(stack.pop()!==char){
            return false
        }
    }
   }
   return stack.length===0
};

