function getPigLatin() {

  //get the word input by the user
  var str = document.getElementById("word").value;
  var arr = str.split(' ')
  var numOfWord = arr.length

  for (i=0; i<numOfWord; i++){
  	if (/[aeiou]/.test(arr[i][0])){
  		arr[i] = arr[i]
  	} else{
  		wordLocation = arr[i].search(/[aeiou]/)
  		arr[i] = arr[i].substring(wordLocation) + arr[i].substring(0, wordLocation) + "ay";
  	}
  }
  str = arr.join(' ');

  //change the HTML content of a <p> element with id="pig-latin-word": 
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('event-btn').addEventListener("click", getPigLatin);
});

