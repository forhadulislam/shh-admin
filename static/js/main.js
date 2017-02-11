var adminUser = {
  'admin': 'abc123'  ,
  'ashik': 'abcd1234',
  'sadi': 'abc'
    
};

$(document).ready(function(){
    
    
    $(".login-form").submit(function(e){
        e.preventDefault();
        
        var username = $('#id_username').val();
        var password = $('#id_password').val();
        if(adminUser[username] === password){
            localStorage.setItem("username", username);
            location.href = 'index.html';
        }else{
            alert('not exist');
        }
        
    })
    
    
    
    
})