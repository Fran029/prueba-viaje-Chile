<script>
    
    function submitForm () {
        // Obtener los valores del formulario
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
            
        window.location.href = 'confirmation.html';
        alert ("mensaje enviado")
    }
</script>