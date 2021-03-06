const URL = process.env.PUBLIC_URL;

const images = [
  `${URL}/images/trailer.png`,

  `${URL}/images/front/gloss-med-gray.png`,
  `${URL}/images/front/gloss-orange.png`,
  `${URL}/images/front/gloss-white.png`,
  `${URL}/images/front/matte-black.png`,
  `${URL}/images/front/matte-charcoal.png`,
  `${URL}/images/front/matte-dark-blue.png`,
  `${URL}/images/front/matte-elder-white.png`,
  `${URL}/images/front/matte-greige.png`,
  `${URL}/images/front/matte-red.png`,
  `${URL}/images/front/non-gelcoat.png`,

  `${URL}/images/rear/gloss-med-gray.png`,
  `${URL}/images/rear/gloss-orange.png`,
  `${URL}/images/rear/gloss-white.png`,
  `${URL}/images/rear/matte-black.png`,
  `${URL}/images/rear/matte-charcoal.png`,
  `${URL}/images/rear/matte-dark-blue.png`,
  `${URL}/images/rear/matte-elder-white.png`,
  `${URL}/images/rear/matte-greige.png`,
  `${URL}/images/rear/matte-red.png`,
  `${URL}/images/rear/non-gelcoat.png`,
  `${URL}/images/full/gloss-med-gray.png`,
  `${URL}/images/full/gloss-orange.png`,
  `${URL}/images/full/gloss-white.png`,
  `${URL}/images/full/matte-black.png`,
  `${URL}/images/full/matte-charcoal.png`,
  `${URL}/images/full/matte-dark-blue.png`,
  `${URL}/images/full/matte-elder-white.png`,
  `${URL}/images/full/matte-greige.png`,
  `${URL}/images/full/matte-red.png`,
  `${URL}/images/full/non-gelcoat.png`,

  `${URL}/images/full/gloss-med-gray/gloss-med-gray-gloss-orange.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-gloss-white.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-black.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-charcoal.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-dark-blue.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-elder-white.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-greige.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-matte-red.png`,
  `${URL}/images/full/gloss-med-gray/gloss-med-gray-non-gelcoat.png`,

  `${URL}/images/full/gloss-orange/gloss-orange-gloss-med-gray.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-gloss-white.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-black.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-charcoal.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-dark-blue.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-elder-white.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-greige.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-matte-red.png`,
  `${URL}/images/full/gloss-orange/gloss-orange-non-gelcoat.png`,

  `${URL}/images/full/gloss-white/gloss-white-gloss-med-gray.png`,
  `${URL}/images/full/gloss-white/gloss-white-gloss-orange.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-black.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-charcoal.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-dark-blue.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-elder-white.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-greige.png`,
  `${URL}/images/full/gloss-white/gloss-white-matte-red.png`,
  `${URL}/images/full/gloss-white/gloss-white-non-gelcoat.png`,

  `${URL}/images/full/matte-black/matte-black-gloss-med-gray.png`,
  `${URL}/images/full/matte-black/matte-black-gloss-orange.png`,
  `${URL}/images/full/matte-black/matte-black-gloss-white.png`,
  `${URL}/images/full/matte-black/matte-black-matte-charcoal.png`,
  `${URL}/images/full/matte-black/matte-black-matte-dark-blue.png`,
  `${URL}/images/full/matte-black/matte-black-matte-elder-white.png`,
  `${URL}/images/full/matte-black/matte-black-matte-greige.png`,
  `${URL}/images/full/matte-black/matte-black-matte-red.png`,
  `${URL}/images/full/matte-black/matte-black-non-gelcoat.png`,

  `${URL}/images/full/matte-charcoal/matte-charcoal-gloss-med-gray.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-gloss-orange.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-gloss-white.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-matte-black.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-matte-dark-blue.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-matte-elder-white.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-matte-greige.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-matte-red.png`,
  `${URL}/images/full/matte-charcoal/matte-charcoal-non-gelcoat.png`,

  `${URL}/images/full/matte-dark-blue/matte-dark-blue-gloss-med-gray.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-gloss-orange.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-gloss-white.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-matte-black.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-matte-charcoal.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-matte-elder-white.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-matte-greige.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-matte-red.png`,
  `${URL}/images/full/matte-dark-blue/matte-dark-blue-non-gelcoat.png`,

  `${URL}/images/full/matte-elder-white/matte-elder-white-gloss-med-gray.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-gloss-orange.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-gloss-white.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-matte-black.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-matte-charcoal.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-matte-dark-blue.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-matte-greige.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-matte-red.png`,
  `${URL}/images/full/matte-elder-white/matte-elder-white-non-gelcoat.png`,

  `${URL}/images/full/matte-greige/matte-greige-gloss-med-gray.png`,
  `${URL}/images/full/matte-greige/matte-greige-gloss-orange.png`,
  `${URL}/images/full/matte-greige/matte-greige-gloss-white.png`,
  `${URL}/images/full/matte-greige/matte-greige-matte-black.png`,
  `${URL}/images/full/matte-greige/matte-greige-matte-charcoal.png`,
  `${URL}/images/full/matte-greige/matte-greige-matte-dark-blue.png`,
  `${URL}/images/full/matte-greige/matte-greige-matte-elder-white.png`,
  `${URL}/images/full/matte-greige/matte-greige-matte-red.png`,
  `${URL}/images/full/matte-greige/matte-greige-non-gelcoat.png`,

  `${URL}/images/full/matte-red/matte-red-gloss-med-gray.png`,
  `${URL}/images/full/matte-red/matte-red-gloss-orange.png`,
  `${URL}/images/full/matte-red/matte-red-gloss-white.png`,
  `${URL}/images/full/matte-red/matte-red-matte-black.png`,
  `${URL}/images/full/matte-red/matte-red-matte-charcoal.png`,
  `${URL}/images/full/matte-red/matte-red-matte-dark-blue.png`,
  `${URL}/images/full/matte-red/matte-red-matte-elder-white.png`,
  `${URL}/images/full/matte-red/matte-red-matte-greige.png`,
  `${URL}/images/full/matte-red/matte-red-non-gelcoat.png`,

  `${URL}/images/full/non-gelcoat/non-gelcoat-gloss-med-gray.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-gloss-orange.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-gloss-white.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-black.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-charcoal.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-dark-blue.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-elder-white.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-greige.png`,
  `${URL}/images/full/non-gelcoat/non-gelcoat-matte-red.png`,
];

export default images;
