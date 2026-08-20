var year = prompt("what year?")
function leapGet() {
    if(year%4===0) {
        if(year%100===0){
            if(year%400===0) {
                return  year +"is leap"
            }
                else {
                    return "year is not leap" 
            }}
        else{
                return year +"is leap"
            }}
        
        
        
  else {
         return "year is not leap" 
    }
  
    
    
};
leapGet(year);