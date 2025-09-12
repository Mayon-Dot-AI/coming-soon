// mayon.ai — Coming Soon interactions

// Consolidated minimal interactions
// - Year stamp
// - Notify form validation + mailto handoff
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById('notify-form');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    if (!email) return; // old markup fallback
    const value = String(email.value || '').trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
    if (!isValid) {
      e.preventDefault();
      if (message) {
        message.hidden = false;
        message.textContent = 'Please enter a valid email address.';
        message.classList.remove('success');
        message.classList.add('error');
      }
      email.focus();
      return;
    }
    // show confirmation for mailto flows
    if (message) {
      message.hidden = false;
      message.textContent = 'Thanks! Your email app should open. If not, email hello@mayon.ai.';
      message.classList.remove('error');
      message.classList.add('success');
    }
  });
})();

/*
  mayon.ai – Coming Soon Script
  - Palette extraction from logo (kept)
  - Email capture: validate + mailto handoff with status messaging
  - Reduced-motion friendly
*/

// Remove experimental theme extraction and duplicate wiring for simplicity and performance

// Email form wiring
// Removed duplicate wireUpEmailForm implementation


