const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    const {
        feeling,
        underStanding,
        support,
        comment
    } = req.body;
    const sqlText =`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feeling.feeling, underStanding.understanding, support.support, comment.comment])
    .then((response) =>{
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error adding feedback', err);
        res.sendStatus(500)
        
    })
     
 })

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});