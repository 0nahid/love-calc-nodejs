var loveScore= Math.random()*100;
loveScore=Math.floor(loveScore)+1;
console.log(loveScore);

if (loveScore > 70){
    document.querySelector(".demo1").innerHTML= "<h1>Your love scoor is "+ loveScore+ "% ." + "<br> You love each other like Romeo & Juliet</h1>";
}
if (loveScore > 30 && loveScore<=70){
    document.querySelector(".demo1").innerHTML= "<h1>Your love score is "+ loveScore+ "% ."+"<br> Your love is not pure.  You'ld give more time to your partner .</h1>";
} if (loveScore <=30){
    document.querySelector(".demo1").innerHTML= "<h1>Your love score is "+ loveScore+ "% ." +"<br> You'll together like oil and water</h1>";
}