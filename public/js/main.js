$(document).ready(function () {
  $('#somthing').click(function () {
    console.log(';assasasasasaas')
    $('#container0').append(`
    <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
    `)
    // $('.alert').show()
  })
});

(function myFunction() {
  console.log('asaas', document.getElementById("call-us"))
  var copyText = document.getElementById("#call-us");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
})()


