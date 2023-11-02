$(function() {
    $( "#datepicker" ).datepicker();
    });
    console.log("hell");

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
for(let i = 0; i < cate.length; i++){
    console.log(cate.category);
}