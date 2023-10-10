function sendForm(event) {
    event.preventDefault(); // Mencegah perilaku default pengiriman formulir
    
    document.getElementById('contactForm').addEventListener('submit', sendForm);
    const form = document.getElementById('contactForm');
    const formData = {
        nama: form.elements.nama.value,
        email: form.elements.email.value,
        subject: form.elements.subject.value,
        pesan: form.elements.pesan.value
    };
    
    fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Handle a successful response (e.g., show a success message)
            console.log('Form submitted successfully');
        } else {
            // Handle errors if the request fails
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        // Handle network or other errors
        console.error('Error:', error);
    });
}


function registerUser() {
    // Mendapatkan nilai dari input fields
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Membuat objek JSON untuk data pengguna
    const userData = {
      nama: nama,
      email: email,
      password: password,
      status: "Terkirim"
    };
  
    // Mengirim data JSON ke backend menggunakan metode fetch
    fetch('http://localhost:3001/api/registrasi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle respon dari backend di sini, misalnya menampilkan pesan sukses atau kesalahan
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  function subscribeNewsletter() {
    // Mendapatkan nilai dari input field email
    const email = document.getElementById('email').value;
  
    // Membuat objek JSON untuk data berlangganan newsletter
    const subscriptionData = {
      email: email
    };
  
    // Mengirim data JSON ke backend menggunakan metode fetch
    fetch('http://localhost:3001/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscriptionData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle respon dari backend di sini, misalnya menampilkan pesan sukses atau kesalahan
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Login berhasil, lakukan tindakan sesuai kebutuhan
        const data = await response.json();
        console.log(data);
      } else {
        // Login gagal, lakukan tindakan sesuai kebutuhan
        console.error("Login gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  });
  