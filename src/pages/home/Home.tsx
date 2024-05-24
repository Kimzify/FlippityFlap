import AccordionDetails from "../../components/AccordionDetails";
import Accordion from "../../components/Accordoin";
import AccordoinItem from "../../components/AccordoinItem";

const Home = () => {
  return (
    <Accordion>
      <AccordoinItem summary={<p>من یه اکاردئون خوشگل هستم</p>} itemKey="1">
        <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
        <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
        <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
      </AccordoinItem>

      <AccordoinItem summary={<p>من یه اکاردئون خوشگل هستم</p>} itemKey="2">
        <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
      </AccordoinItem>

      <AccordoinItem summary={<p>من یه اکاردئون خوشگل هستم</p>} itemKey="3">
        <AccordionDetails>من جزییات یک اکارئون خوشگل هستم</AccordionDetails>
      </AccordoinItem>
    </Accordion>
  );
};

export default Home;
