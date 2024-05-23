import AccordionDetails from "../../components/AccordionDetails";
import AccordionSummary from "../../components/AccordionSummary";
import Accordion from "../../components/Accordoin/Accordion";

const Home = () => {
  return (
    <Accordion>
      <AccordionSummary>من یه اکاردئون خوشگل هستم</AccordionSummary>
      <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
    </Accordion>
  );
};

export default Home;
