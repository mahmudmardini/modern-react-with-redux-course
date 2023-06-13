import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Label 1',
            content: 'Content 1',
        },
        {
            id: '2',
            label: 'Label 2',
            content: 'Content 2',
        },
        {
            id: '3',
            label: 'Label 3',
            content: 'Content 3',
        }
    ];

  return (
    <div>
        <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
