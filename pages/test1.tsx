import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import colors from "../tempcolors.json";

export default function Home() {
  return (
    <Accordion>
      <AccordionItem
        bg="core.white"
        borderY={0}
        rounded={"4px"}
        boxShadow="md"
        bgColor={colors.semantic.fg.default.value}
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <Box ml={2} flex="1" textAlign="left">
                <Heading
                  fontFamily="funpass.heading"
                  textTransform="uppercase"
                  fontSize="16px"
                >
                  "example"
                </Heading>
              </Box>
            </AccordionButton>
            <AccordionPanel p={0}>
              <Text>"example"</Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
