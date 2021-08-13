$(document).ready(function(){
    $.validator.addMethod("alpha", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);
    });

    jQuery.validator.addMethod("noSpace", function (value, element) {
        return value == '' || value.trim('').length >= 3;
    }, "Name should have at least three characters");

    $.validator.addMethod("isEmail", function (value, element) {
        return this.optional(element) || value == value.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                alpha:true,
                noSpace:true
            },
            subject:{
                required:true,
                alpha:true,
                minlength:3
            },

            email:{
                required:true,
                email:true, 
                isEmail:true
            },
        

            message:{
                required:true,
                minlength:8
            }

        },
        messages:{
            
            name:{
                
                alpha:"Only characters are allowed"
            },
            subject:{
                alpha:"Only characters are allowed",
                minlength:"Enter a valid subject"
            },
           
            message:{
                minlength:"Enter a valid enquiry"
            }
        },
        submitHandler:function(form){

        $("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw6yG0dtXJP8KkcxK_eaPE6zIB06ziBHukXKnz8K2-B3IkY6t3gc60o4ZTv5Vxv_gN2nQ/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
     }  

    })

})


