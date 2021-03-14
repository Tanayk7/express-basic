const express = require("express");
const app = express();

const data = [
    {
        id: 1,
        post_title: "This is my post",
        post_date: "10/10/21",
        comments: [
            'comment1',
            'comment2'
        ]
    },
    {
        id: 2,
        post_title: "This is my post",
        post_date: "10/10/21",
        comments: [
            'comment1',
            'comment2'
        ]
    },
    {
        id: 3,
        post_title: "This is my post",
        post_date: "10/10/21",
        comments: [
            'comment1',
            'comment2'
        ]
    }
]

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res) => {
    console.log(req)
    console.log("Does this work?")
    res.json(data);
})

app.post("/data",(req,res) => {
    console.log(req.body);
    let post_date = req.body.post_date;
    let post = data.filter(post => post.post_date === post_date);
    res.json(post)
})

app.listen(3000,() => {
    console.log("server listening on port 3000")
})