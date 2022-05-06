


import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import { Preloader } from '../components/Preloader';


const Home = () => {
  const [catalog, setCatalog] = useState([])


  useEffect(() => {
    getAllCategories()
      .then(response => setCatalog(response.categories))
  }, [])

  return (
    <>
      {!catalog.length ? <Preloader /> : (
        <CategoryList catalog={catalog}/>
      )}
    </>
  )
}

export default Home