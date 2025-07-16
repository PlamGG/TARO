import { cards } from '../data/cards';

export function draw_cards(num_cards) {
  const drawn_cards = [];
  const deck = [...cards];

  for (let i = 0; i < num_cards; i++) {
    const random_index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(random_index, 1)[0];
    drawn_cards.push(card);
  }

  return drawn_cards;
}

export function getMeaning(card, readingType) {
  if (card && card.meaning && card.meaning[readingType]) {
    return card.meaning[readingType];
  }
  return card.meaning.general;
}
