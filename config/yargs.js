const yargs = require('yargs')

description = {
    demand: true,
    alias: 'd',
    desc: 'A todo description'
}    
complete = {
    alias: 'c',
    default: true,
    desc: 'True if todo is already complete'
}
yargs
.command('create', 'Create a to-do list element', {description})
.command(
    'update',
    'Update a to-do element',    
    {
        description,
        complete
    }
)
.command('delete', 'Delete a todo element from todo list', {description})
.command('list', 'List all to-dos', {complete})
.help()

const argv = yargs.argv

module.exports = { argv }