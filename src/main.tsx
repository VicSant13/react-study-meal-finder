import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  //ChakraProvider funciona como un wrapper para que pueda ser utilizado en toda la aplicación
  <ChakraProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>,
)
