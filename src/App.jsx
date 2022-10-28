import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';


import { Container, ToDoList, Button, Input, List, Ul, ListItem, Trash, Check, Woitem } from "./style"

function App() {


  const [list, setList] = useState([]);

  const [inputtask, setInputTask] = useState('');

  function inputchange(event) {

    setInputTask(event.target.value)

  }

  function buttonclick() {
    if ((inputtask) && (list.length < 6)) {
      setList([...list, { id: uuid(), task: inputtask, finished: false }])
    }    
  }

  function finishtask(id) {

    const newList = list.map(item => (
      item.id == id ? (item.finished == true ? { ...item, finished: false } : { ...item, finished: true }) : item

    ))

    setList(newList)
  }

  function removetask(id) {

    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputchange} placeholder="Digite sua tarefa" />
        <Button onClick={buttonclick}>Adicionar</Button>
        <Ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id} >
                <Check onClick={() => finishtask(item.id)} />
                <List >{item.task}</List>
                <Trash onClick={() => removetask(item.id)} />
              </ListItem>
            ))
          ) : (<Woitem>Insira no máximo 6 itens á lista.</Woitem>)
          }
        </Ul>
      </ToDoList>
    </Container>
  )
}

export default App