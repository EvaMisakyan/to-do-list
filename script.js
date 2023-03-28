"use strict"
$(document).ready(function(){

var  $list; 
var  $newform;


  $list = $('ul');
  $newform = $('form');


  $newform.on('submit', function(e){
    e.preventDefault();
    var $newinput = $('input:text').val();
    $list.append('<li>' + $newinput + '</li>')
    $('input:text').val('')
  })

$list.on('click','li',function(){
  var $li = $(this);
  $li.remove();
})


})
// $(document).ready(function(){

// $(".header").on('click',function(){
//   $(".content").slideToggle();

// })

//  })
