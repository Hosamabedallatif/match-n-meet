function checkpasswords () {
    var v = document.getElementById("password1");
    var b = document.getElementById("password2");
     if(v.value == b.value) {
      alert("correct");
            return true;
  }else{
      alert("passwords are not the same");
    return false;
      }
  }
/* for later when events page alfo is done
function differentactivities(){
    var dom = document.getElementById("differentactivities");
    if(dom.checked == true){

    }
}*/
/*
function gettime(that){
  var x= new Date();
  that.value=x;
}
function checktime(that){
  var y= new Date();
  that.value=y;
  var z=y-x;
  alert("duration"+z);
}
*/
//function to get the time, to put on sign up
function gettime(){
  today=new Date();
  start= today.getTime();
  alert("Time started "+start);
}

//function to get the time, to put after sign up
function checktime(){
var end=today.getTime();
var elapse= end-start;
alert("Time elapsed since sign up ="+elapse);
}

/*
function test(){
  alert("test");
}
*/


function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
