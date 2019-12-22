const firebase = require('firebase');

const db = firebase.database();

module.exports = (app) => {

    //Route for getting data from db



    //Route for posting data to db
    app.post('/test/newuser', (req, res) => {
        console.log(req.body);

        db.ref('/users/' + 'Test02').set({
            userName: 'TesterMcTester',
            email: 'hahaha@yahoo.com',
            posts: [{
                emotion: 'Sad',
                description: 'I felt sad today because we fought'
            }]
        })
        res.send('Thank you for you post!!')
    })


    //route for updating data to db
}