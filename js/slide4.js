const countries = [
    {
      id: '',
      title: 'Бізнес',
      place: 'Аналіз проекту',
      image: '../img/slide4-bg1.webp',
      desc: 'Дослідники британської аналітичної компанії GlobalData ще у 2020 році зібрали цікаві дані: 68% серед опитаних вказали, що тепер рідше ходять у кафе, бари чи ресторани, або взагалі припинили ходити. Тоді причиною була пандемія Covid-19, стрибок цін та необхідність самоізоляції. Зараз помпезні заходи просто не на часі, тому став популярним формат тихих домашніх вечірок. Вузьке коло друзів, затишна атмосфера, улюблена музика на фоні… Не вистачає лише професіонала, який приготує коктейлі.',
      menu: 'Basics',
      submenu: '',

    },
    {
      id: 1,
      title: 'Відчайдушні',
      place: 'Домогосподарки',
      image: '../img/slide4-bg2.webp',
      desc: 'Згідно дослідження британської аналітичної компанії GlobalData перше місце в списку найбільш популярних коктейль в світі серед домогосподарок займає «Олд фешен» – коктейль-аперитив Міжнародної асоціації барменів. Якщо ви вважали що перше місце за популярністю займає "Мохіто", то знайте - ви помилялись!',
      menu: 'Focus',
      submenu: 'Group',
    },
    {
      id: 2,
      title: 'Бартендерні',
      place: 'Ентузіасти',
      image: '../img/slide4-bg3.webp',
      desc: 'Або "домашні міксологісти" - це люди, які займаються готуванням коктейлів як хобі. Термін "міксологіст" має більш професійний відтінок, але у поєднанні з "домашній" він може використовуватись для опису не професійних барменів.',
      menu: 'Focus',
      submenu: 'Group',
    },
    {
      id: 3,
      title: 'Патіхардні',
      place: 'Тусовщики',
      image: '../img/slide4-bg4.webp',
      desc: 'Згідно з даними нічного клубу Club NYX в центрі Амстердаму, кожен їх клієнт споживає в середньому 2,4 порції коктейлів. Цього багатоповеерхового велетня з різними стилями музики на кожному поверсі відвідує в середньому 1224 тіла в будні, а у пятницю та вихідні кількість відвідувачів може сягати 2700 голів.',
      menu: 'Focus',
      submenu: 'Group',
    },
  ]
  
  const countriesList = document.querySelector('.countries .options');
const heroContainer = document.querySelector('.heroContainer');

window.addEventListener('load', function() {
  countries.map((country) => {
    countriesList.innerHTML += `
      <div class="option">
        <h3 class="focus-group-id">${country.id}</h3>
        <div>
          <h2 class="focus">${country.menu}</h2>
          <h5 class="group">${country.submenu}</h5>
        </div>
      </div>
    `;
  });
    
  const allCountries = document.querySelectorAll('.countries .options .option');
allCountries[0].classList.add('active');
document.querySelector('.heroText .cityText').innerText = countries[0].place;
document.querySelector('.heroText .cityText').classList.remove('animate');
void document.querySelector('.heroText .cityText').offsetWidth;
document.querySelector('.heroText .cityText').classList.add('animate');
document.querySelector('.heroText .countryText').classList.remove('animate');
void document.querySelector('.heroText .countryText').offsetWidth;
document.querySelector('.heroText .countryText').classList.add('animate');
document.querySelector('.heroText .countryText').innerText = countries[0].title;
document.querySelector('.clientsDesc').innerText = countries[0].desc;
heroContainer.style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${countries[0].image})`;

for (let i = 0; i < allCountries.length; i++) {
  allCountries[i].addEventListener('click', function() {
    allCountries[i].classList.add('active');
    document.querySelector('.heroText .cityText').innerText = countries[i].place;
    document.querySelector('.heroText .countryText').innerText = countries[i].title;
    document.querySelector('.clientsDesc').innerText = countries[i].desc;
    document.querySelector('.heroText .cityText').classList.remove('animate');
    void document.querySelector('.heroText .cityText').offsetWidth;
    document.querySelector('.heroText .cityText').classList.add('animate');
    document.querySelector('.heroText .countryText').classList.remove('animate');
    void document.querySelector('.heroText .countryText').offsetWidth;
    document.querySelector('.heroText .countryText').classList.add('animate');
    heroContainer.style.background = `linear-gradient(to bottom, rgba(150, 246, 150, 0.1), rgba(155, 150, 252, 0.2)), url(${countries[i].image})`;
    Array.prototype.slice.call(allCountries).filter((c) => c !== allCountries[i]).map((cntry => {
      cntry.classList.remove('active');
    }));
  })
}
})