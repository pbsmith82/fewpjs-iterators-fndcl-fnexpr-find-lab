function superbowlWin(array) { 
   if(array.find(a => a.result === "W")) 
    return array.find(a => a.result === "W").year
}
