import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useEffect, useState } from "react";
import axios from "axios";

import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'

const url = `${baseUrl}list.php?c=list`;

const makeMealUrl = (category:Category) =>{
  return `${baseUrl}filter.php?c=${category.strCategory}`  
};

const defaultCategory = {
  strCategory:"Dessert"
}

function App() {
  const {isOpen,onOpen,onClose} = useDisclosure();

  const [selectedCategory,setSelectedCategory] = useState<Category>(defaultCategory)
  //obtiene todas las categorias
  const {loading,data} = useHttpData<Category>(url);


  //obtiene todos los platillos de una categoría, el destructuring extrae las funciones que tiene el hook internamente,
  // en pocas palabras, instancia un objeto y para que despues puedas utilizar los metodos...
  const { loading:loadingMeal, data:dataMeal,setData:setMeals,setLoading:setLoadingMeal} = useHttpData<Meal>( makeMealUrl( defaultCategory) );
  
  const searchApi = ( searchForm:SearchForm ) => {
    const url = `${baseUrl}search.php?s=${searchForm.search}`
    setLoadingMeal(true)
    axios.get<{meals:Meal[]}>(url)
    .then(({data})=>setMeals(data.meals))
    .finally(()=>setLoadingMeal(false))    
  }

  //destructuring del Hook, obtiene las funciones para que puedan ser usadas en el componente jerarquico mayor
  const {fetch,loading:loadingMealDetails,data:mealDetailData} = useFetch<MealDetails>();
  const searchMealDetails = (meal:Meal)=>{
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
  }

/*
* CUSTOM HOOK
*/
  return (
    <>
     <Grid
        templateAreas = {`"header header"
                          "nav main"`}
        gridTemplateRows = {'60px 1fr'}
        gridTemplateColumns = {{sm: `0 1fr`,md: `250px 1fr`}}
        fontSize={14}    
      >
        <GridItem  boxShadow="lg" pt='2' zIndex="1" pos="sticky" top="0" bg='white' area={'header'}>
          <Header onSubmit={searchApi}/>
        </GridItem>
        <GridItem pos="sticky" top="60px" left="0" p='5'  area={'nav'} height="calc(100vh - 60px)" overflowY="auto">
          <SideNav categories={data} loading={loading} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </GridItem>
        <GridItem p='4' bg='gray.100' area={'main'}>
          <MainContent  openRecipe={searchMealDetails} loading={loadingMeal} meals={dataMeal}/>
        </GridItem>
      </Grid>
      <RecipeModal isOpen={isOpen} onClose={onClose} loading={loadingMealDetails} data={mealDetailData}/>
    </>
  )
}

export default App
