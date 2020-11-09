$('#tgl_btn').on('click',function(){
  $('.nav').toggleClass('active');
});

$('#blank>a').on('click',function(){
  cons();
  return false;
});
function cons(){
  alert('서비스 준비중입니다.')
}