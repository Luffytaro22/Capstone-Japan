const mainContainer = document.querySelector('#activities-container');
let count = 1;

const activities = [
  {
    activity: 'Gastronomy',
    type: '日本料理',
    description:
      'The gastronomy of Japan as a national cuisine has evolved, <span class="text-hide"> through the centuries, due to many political, social and resource changes, starting from the Ancient Age, in which </span> most of the cuisine was influenced by Chinese culture.',
    img: 'Images/japanese-food1.jpg',
    alt: 'cuisine',
  },
  {
    activity: 'Writing',
    type: '漢字, ひらがな, カタカナ',
    description:
      'The Japanese script derives from the Chinese script, which was brought to Japan via Korea in the fourth century.',
    img: 'Images/japanese-letter1.jpg',
    alt: 'writing',
  },
  {
    activity: 'Outfit',
    type: '服装',
    description:
      '<span class="text-hide">Daily clothing in Japan is like typical Western clothing, pants and shirts are not new.</span> Some outstanding clothing of traditional clothing can be said to be common in daily life.',
    img: 'Images/japanese-clothes1.jpg',
    alt: 'outfit',
  },
  {
    activity: 'Tea Ceremony',
    type: '抹茶, 茶の湯, 茶事',
    description:
      'The Japanese tea ceremony is a ritual way of preparing green or matcha tea. <span class="text-hide">Influenced by Zen Buddhism, served to a small group of guests in a tranquil setting.</span>',
    img: 'Images/japanese-tea1.jpg',
    alt: 'tea',
  },
  {
    activity: 'Architecture',
    type: '日本建築',
    description:
      '<span class="text-hide">Mostly, the buildings that have survived to this day and that show characteristics of traditional</span> Japanese architecture are castles, Buddhist temples, and Shinto shrines.',
    img: 'Images/japanese-buildings1.jpg',
    alt: 'architecture',
  },
  {
    activity: 'Hanami',
    type: '花見',
    description:
      'Hanami is the Japanese tradition of observing the beauty of flowers<span class="text-hide">, but this word is generally associated with the period when the cherry blossoms are in bloom and when the Japanese flock to parks and gardens to gaze at their blossoms (sakura).</span>',
    img: 'Images/japanese-hanami1.jpg',
    alt: 'hanami',
  },
];

/* Loop through the object */
activities.forEach((activity) => {
  /* Create elements */
  const container = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p1 = document.createElement('p');
  const hr = document.createElement('hr');
  const p2 = document.createElement('p');

  /* Adding classes and attributes */
  container.classList.add('activities');
  img.classList.add('img-activities');
  div.classList.add('div-activities');
  h2.classList.add('h2-activities');
  p1.classList.add('p1-activities');
  p2.classList.add('p2-activities');
  hr.classList.add('bar-activities');

  if (count >= 3) {
    container.classList.add('hide-activities');
  }

  /* Adding the content */
  h2.textContent = activity.activity;
  img.src = activity.img;
  img.alt = activity.alt;
  p1.textContent = activity.type;
  p2.innerHTML = activity.description;

  /* Append the elements */
  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(hr);
  div.appendChild(p2);
  container.appendChild(img);
  container.appendChild(div);
  mainContainer.appendChild(container);
  count += 1;
});

/* Select the more button */
const moreButton = document.querySelector('#more-button button');
const iDown = document.querySelector('#more-button i');
const iUp = document.createElement('i');
iUp.classList.add('fa-solid', 'fa-chevron-up');
const activity3 = document.querySelector('.activities:nth-child(3)');
const activity4 = document.querySelector('.activities:nth-child(4)');
const activity5 = document.querySelector('.activities:nth-child(5)');
const activity6 = document.querySelector('.activities:nth-child(6)');

/* A function to show the hiden activities */
function showMore() {
  activity3.style.display = 'flex';
  activity4.style.display = 'flex';
  activity5.style.display = 'flex';
  activity6.style.display = 'flex';

  moreButton.textContent = 'LESS';
  moreButton.appendChild(iUp);

  /* Removes and adds the event listeners */
  moreButton.removeEventListener('click', showMore);

  /* A function that hides the activities */
  function hideMore() {
    activity3.style.display = 'none';
    activity4.style.display = 'none';
    activity5.style.display = 'none';
    activity6.style.display = 'none';

    moreButton.textContent = 'MORE';
    moreButton.appendChild(iDown);

    moreButton.removeEventListener('click', hideMore);
    moreButton.addEventListener('click', showMore);
  }

  moreButton.addEventListener('click', hideMore);
}

moreButton.addEventListener('click', showMore);
