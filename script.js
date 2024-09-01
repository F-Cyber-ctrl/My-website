const notes = {
    teacher1: "Thank you, Ishu Mam, for making Social Science so engaging and helping us see the world through different perspectives.your taunts make us feel guilty and being guilty helps us to go towards success🫠✨",
    teacher2: "Renu Mam, your Hindi lessons have been filled with wisdom and cultural richness. We are grateful for your guidance🥰✨.",
    teacher3: "Manisha Mam, your passion for Maths has inspired us to solve even the toughest problems with confidence.and we sincerely apologise for misbehaving ❤️",
    teacher4: "Jasbir Sir, your IT knowledge has opened doors to the future for us. We appreciate your patience and support! ✨🗿",
    teacher5: "Ramneek Mam, your Physics classes have sparked curiosity and a love for learning about the universe 🪐✨.",
    teacher6: "Rajinder Mam, your Biology lessons have taught us about life in the most fascinating ways. Thank you for your dedication.✨🦠",
    teacher7: "Mahesh Sir, your Chemistry experiments and explanations have made science fun and accessible to us.✨🧪",
    teacher8: "Meenakshi Mam, your English classes have been more than lessons; they’ve been journeys into the world of literature🧠✨ ",
    teacher9: "Gurpreet Mam, your Punjabi lessons have connected us to our roots and language ✨🤩",
    teacher10: "Prabhjyoti Mam, your Art Ed. classes have encouraged our creativity and expression. You’ve made learning a joy🥹😊🥰.",
    teacher11: "Ashok Sir, your Physical Education sessions have instilled in us the importance of fitness and teamwork. Thank you for your energy and enthusiasm.💪🗿"
};

document.querySelectorAll('.teacher').forEach(button => {
    button.addEventListener('click', event => {
        const teacherId = event.currentTarget.id;
        document.getElementById('note-text').textContent = notes[teacherId];
        document.getElementById('note-modal').style.display = 'block';
    });
});

document.querySelector('.close').onclick = function() {
    document.getElementById('note-modal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('note-modal')) {
        document.getElementById('note-modal').style.display = 'none';
    }
};
