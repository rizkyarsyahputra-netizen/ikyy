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
