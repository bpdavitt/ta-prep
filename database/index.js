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

module.exports = {connection, addToDo};