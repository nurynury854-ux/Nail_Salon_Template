const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = bookingForm.querySelector('button[type="submit"]');
    if (!button) return;
    const originalText = button.textContent;
    button.textContent = '預約申請已送出，我們將盡快與您聯繫！';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      bookingForm.reset();
    }, 2500);
  });
}
