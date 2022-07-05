import { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAddTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
        handleAddTodo(e)
        inputRef.current?.blur()
    }}>
        <input type='text'
            ref={inputRef} 
            placeholder='Enter a task' 
            className='input__box'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField