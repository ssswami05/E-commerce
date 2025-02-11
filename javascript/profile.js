document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        alert(`Profile updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    });

    const viewOrderButtons = document.querySelectorAll('.view-order');
    viewOrderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Order details will be displayed here.');
        });
    });
});