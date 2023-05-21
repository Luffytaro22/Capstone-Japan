const mainContainer = document.querySelector('#activities-container');

const activities = [
  {
    activity: 'Gastronomy',
    type: '日本料理',
    description:
      'The gastronomy of Japan as a national cuisine has evolved, <span class="text-hide"> through the centuries, due to many political, social and resource changes, starting from the Ancient Age, in which </span> most of the cuisine was influenced by Chinese culture.',
    img: 'Images/japanese-food.jpg',
    alt: 'cuisine',
  },
  {
    activity: 'Writing',
    type: '漢字, ひらがな, カタカナ',
    description:
      'The Japanese script derives from the Chinese script, which was brought to Japan via Korea in the fourth century.',
    img: 'Images/japanese-letter.jpg',
    alt: 'writing',
  },
  {
    activity: 'Outfit',
    type: '服装',
    description:
      '<span class="text-hide">Daily clothing in Japan is like typical Western clothing, pants and shirts are not new.</span> Some outstanding clothing of traditional clothing can be said to be common in daily life.',
    img: 'Images/japanese-clothes.jpg',
    alt: 'outfit',
  },
  {
    activity: 'Tea Ceremony',
    type: '抹茶, 茶の湯, 茶事',
    description:
      'The Japanese tea ceremony is a ritual way of preparing green or matcha tea. <span class="text-hide">Influenced by Zen Buddhism, served to a small group of guests in a tranquil setting.</span>',
    img: 'Images/japanese-tea.jpg',
    alt: 'tea',
  },
  {
    activity: 'Architecture',
    type: '日本建築',
    description:
      '<span class="text-hide">Mostly, the buildings that have survived to this day and that show characteristics of traditional</span> Japanese architecture are castles, Buddhist temples, and Shinto shrines.',
    img: 'Images/japanese-buildings.jpg',
    alt: 'architecture',
  },
  {
    activity: 'Hanami',
    type: '花見',
    description:
      'Hanami is the Japanese tradition of observing the beauty of flowers<span class="text-hide">, but this word is generally associated with the period when the cherry blossoms are in bloom and when the Japanese flock to parks and gardens to gaze at their blossoms (sakura).</span>',
    img: 'Images/japanese-hanami.jpg',
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
});
