function conatctSubmit(){var a=$("#baseurl").val()+"auth/contactus";if(""==$("#captcha").val())return toastr.error("Please select captcha"),!1;$(".regloader").css({display:"inline-block"}),$.ajax({type:"POST",url:a,data:{name:$("#name").val(),phone:$("#phone").val(),email:$("#email").val(),description:$("#description").val(),captcha:$("#captcha").val()},success:function(a){"success"==a.confirmation?($(".regloader").css({display:"none"}),$("#contactform")[0].reset(),toastr.success("We will contact soon!!")):($(".regloader").css({display:"none"}),toastr.error("Please fill details"))},error:function(a){$(".regloader").css({display:"none"}),toastr.error("Please fill details")}})}function fieldcheck(a,s){var e=!1;"name"==s&&($("#"+s).val()?(e=!0,$("#"+a).css({display:"none"})):($("#"+a).css({display:"block"}),e=!1)),"phone"==s&&($("#"+s).val()?(e=!0,$("#"+a).css({display:"none"}),$("#"+s).val().length<10?($("#"+a).css({display:"block"}),e=!1):(e=!0,$("#"+a).css({display:"none"}))):($("#"+a).css({display:"block"}),e=!1)),"email"==s&&($("#"+s).val()?(e=!0,/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#"+s).val())?(e=!0,$("#"+a).css({display:"none"})):(e=!1,$("#"+a).css({display:"block"}))):(e=!1,$("#"+a).css({display:"block"}))),"description"==s&&($("#"+s).val()?(e=!0,$("#"+a).css({display:"none"})):($("#"+a).css({display:"block"}),e=!1)),console.log(e),e&&""!=$("#name").val()&&""!=$("#phone").val()&&""!=$("#email").val()&&""!=$("#description").val()?$("#contactbtn").prop("disabled",!1):$("#contactbtn").prop("disabled",!0)}function isNumber(a){var s=(a=a||window.event).which?a.which:a.keyCode;return!(31<s&&(s<48||57<s))}