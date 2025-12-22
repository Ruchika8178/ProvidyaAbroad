// FAQ
document.querySelectorAll('.faq_item').forEach(faq => {
  faq.querySelector('.faq_question')?.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});

// CALL BUTTON (only if exists)
const callBtn = document.getElementById("callBtn");
if (callBtn) {
  callBtn.addEventListener("click", function () {
    alert("📞 Our team will reach you soon!");
    window.location.href = "tel:+919729959181";
  });
}

// POPUP FORM (GLOBAL – WORKS ON ALL PAGES)
function openPopup() {
  const popup = document.getElementById("popupForm");
  if (popup) popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popupForm");
  if (popup) popup.style.display = "none";
}

// BEGIN YOUR JOURNEY BUTTON (only on index.html)
const startBtn = document.querySelector(".start");
if (startBtn) {
  startBtn.addEventListener("click", openPopup);
}

// CLOSE BUTTON
const closeBtn = document.getElementById("closeForm");
if (closeBtn) {
  closeBtn.addEventListener("click", closePopup);
}

// CLICK OUTSIDE TO CLOSE
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popupForm");
  if (popup && e.target === popup) {
    closePopup();
  }
});

// TESTIMONIAL SLIDER (only if exists)
const track = document.querySelector('.testimonial-track');
function slideLeft() {
  if (track) track.scrollBy({ left: -350, behavior: 'smooth' });
}
function slideRight() {
  if (track) track.scrollBy({ left: 350, behavior: 'smooth' });
}
