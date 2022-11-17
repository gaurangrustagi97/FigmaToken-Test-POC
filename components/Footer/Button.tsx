import { Button } from "@chakra-ui/react";

export default function CustomButton() {
  return (
    <Button
      maxWidth="360px"
      py="10px"
      px="32px"
      flexGrow={1}
      borderRadius={{ base: 0, lg: "md" }}
      mx="auto"
      bgColor="app.action-1"
      height={"54px"}
    >
      Example
    </Button>
  );
}
