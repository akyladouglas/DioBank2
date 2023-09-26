import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import { Login } from "../../services/login";
import { Button } from "../button";

export const LoginCard = () => {
  return (
    <Center minHeight="50%" minWidth="50%">
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="25px"
        padding="15px"
        width={[
          "100%", // 0-30em
          "75%", // 30em-48em
          "50%", // 48em-62em
          "25%", // 62em+
        ]}
      >
        <Flex flexDirection="column" gap="15px">
          <Box>
            <Text fontSize="xl" textAlign="center">
              Bem vindo ao DioBank
            </Text>
            <Text fontSize="sm" textAlign="center">
              Faça o login para prosseguir
            </Text>
          </Box>

          <Box>
            <Flex flexDirection="column" gap="10px">
              <Input placeholder="Digite o email" />
              <Input placeholder="Digite a senha" />

              <Center>
                <Button
                  onClick={Login}
                  colorScheme="teal"
                  size="sm"
                  width="100%"
                >
                  Entrar
                </Button>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
