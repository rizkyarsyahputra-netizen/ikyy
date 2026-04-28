const form = document.getElementById("rsvpForm");

if (form) {
    form.addEventListener("submit", function () {
        setTimeout(() => {
            alert("Yess! Konfirmasi kamu sudah masuk! 💌");
        }, 500);
    });
}
