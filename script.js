// Script untuk form RSVP
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const attendance = document.getElementById('attendance').value;

  if (attendance === '') {
    alert('Silakan pilih apakah Anda akan hadir atau tidak.');
    return;
  }

  // Simulasi pengiriman data
  console.log({
    name,
    email,
    attendance,
    date: new Date().toISOString()
  });

  // Tampilkan pesan sukses
  alert(`Terima kasih, ${name}! Konfirmasi kehadiran Anda telah diterima.`);
  this.reset();
});

// Animasi saat scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Amati elemen dengan kelas tertentu
document.querySelectorAll('.event-details, .rsvp, .couple').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
const rsvpForm = document.getElementById('rsvpForm');

if (rsvpForm) {
    rsvpForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = document.getElementById('submitBtn');
        const formData = new FormData(this);
        
        btn.innerText = 'Mengirim...';
        btn.disabled = true;

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Yess! Konfirmasi kamu sudah masuk beb!');
                this.reset();
            } else {
                alert('Yah, gagal ngirim. Cek koneksi ya!');
            }
        } catch (error) {
            alert('Eror sistem, coba lagi nanti ya.');
        } finally {
            btn.innerText = 'Kirim Konfirmasi';
            btn.disabled = false;
        }
    });
}
