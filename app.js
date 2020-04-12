const { argv } = require('./config/yargs')
const { create, update, deleteData, list } = require('./todo/todo')
const colors = require('colors')


// console.log(argv)

let command = argv._[0]

switch (command) {
    case 'create': 
        const todo = create(argv.description)
        console.log(todo)       
        break;
    case 'update':
        console.log(update(argv.description, argv.complete))
        break;
    case 'delete':
            console.log(deleteData(argv.description))
            break;
    case 'list':  
        const todoList = list()
        if ( todoList.length == 0 ) {
            console.log('There is not todos.'.green)
        } else {
            console.log('\n==========Todo List============'.green)
            for (let todo of todoList) {
                console.log('-------------------------------'.yellow)
                console.log(todo.description)
                console.log(`Compete: ${todo.complete}`)
                console.log('-------------------------------'.yellow)
            }
            console.log('==============================='.green)
        }          
        break;
    default:
        console.log(`Comando '${command}' no reconocido`)
        break;
}