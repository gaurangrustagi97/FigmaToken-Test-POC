import { Flex } from "@chakra-ui/react";
import { colorsBrand } from "../utils";

export default function Header() {
  return (
    <Flex
      w="full"
      minH="62px"
      bgColor={colorsBrand["background1"]}
      align="center"
      justify="center"
    />
  );
}
