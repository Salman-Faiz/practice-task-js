const myFriends = [ 'susmita', 'fardina', 'tanzina', 'salman','asif', 'fahad', 'enan', 'rasik', 'samiha'];

function bestFriends(friends) {
    let longestName=friends[0];
    
    let longestNameList = [];
    for (let i = 0; i < friends.length; i++) {

        if(friends[i]>friends[i+1]){
            longestName = friends[i];
        }
        else if(longestName>friends[i+1]){
            longestName=friends[i];
        }
              
        
        console.log(longestName, longestNameList);
        
       
    }
     
  console.log(longestNameList, longestName)
return longestName; 
} 
const num =[1,2,3,4,5,6,7,8,9];
console.log(Math.max(...num));
// bestFriends(myFriends);