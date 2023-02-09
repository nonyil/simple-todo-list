import { KeyboardEvent, useState } from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
}

export function AddArea({ onEnter }: Props) {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <div className='image'>+</div>
      <input 
        type="text"
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={event => setInputText(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}
