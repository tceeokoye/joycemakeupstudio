        const sendBtn = document.getElementById('send-btn');
        const name = document.getElementById('name');
        const messageInput = document.getElementById('message');
        
        sendBtn.addEventListener('click', () => {
         const phoneNumber = 08107165245;
         const message = messageInput.value;
         const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message )}`;
         window.open(url, '_blank');
        });