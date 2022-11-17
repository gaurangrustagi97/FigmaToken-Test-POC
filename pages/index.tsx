import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import Card from "../components/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import colors from "../tempcolors.json";

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}
