function resetFeedbackForm() {
    ['name', 'email', 'rating', 'message'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
}

function submitFeedback() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const rating  = document.getElementById('rating').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !rating || !message) {
        alert('Please fill all fields');
        return;
    }

    const feedbackData = { name, email, rating, message };
    localStorage.setItem('travelnestFeedback', JSON.stringify(feedbackData));

    document.getElementById('successMessage').innerText = 'Feedback submitted successfully!';
    resetFeedbackForm();
}

window.submitFeedback = submitFeedback;


document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const activeQuestion = document.querySelector(".faq-question.active");
            if (activeQuestion && activeQuestion !== question) {
                activeQuestion.classList.remove("active");
                activeQuestion.nextElementSibling.style.maxHeight = null;
            }

            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});