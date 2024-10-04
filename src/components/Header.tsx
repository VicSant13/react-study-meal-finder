import { InputGroup, InputLeftElement, Input, Container, Button } from "@chakra-ui/react"
import { useForm, useFormState } from "react-hook-form"
import {IoMdSearch} from "react-icons/io"
import { SearchForm } from "../types";


type Props = {
  onSubmit: ( data: SearchForm ) => void;
}

const Header = ({onSubmit}: Props) => {

  const {register,formState,handleSubmit} =useForm();
  return (
    <>
    <Container mt="1" maxW="3xl">
      <form onSubmit={ handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
          <IoMdSearch color="gray"  />
          </InputLeftElement>
          <Input
            mr="2"
            focusBorderColor={!!formState.errors.search ? 'crimson' : 'blue.400'}
            isInvalid={!!formState.errors.search}
            {...register('search',{required:true})}
            type='text'
            placeholder="Intenta con 'Chicken' o 'Beans'..."
          />
          <Button type="submit" color="white" bgColor="blue.400">Buscar</Button>
        </InputGroup>
      </form>
    </Container>
    </>
  )
}

export default Header