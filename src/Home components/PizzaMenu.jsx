import React from 'react'

const pizzaRecipes=[
  
    {
      "id": 1,
      "name": "Margherita",
      "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      "img": "./images/arsenal.png"
    },
    {
      "id": 2,
      "name": "Pepperoni",
      "description": "Pizza with tomato sauce, mozzarella, and pepperoni",
      "img": "./images/pizza.png "
    },
    {
      "id": 3,
      "name": "hawaiian",
      "description": "Pizza with tomato sauce, cheddar,pineapple and ham",
      "img": "./images/arsenal.png"
    }
  
]

export default function PizzaMenu() {
  return (
    <div className='py-10  bg-green-600'>
       <div className='container mx-auto'>
         {/* header title */}
        <div className='text-center mb-20'> 
        <h1 className='text-4xl font-bold text-orange-600 '>Types Of Pizza</h1>  
        </div>
         {/* the types of pizza */}
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
       {
        pizzaRecipes.map((data,index) =>{
          return (

            <div key={index} className='rounded-2xl bg-green-800 hover:bg-green-600 hover:text-white shadow-xl  max-w-[300px]group relative '>
         {/* image */}
              <div>
              <img src={data.img} alt=""  className='max-w-[400px] block mx-auto transform '/>

              </div>
           {/* text section */}
           <div className='p-4'>
            <h1 className='text-xl  text-orange-600  hover:text-white font-bold text-center'>{data.name}</h1>
            <p className='text-orange-600 text-center  hover:text-white'>{data.description}</p>
            
           </div>

            </div>
          )
        })
      }
     </div>
       </div>
    </div>
  )
}
