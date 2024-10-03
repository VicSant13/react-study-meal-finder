import { Category } from '../types'
import { Box, Heading, Link, SkeletonText, VStack } from '@chakra-ui/react'

type Props = {
  categories:Category[],
  loading:boolean,
  selectedCategory:Category;
  setSelectedCategory:(category:Category)=>void;
}

const selectedProps = {
  bgColor:"blue.400",
  color:"white",
  fontWeight:"bold",
  marginRight:"16px"
}
const SideNav = ({loading,categories,selectedCategory,setSelectedCategory}: Props) => {

  return loading ? (<SkeletonText mt='1' noOfLines={8} spacing='6' skeletonHeight='2'/>) : (
    <>
    <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4} py={2}>CATEGORIAS</Heading>
    <VStack
      align='stretch'
    >
      {categories.map((category)=>(
                <Link 
                onClick={()=>setSelectedCategory(category)}
                  px={2}
                  py={1}
                  borderRadius={5}
                  key={category.strCategory}
                  _hover={{textDecoratio:"none"}}
                  {...(selectedCategory.strCategory == category.strCategory && selectedProps)}
                >
                    {category.strCategory}
                </Link>
      ))}
      </VStack>
    </>
  )
}

export default SideNav