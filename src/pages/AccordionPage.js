import Accordion from '../components/Accordion'

function AccordionPage() {
  let accordions = [
    {
      id: 'dkfjd343',
      title: "What is Javascript?",
      content: "Javascript is bla bla bla and therefore bla bla bla Javascript is bla bla bla and therefore bla bla bla"
    },
    {
      id: 'j5h4j',
      title: "What is CSS?",
      content: "CSS is bla bla bla and therefore bla bla bla Javascript is bla bla bla and therefore bla bla bla"
    },
    {
      id: 'dfd87',
      title: "What is React js?",
      content: "React js is bla bla bla and therefore bla bla bla Javascript is bla bla bla and therefore bla bla bla"
    },
    {
      id: 'dfj83 ',
      title: "What is Html?",
      content: "Html is bla bla bla and therefore bla bla bla Javascript is bla bla bla and therefore bla bla bla"
    }
  ]


  return (
    <div>
      <Accordion items={accordions}/>
    </div>

  );  
}

export default AccordionPage;
