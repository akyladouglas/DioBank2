import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Header } from "./components/header";
import { LoginCard } from "./components/login";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <Box minHeight="100vh" backgroundColor="#f3f3f3">
          <Flex
            minHeight="100vh"
            flexDirection="column"
            justifyContent="center"
          >
            <Header />
            <LoginCard />
          </Flex>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;
