
$('#login').on('click', function(){
  var username = $('#username').val()
  var password = $('#password').val()
  // $.post({
  //   '/admin/login',
  //   {username, password},
  //   function(msg){
  //     if(msg==='success'){
  //       window.location='/admin/dashboard'
  //     }else{
  //       $('input').addClass('wrong')
  //     }
  //   },
  //   'text'
    
  // })
console.log(username, password)
console.log(window.location)
  $.post(
        window.location,
        {username,password},
        function(msg){
             if(msg==='success') 
            window.location='/admin/dashboard' 
        else{
            $('input').addClass('login-wrong')
        }
        },
        'text'
    )
})
