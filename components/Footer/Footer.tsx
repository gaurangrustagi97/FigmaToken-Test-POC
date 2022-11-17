import { Flex } from "@chakra-ui/react";
import { colorsBrand } from "../../utils";
import CustomButton from "./Button";

export default function Footer() {
  return (
    <Flex
      direction={{
        base: "column",
        lg: "row",
      }}
      zIndex={15}
      bgColor={colorsBrand["action1"]}
      filter={`drop-shadow(0px -1px 4px rgba(13, 14, 15, 0.06)) drop-shadow(0px -6px 16px rgba(13, 14, 15, 0.08))`}
    >
      <Flex
        grow={1}
        order={{
          base: 1,
          lg: 0,
        }}
        py={{
          base: 0,
          lg: 5,
        }}
        height={{
          base: "54px",
          lg: "86px",
        }}
        justifyContent="center"
      >
        <CustomButton />
      </Flex>
    </Flex>
  );
}
