const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'practice'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Mysql Database Connected');
});

const addToDo = (item, callback) => {
    connection.query(`INSERT INTO todos set ?`, item, (err, result) => {
        if(err) {
            console.log('Error when inserting to DB', err);
            callback(err);
        }else {
            console.log('Successfully added ToDo to DB')
            callback(null, result);
        }
    });
}

const getToDos = (callback) => {
    connection.query(`SELECT * FROM todos;`, (err, result) => {
        if(err) {
            console.log('Error selecting todos from DB', err);
            callback(err);
        } else {
            // console.log(result);
            callback(null, result);
        }
    })
}

const updateTodo = (item, callback) => {
    connection.query(`UPDATE todos SET completed = ${item.completed} WHERE id = ${item.id};`, (err, result) => {
        if(err) {
            console.log('Error updating todo in DB', err);
            callback(err);
        } else {
            // console.log(result);
            callback(null, result);
        }
    })
}

const deleteTodo = (id, callback) => {
    connection.query(`DELETE FROM todos WHERE id = ${id}`, (err, result) => {
        if(err) {
            console.log('Error deleting todo in DB', err);
            callback(err);
        } else {
            // console.log(result);
            callback(null, result);
        }
    })
}

module.exports = {connection, addToDo, getToDos, updateTodo, deleteTodo};