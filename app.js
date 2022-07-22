const express=require("express");
const app=express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const userRouter= require('./src/routes/userRouter')
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.json());



app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/api/v1/users', userRouter);



app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`)
})