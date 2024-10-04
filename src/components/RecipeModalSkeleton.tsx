import { Container, SkeletonText } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const RecipeModalSkeleton = (props: Props) => {
  return (
    <>
    <Container>
        <SkeletonText spacing="4" mt='4' mb="4" noOfLines={1}  skeletonHeight={8}/>
        <SkeletonText spacing="4" mt='1' borderRadius={200} noOfLines={1}  skeletonHeight={280}/>
        <SkeletonText mt='4' noOfLines={5} spacing='4'/>
    </Container>
    </>
  )
}

export default RecipeModalSkeleton