function checkCredentials(event) {
    event.preventDefault(); // Evitar que el enlace se active por defecto
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error-message'); // Esta línea asigna el div del mensaje de error
  
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      window.location.href = "https://github.com/jeanchong15";
    } else {
      errorDiv.textContent = "Por favor, complete ambos campos."; // Muestra un mensaje de error
      // Aquí puedes mostrar un mensaje de error o realizar otras acciones.
    }
  }
  
  