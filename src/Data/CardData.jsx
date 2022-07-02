import katieImage from '../images/katie.jpeg';

const cards = [
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Online' },
    desc: 'should be online with spots',
    price: 'zero',
    availableSpots: 10,
  },
  {
    image: katieImage,
    rating: { stars: 3.5, totalratings: 1, location: 'India' },
    desc: 'should be zero',
    price: 'zero',
    availableSpots: 0,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Pakistan' },
    desc: 'should be zero',
    price: 'Infinite',
    availableSpots: 0,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Online' },
    desc: 'using Data/Card.js',
    price: 'Infinite',
    availableSpots: 30,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Online' },
    desc: 'using Data/Card.js',
    price: 'Infinite',
    availableSpots: 0,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Pakistan' },
    desc: 'using Data/Card.js',
    price: 'Infinite',
    spots: 3,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Pakistan' },
    desc: 'using Data/Card.js',
    price: 'Infinite',
    spots: 3,
  },
  {
    image: katieImage,
    rating: { stars: 4.5, totalratings: 7, location: 'Pakistan' },
    desc: 'using Data/Card.js',
    price: 'Infinite',
    spots: 10,
  },
];

export default cards;
