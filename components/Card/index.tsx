import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <Box padding="0px" my="80px">
      <Container padding="0px">
        <Box bg="#ADD8E6" borderRadius="32px" overflow="hidden">
          <Image
            alt="image"
            width="100%"
            height="192px"
            src={"https://picsum.photos/id/396/460/257"}
          />
          <Stack spacing="6" p={{ base: "5", md: "6" }}>
            <Text
              fontFamily="SignPainter HouseSlant"
              fontSize="50px"
              fontWeight="medium"
              color="white"
              lineHeight="90%"
            >
              Example
            </Text>
            <Text
              color="white"
              fontFamily="Albert Sans"
              fontSize="14px"
              lineHeight="140%"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis ligula vel risus auctor, nec sollicitudin massa porta.
              Aliquam vehicula urna in justo facilisis pharetra. Praesent
              ultricies libero vel nulla feugiat feugiat. Etiam urna massa,
              lobortis vitae metus eget, commodo dignissim orci. Duis a
              vestibulum risus, ut fringilla turpis. Aliquam lacus tortor,
              dictum in ante quis, blandit dapibus risus. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Nam nisi augue, imperdiet
              at velit id, ullamcorper mattis risus
            </Text>
            <Button width="136px" bgColor={"#FFFF00"}>
              Button
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
