import { Grid, GridItem } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useEffect, useState } from "react";
import axios from "axios";

import { Category, Meal } from "./types";
import useHttpData from "./hooks/useHttpData";

const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const makeMealUrl = (category:Category) =>{
  return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`  
};

const defaultCategory = {
  strCategory:"Dessert"
}

function App() {
  
  const [selectedCategory,setSelectedCategory] = useState<Category>(defaultCategory)
  //obtiene todas las categorias
  const {loading,data} = useHttpData<Category>(url);
  //obtiene todos los platillos de una categoría
  const { loading:loadingMeal, data:dataMeal} = useHttpData<Meal>( makeMealUrl( defaultCategory) );


  console.log(dataMeal)


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
          <Header/>
        </GridItem>
        <GridItem pos="sticky" top="60px" left="0" p='5'  area={'nav'} height="calc(100vh - 60px)" overflowY="auto">
          <SideNav categories={data} loading={loading} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </GridItem>
        <GridItem p='4' bg='gray.100' area={'main'}>
          <MainContent loading={loadingMeal} meals={dataMeal}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
