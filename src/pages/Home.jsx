


import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';


const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const { pathname, search } = useLocation()
  const navigate = useNavigate()


  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
    navigate(pathname + `?search=${str}`)
  }
  console.log(search || 1);
  useEffect(() => {
    getAllCategories()
      .then(response => {
        setCatalog(response.categories)

        setFilteredCatalog(search ? (
          response.categories.filter(item => {
            return item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
          })
        ) : response.categories)
      })
  }, [])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  )
}

export default Home