const express = require("express");
const path = require("path");

const port = 8006;
const app = express();


//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("assets"));
app.use(express.urlencoded());
const tasksList = [{
    descript:"hello",
    category:"blkj"
},
{
    descript:"lkjl",
    category:"ljlj"
}];
const cate = [
    {   
        category:"personal"
    },
    {
        category:"schooling"
    },
    {
        category:"work"
    },
    {
        category:"others"
    }
];
app.all("/", function(req,res){
    // return res.end("<h1>Start page is up!</h1>")
    return res.render('start',{
        title:"directory structure",
        cateType:cate,
        tasksList: tasksList
        
    })
});

app.post("/createList", function (req, res) {
  console.log(req.body);
  tasksList.push({
    descript: req.body.descript,
    category: req.body.category,
    setDate: req.body.setDate,
  });
  return res.redirect("/");
});
app.listen(port, function (err) {
  if (err) {
    console.log("There is an error in running the server:", err);
  }
  console.log("server running at port:", port);
});
