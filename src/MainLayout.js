import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "./theme";
import { Navbar } from "./components/navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";
import {ScreenContext} from './context/screen/screenContext'

export const MainLayout = () => {
 //  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId } = useContext(ScreenContext);
  // const [todoId, setTodoId] = useState(null);
  // const [todos, setTodos] = useState([])

  /* const addTodo = title => { 
 
        setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          title
        }    
      ])
      } */

  //  const removeTodo = id => {
  //    const todo = todos.find( t => t.id === id )
  //    Alert.alert(
  //      'Удаление элемента',
  //      `Вы действительно хотите удалить "${todo.title}"?`,
  //      [
  //        {
  //          text: 'Отмена',
  //          style: 'cancel'
  //        },
  //        {
  //          text: 'Удалить',
  //          style: 'destructive',
  //          onPress: () => {
  //            setTodoId(null)
  //            setTodos(prev => prev.filter(todo => todo.id !==id))
  //        }
  //      }
  //      ],
  //      { cancelable: false }
  //    )
  //  }

  // const updateTodo = (id, title) => {
  //   setTodos(old => old.map(todo => {
  //     if (todo.id === id) {
  //       todo.title = title
  //     }
  //     return todo
  //   }))
  // }

  // let content = (
  //   <MainScreen/>
  // );
  //
  // if (todoId) {
  //   content = (
  //     <TodoScreen
  //     />
  //   );
  // }

  return (
    <View style={styles.wrapper}>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1
  },
  wrapper: {
    flex: 1
  }
});
