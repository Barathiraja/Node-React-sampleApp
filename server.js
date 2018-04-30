const express = require('express');

var cors = require('cors')
const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

const friends = [
    {firstName:"Dinesh",lastName:"Kumar","handle":"@Dinath"},
    {firstName:"Mani",lastName:"Kandan","handle":"@manik"},
    {firstName:"Gopi",lastName:"Kannan","handle":"@gopikn"},
    {firstName:"Pradeep",lastName:"kumar","handle":"@pkg"},
    {firstName:"Nirmal",lastName:"kumar","handle":"@nkThala"}
    ];
app.get('/api/friends', (req, res) => {
    res.send({ friendsList: friends});
});



app.listen(port, () => console.log(`Listening on port ${port}`));