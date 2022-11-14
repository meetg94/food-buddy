import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes, recipesSelector } from '../slices/recipes'
import { Routes, Route, Link } from 'react-router-dom'

function HomePage() {

  const dispatch = useDispatch()

  const { recipes, loading, hasErrors } = useSelector(recipesSelector)

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])


  const renderRecipes = () => {
    if (loading) return <p>Loading Recipes ...</p>
    if (hasErrors) return <p>Cannot Display error 404</p>

    return recipes.map(recipe => 
      <div key={recipe.idMeal}>
        <li className="card w-45 bg-base-100 shadow-xl">
          <figure><img src={recipe.strMealThumb} alt=''/></figure>
          <div className='card-body'>
            <h2 className='card-title'>{recipe.strMeal}</h2>
            <div className='flex flex-row space-x-1 overflow-auto'>
              <div className="badge badge-outline">{recipe.strArea}</div>
              {recipe.strTags ? <div className="badge badge-outline">{recipe.strTags}</div> : ("") }
            </div>
          </div>
        </li>
        
      </div>)
      
  }
  return (
    <div className="grid grid-cols-4 gap-4 pl-0">
        {renderRecipes()}
    </div>
  );
}

export default HomePage;
