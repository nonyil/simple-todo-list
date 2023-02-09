import { useState } from 'react';
import { Item } from './types/Item'
import * as C from './App.styles';

import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea/Index';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar leite', done: true }
  ]);

  const handleAddTaks = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea
          onEnter={handleAddTaks}
        /> 

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;
