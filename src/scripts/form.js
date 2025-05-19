document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Zruší výchozí chování (POST)
    console.log('Formulář byl odeslán, ale žádný POST se neprovedl.');
    window.location.href = '..';

});