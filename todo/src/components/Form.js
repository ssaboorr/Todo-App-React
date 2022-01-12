import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Card from "./Card";

const TaskInput = () => {
  const [todos, setTodos] = useState([]);
  const inputFromRef = useRef();
  const toast = useToast();

  const addTask = (e) => {
    e.preventDefault();
    if (e.target.elements.addTask.value == "") {
      toast({
        title: "Empty Task.",
        description: "Task Cannot be Empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setTodos([...todos, e.target.elements.addTask.value]);
      e.target.elements.addTask.value = "";
      toast({
        title: "Task Added.",
        description: "We've Added your  Task in the list.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }

    // console.log(todos);
  };

  const editTask = (e, task) => {
    console.log("clickde");
  };

  const deleteTask = (task) => setTodos(todos.filter((todo) => todo != task));
  return (
    <Flex p="10" m="5" justify="center" flexDirection="column" wrap="wrap">
      <FormControl>
        <form onSubmit={addTask}>
          <Input
            ref={inputFromRef}
            type="text"
            placeholder="Add New Task"
            name="addTask"
          />
          <Button m="3" type="submit">
            Add Task
          </Button>
        </form>
      </FormControl>
      <Flex flexDirection="column" justify="center" alignItems="center">
        {todos.map((task) => (
          <Card Efn={editTask} Dfn={deleteTask} task={task} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TaskInput;
