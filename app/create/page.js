import React from 'react';

// Sample card data
const cardsData = [
  { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2.' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
  { id: 4, title: 'Card 4', content: 'This is the content of card 4.' },
  { id: 5, title: 'Card 5', content: 'This is the content of card 5.' },
  // Add more card data as needed
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white shadow-lg p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
