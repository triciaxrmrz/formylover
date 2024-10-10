document.getElementById('open-letter').addEventListener('click', function() {
    // Animate the flap to open
    const flap = document.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';

    // Animate the letter to come out
    const letter = document.querySelector('.letter');
    letter.style.top = '0'; // Move the letter into view

    // Make the letter content visible
    setTimeout(() => {
        document.querySelector('.letter-content').style.opacity = '1';
    }, 600); // Delay to match the flap opening time

    // Hide the open button after it's clicked
    this.style.display = 'none';
});
