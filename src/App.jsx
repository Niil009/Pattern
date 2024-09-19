import Accordion from "./components/accordion/Accordion";
// import AccordionItem from "./components/accordion/AccordionItem";
// import AccordionTitle from "./components/accordion/AccordionTitle";
// import AccordionContent from "./components/accordion/AccordionContent";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./Place";
import SearchableList from "./components/SearchableList/SearchableList";
const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];
function App() {
  return <main>
    <section>
      <h1>Why to work with us</h1>
      <Accordion className='accordion'>
        <Accordion.item className="accordion-item" id="experience" >
          <Accordion.title className="accordion-item-title">Over 20 years of experience</Accordion.title>
          <Accordion.content className="accordion-item-content ">
            <article>
              <p>You can't go wrong with us</p>
              <p>We are in the busniess of planning higly indivizualized vacatio trip for more than 20 years</p>
            </article>
          </Accordion.content>

        </Accordion.item>
      </Accordion>
      <Accordion className='accordion'>
        <Accordion.item className='accordion-item' id="local-guides">
          <Accordion.title className='accordion-item-title'>
            We are working with local guides
          </Accordion.title>
          <Accordion.content className="accordion-item-content ">
            <p>You can't go wrong with us</p>
            <p>We are in the busniess of planning higly indivizualized vacatio trip for more than 20 years</p>

          </Accordion.content>

        </Accordion.item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item)=>item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList items={['item1', 'item2']} itemKeyFn={(item)=>item}>{
        (item) => item
      }</SearchableList>
    </section>
  </main>
}

export default App;
