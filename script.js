function randompassword(n) {
    
    let ans = "";
    for(i=0;i<n;i++){
        const randomAlpha = randomRange(33,90);
        const  singleChar = String.fromCharCode(randomAlpha);
        ans+=singleChar;
    }
 console.log(ans);

}   
function randomRange(min,max){
    return Math.floor(Math.random() * (max-min) + min)
} 
randompassword(6)



