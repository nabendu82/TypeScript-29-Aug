import { useState } from 'react';
import './App.css';
import AddToPeople from './components/AddToPeople';
import PeopleList from './components/PeopleList';

function App() {
  const [people, setPeople] = useState<{name: string; age: number; img: string; note: string}[]>([
    {
      name: 'John',
      age: 40,
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      note: 'Allergic to prawns'
    },
    {
      name: 'Mary',
      age: 25,
      img: 'https://randomuser.me/api/portraits/women/22.jpg',
      note: 'Allergic to eggs'
    }
  ])

  return (
    <div className="App">
      <h1>People List - Birthday Party</h1>
      <PeopleList people={people} />
      <AddToPeople people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
