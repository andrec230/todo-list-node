const fs = require('fs')

let todoList = []

const create = (description) => {
    let todo = {
        description,
        complete: false
    }
    loadData()
    todoList.push(todo)    
    saveData()
    return todo
} 

const list = () => {
    loadData()
    return todoList
}

const update = (description, complete = true) => {
    loadData()
    let todoIndex = todoList.findIndex((todo) => todo.description === description) 
    if(todoIndex >= 0) {
        todoList[todoIndex].complete = complete
        saveData()
        return true
    }
    return false
}

const deleteData = (description) => {
    loadData()
    let todoIndex = todoList.findIndex((todo) => todo.description === description) 
    if(todoIndex >= 0) {
        todoList.splice(todoIndex, 1)
        saveData()
        return true
    }
    return false
}



const saveData = () => {
    let data = JSON.stringify(todoList)
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Can\'t save todo', err)
    })
}

const loadData = () => {
    try {
        todoList = require('../db/data.json')        
    } catch (error) {
        todoList = []
    }
}

module.exports = { 
    create,
    update,
    deleteData,
    list
 }