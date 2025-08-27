document.addEventListener('DOMContentLoaded', function() {
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add answer divs and set up event listeners
    faqItems.forEach((item, index) => {
        // Create answer div
        const answerDiv = document.createElement('div');
        answerDiv.className = 'faq-answer';
        
        // Add sample answer text (replace with your actual answers)
        const answers = [
            "Organizers can submit exhibition proposals at any stage of development, but earlier submissions allow for better planning and coordination.",
            "Yes, exhibition organizers are allowed to charge a reasonable participation fee to cover additional costs.",
            "Art Bridges does not provide funding for exhibition catalogues, opening events, or permanent collection acquisitions.",
            "Yes, organizers have the right to review and approve all borrowing venues before finalizing the tour schedule."
        ];
        
        answerDiv.textContent = answers[index] || "Answer coming soon...";
        
        // Add answer div after the question
        item.appendChild(answerDiv);
        
        // Add click event to toggle answer
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});