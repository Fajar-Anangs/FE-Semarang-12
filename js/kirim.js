function sendForm(event) {
    event.preventDefault(); // Mencegah perilaku default pengiriman formulir

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

document.getElementById('contactForm').addEventListener('submit', sendForm);

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

  // Event listener untuk form submission
document.getElementById('kursusForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form dikirim secara default
  
    // Lakukan permintaan POST ke server untuk pendaftaran kursus
    // Setelah berhasil, tangkap tokenCourse dari respons dan tampilkan di popup modal
    fetch('/api/course', {
      method: 'POST',
      body: JSON.stringify({
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        course: document.getElementById('kursus').value,
        tanggal: document.getElementById('tanggal').value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Jika tokenCourse ada dalam respons, tampilkan di popup modal
        openModal(data.token);
      } else {
        // Handle kesalahan jika diperlukan
        console.error('Gagal menerima tokenCourse dari server.');
      }
    })
    .catch(error => {
      // Handle kesalahan jika terjadi
      console.error('Terjadi kesalahan dalam melakukan permintaan ke server:', error);
    });
  });
  
  // Fungsi untuk membuka modal
  function openModal(generateToken) {
    const modal = document.getElementById('generateTokenModal');
    const generateTokenElement = document.getElementById('generateToken');
  
    generateTokenElement.textContent = generateToken;
    modal.style.display = 'block';
  }
  
  // Fungsi untuk menutup modal
  function closeModal() {
    const modal = document.getElementById('generateTokenModal');
    modal.style.display = 'none';
  }
  
  // Event listener untuk menutup modal saat tombol close diklik
  document.querySelector('.close').addEventListener('click', closeModal);
  