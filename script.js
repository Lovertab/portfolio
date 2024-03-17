const aboutLink = document.getElementById("about-me");
const workLink = document.getElementById("work");
const contactLink = document.getElementById("contact-me");

aboutLink.addEventListener('click', () => {
    document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });
});

workLink.addEventListener('click', () => {
    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
});

contactLink.addEventListener('click', () => {
    document.getElementById("contact-me").scrollIntoView({ behavior: 'smooth' });
});
