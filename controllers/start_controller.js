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
const tasksList = [{
    descript:"hello",
    category:"blkj"
},
{
    descript:"lkjl",
    category:"ljlj"
}];
module.exports.start = function(req,res){
    // return res.end("<h1>Start page is up!</h1>")
    return res.render('start',{
        title:"directory structure",
        cateType:cate,
        tasksList: tasksList
        
    })
}
module.exports.fillInfo = function(req,res){
    console.log(req.body);
  tasksList.push({
    descript: req.body.descript,
    category: req.body.category,
    setDate: req.body.setDate,
  });
  return res.redirect("/");
}
