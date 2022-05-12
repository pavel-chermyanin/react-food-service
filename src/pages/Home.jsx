


import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';


const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [filteredCatalog, setFilteredCatalog] = useState([])

  const {pathname, search} = useLocation()
  const {push} = useHistory()
  console.log(pathname, search);


  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
    push({
      pathname,
      search: `?search=${str}`
    })
  }

  useEffect(() => {
    getAllCategories()
      .then(response => {
        setCatalog(response.categories)
        setFilteredCatalog(response.categories)
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