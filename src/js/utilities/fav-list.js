document.addEventListener('DOMContentLoaded', () => {
    // Load hero content dynamically
    fetch('/src/partials/fav-hero.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('hero-container').innerHTML = data;
      });
  
    // Example favorite recipes
    const favs = [
      { title: 'Coq au Vin', description: 'Classic French chicken stew in wine sauce.' },
      { title: 'Tacos al Pastor', description: 'Traditional Mexican dish with marinated pork.' },
      { title: 'Sushi Rolls', description: 'Japanese rice rolls with fish and vegetables.' },
      { title: 'Lasagna', description: 'Italian pasta layered with meat, cheese and sauce.' },
      { title: 'Pad Thai', description: 'Stir-fried rice noodle dish from Thailand.' },
      { title: 'Poutine', description: 'Canadian dish with fries, cheese curds and gravy.' }
    ];
  
    const container = document.getElementById('content-container');
  
    favs.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('fav-card');
  
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
  
      container.appendChild(card);
    });
  });
  