import React from 'react';

const foodRecipes = [
 ,
  {
    "id": 2,
    
    "name": "Chicken Curry",
    "link":"https://www.food.com/recipe/a-taste-of-africa-kenyan-chicken-curry-367586",
    "description": "Delicious curry made with tender chicken pieces and aromatic spices",
    "img": "./images/chicken.jpeg"
  },
  {
    "id": 3,
    "name": "Caesar Salad",
     "link":"https://cookpad.com/ke/recipes/4853856-caesar-salad",
    "description": "Fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
    "img": "./images/salad.jpeg"
  }
];
export default function FoodMenu() {
  return (
    <div className='py-20 bg-white'>
      <div className='container mx-auto'>
        {/* Header title */}
        <div className='text-center mb-20'>
          <h1 className='text-4xl font-bold text-green-600'>Types Of Food</h1>
        </div>
        {/* The types of food */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-14 md:gap-5 place-items-center'>
          {foodRecipes.map((data, index) => (
            <a href={data.link} key={index} className='w-full'>
            <div className='rounded-lg bg-white hover:bg-green-300 hover:text-white shadow-xl w-full h-96'>
              {/* Image */}
              <div className='h-3/4 flex justify-center items-center'>
                <img src={data.img} alt={data.name} className='pt-8 w-auto h-full object-contain' />
              </div>
              {/* Text section */}
              <div className='p-4'>
                <h1 className='text-xl text-green-600 hover:text-white font-bold text-center'>{data.name}</h1>
                <p className='text-green-600 text-center hover:text-white'>{data.description}</p>
              </div>
            </div>
          </a>
          ))}
        </div>
      </div>
    </div>
  );
}


