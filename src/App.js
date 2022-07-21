import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';
import CardsList from './components/CardsList/CardsList';

function App() {
  const items = [
    {
      title: 'title1',
      text: 'some interesting text',
      imgLink: 'https://i.ytimg.com/vi/M5-93jsve2M/maxresdefault.jpg',
      videoLink: 'https://www.youtube.com/watch?v=s0JHDfEk_7c'
    },
    {
      title: 'title2',
      text: 'lkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaf',
      imgLink: 'https://i.ytimg.com/vi/M5-93jsve2M/maxresdefault.jpg',
      videoLink: 'https://www.youtube.com/watch?v=s0JHDfEk_7c'

    },
    {
      title: 'title3',
      text: 'lkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaf',
      imgLink: 'https://i.ytimg.com/vi/M5-93jsve2M/maxresdefault.jpg',
      videoLink: 'https://www.youtube.com/watch?v=s0JHDfEk_7c'
    },
    {
      title: 'title4',
      text: 'lkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaf',
      imgLink: 'https://i.ytimg.com/vi/M5-93jsve2M/maxresdefault.jpg',
      videoLink: 'https://www.youtube.com/watch?v=s0JHDfEk_7c'
    },
    {
      title: 'title5',
      text: 'lkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaflkasmdkasfaf',
      imgLink: 'https://i.ytimg.com/vi/M5-93jsve2M/maxresdefault.jpg',
      videoLink: 'https://www.youtube.com/watch?v=s0JHDfEk_7c'
    },
  ]

  return (
    <div className="App">
      <CardsList className='CardsList' items={items}>
        {items => items.map((item, idx) => <Card key={idx} item={item}></Card>)}
      </CardsList>
    </div>
  );
}

export default App;
