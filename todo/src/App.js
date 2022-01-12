import Header from './components/Header'
import { ChakraProvider, Flex } from "@chakra-ui/react";
import TaskInput from './components/Form'


const App = () => {
  return (
    <ChakraProvider>
      <Header/>
      <hr/>
      <Flex justify='center' alignItems='center' >
          <TaskInput/>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
