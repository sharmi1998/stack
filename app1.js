const Express=require('express')
var as=new Express();
var bodyParser=require('body-parser')
as.set('view engine','ejs')
as.use(Express.static(__dirname+"/public"));
as.use(bodyParser.json());
as.use(bodyParser.urlencoded({extended:true}))
books=[
    {
        'title':'In search of Lost Time',
        'author':'Marcel Proust',
        'publisher':'HarperCollins',
        'date_of_publication':'1971',
        'distributorName':'HarperCollins',
        'price':340,
        'Description':'Novel'


    },
    {
        title:"Don Quixote",
        author:"Miguel de Cervantes",
        publisher:"H&C Books",
        date_of_publication:"1940",
        distributorName:"H&C Books",
        price:840,
        Description:"Real World story"

    },
    {
        title:"Ulysses",
        author:"James Joyces",
        publisher:"H&C Books",
        date_of_publication:"1930",
        distributorName:"H&C Books",
        price:450,
        Description:"Story"
    },
    {
        title:"The Great Gatsby",
        author:"F.schoot",
        publisher:"Pearson",
        date_of_publication:"1959",
        distributorName:"H&C Books",
        price:740,
        Description:'Novel'

    },
    {
        title:"MobyDick",
        author:"Herman Melville",
        publisher:"Pearson",
        date_of_publication:"1851",
        distributorName:"H&C Books",
        price:200,
        Description:'AutoBiography'

    },
    {
        title:"Hamlet",
        author:"William Shakesphere",
        publisher:"pearson Books",
        date_of_publication:"1920",
        distributorName:"H&C Books",
        price:1090,
        Description:"Poems"
    },
    {
        title:"War and Peace",
        author:"Leo Tolstoy",
        publisher:"pearson",
        date_of_publication:"1958",
        distributorName:"H&C Books",
        price:670,
        Description:"Real world story"

    },
    {
        title:"Leo Tolstoy",
        author:"Homer",
        publisher:"pearson Books",
        date_of_publication:"1973",
        distributorName:"H&C Books",
        price:380,
        Description:"story"

    },
    {
        title:"Madme Bovery",
        author:"Gustave Flaubert",
        publisher:"pearson Books",
        date_of_publication:"1944",
        distributorName:"H&C Books",
        price:980,
        Description:"Novel"
    },
    {
        title:"The Divine Comedy",
        author:"Dante alighieri",
        publisher:"Pearson Books",
        date_of_publication:"1973",
        distributorName:"H&C Books",
        price:650,
        Description:"Novel"
    }];

as.get('/',(req,res)=>{
    res.render('index4',{titile:'homepage'});
});
as.get('/addbook',(req,res)=>{
    res.render('index4',{title:'addbook'});
});
as.get('/viewbook',(req,res)=>{
    res.render('index5',{title:'viewbook'});
});
as.post('/read',(req,res)=>{
var name=req.body;
//console.log(name)
//res.send(req.body)
res.render('read',{name:name})
})
as.listen(process.env.PORT || 3003,()=>{
    console.log("server is running on http://localhost:3003")
});