import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [newTask, setNewTask] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleAddTask = () => {
    console.log(taskList, newTask)
    newTask && setTaskList([...taskList, newTask])
    setNewTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'>

        {/* {console.log(taskList)} */}
        {taskList.map((task, index) => {
          return <Task
            key={index}
            title={task}
            onPress={() => {
              completeTask(index)
            }}
          />
        })}

      </ScrollView>

      <KeyboardAvoidingView
        behavior={'height'}
        style={styles.writeTaskWrapper} >

        <TextInput style={styles.input} placeholder={'Write a task'} value={newTask} onChangeText={text => setNewTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '70%',
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
