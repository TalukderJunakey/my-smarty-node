const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World.. hi plz..commit something");

})
const users = [
    { id: 1, name: 'Ani', email: 'ani@gmail.com', phone: '023812948' },
    { id: 2, name: 'Joni', email: 'Joni@gmail.com', phone: '023812948' },
    { id: 3, name: 'Moni', email: 'Moni@gmail.com', phone: '023812948' },
    { id: 4, name: 'Sani', email: 'Sani@gmail.com', phone: '023812948' },
    { id: 5, name: 'Jeni', email: 'Jeni@gmail.com', phone: '023812948' },
    { id: 6, name: 'Nur', email: 'Nur  @gmail.com', phone: '023812948' }

]


app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user);

})

app.post('/user', (req, res) => {

    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})







app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sound sound');
});

app.listen(port, () => {
    console.log('Listening to port  ', port)
})




