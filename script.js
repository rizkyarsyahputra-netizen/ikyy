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
                alert('Yess! Konfirmasi kamu sudah masuk!');
                this.reset();
            } else {
                alert('Gagal ngirim, cek lagi ya.');
            }
        } catch (error) {
            alert('Error sistem, coba lagi nanti.');
        } finally {
            btn.innerText = 'Kirim';
            btn.disabled = false;
        }
    });
}
