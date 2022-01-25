const { request } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const port = process.env.PORT || 3000
const app = express()

//Set the view engine
app.engine("hbs", exphbs.engine({
    defaultLayout: 'main',
    extname: "hbs",
    helpers:{
        getShortComment(comment){
            if(comment.length < 60){
                return comment
            }
            return comment.substring(0,60)+'...'
        }
    }
}))

app.set('view engine', 'hbs')

//Route to render the page
app.get('/', (req, res)=>{
    res.render('home', {
        post:[
            {
                author: "Matthew G",
                image: "https://picsum.photos/500/500",
                comments:['comment 1', 'comment 2', 'comment 3']
            },
            {
                author: "Matt G",
                image: "https://picsum.photos/500/500?2",
                comments:[]
            },
            {
                author: "MattyB",
                image: "https://picsum.photos/500/500?3",
                comments:["yo this is awesome", "Proident occaecat ut Lorem id Lorem laboris reprehenderit enim eu do veniam ad. Laboris deserunt laboris aute minim quis nulla sint sit dolor qui ea occaecat et ipsum. Ad culpa eu et duis cillum amet. Qui voluptate in voluptate fugiat ut do esse voluptate nulla.", "this is the best"]
            }
        ]
    })

})

//Set up port for connection
app.listen(port, ()=>{
    console.log("Connected on port 3000")
})