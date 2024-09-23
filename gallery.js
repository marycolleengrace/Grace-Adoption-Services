const photoGallery = document.getElementById('photo-gallery');

const photos = [
    'images/dog1.jpg',
    'images/dog2.jpg',
    'images/dog3.jpg',
    'images/dog4.jpg',
    'images/dog5.jpg',
    'images/dog6.jpg',
    'images/dog7.jpg',
    'images/dog8.jpg',
    'images/dog9.jpg',
    'images/dog10.jpg'
];

const captionTexts = [
    'Meet Max, a playful pup!',
    'Bella loves to cuddle!',
    'Luna enjoys long walks.',
    'Charlie is a friendly dog.',
    'Daisy loves chasing toys.',
    'Buddy is a curious puppy.',
    'Rocky is a loyal friend.',
    'Sadie loves to play fetch.',
    'Milo enjoys nap time.',
    'Coco is always ready for adventure.'
];

const descTexts = [
    'Max is 3 years old and loves to play with kids.',
    'Bella is 2 years old and enjoys snuggling with her family.',
    'Luna is 4 years old and loves to explore the outdoors.',
    'Charlie is 5 years old and enjoys being petted.',
    'Daisy is 1 year old and is very energetic.',
    'Buddy is 6 months old and loves to chase after strings.',
    'Rocky is 4 years old and is very protective of his family.',
    'Sadie is 3 years old and loves to run in the park.',
    'Milo is 2 years old and loves to play with other pets.',
    'Coco is 1 year old and loves to go on adventures.'
];

const openCaptionTag = '<span class="caption">';
const closeCaptionTag = '</span>';
const openDescTag = '<span class="description">';
const closeDescTag = '</span>';

for (let i = 0; i < photos.length; i++) {
    const listItem = document.createElement('li');
    listItem.id = `photo${i + 1}`;
    listItem.className = 'photo';

    listItem.innerHTML = `
        <img src="${photos[i]}" alt="Photo ${i + 1}" width="200" height="200">
        ${openCaptionTag}${captionTexts[i]}${closeCaptionTag}
        ${openDescTag}${descTexts[i]}${closeDescTag}
    `;

    photoGallery.appendChild(listItem);
}
