import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react"
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import RecipeModalContent from "./RecipeModalContent";
import { MealDetails } from "../types";

type Props = {
  isOpen: boolean,
  onClose:()=>void;
  loading:boolean;
  data: MealDetails | undefined;
}


const RecipeModal = ({isOpen,onClose,loading,data}: Props) => {

  return (
    <>
           
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            
            {loading ? <RecipeModalSkeleton/>: data && <RecipeModalContent data={data}/>}
            
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>              
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  )
}

export default RecipeModal