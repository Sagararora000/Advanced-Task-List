const express = require("express");
const path = require("path");

const port = 8006;
const app = express();


//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("assets"));
app.use(express.urlencoded());
const tasksList = [
];
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
  let a = new Date(req.body.setDate);
  let b = a.toDateString();
  tasksList.push({
    descript: req.body.descript,
    category: req.body.category,
    setDate: b
  });
  return res.redirect("/");
});

app.get("/delete-contact",function(req,res){
    
    return res.redirect("/");
})
app.listen(port, function (err) {
  if (err) {
    console.log("There is an error in running the server:", err);
  }
  console.log("server running at port:", port);
});
