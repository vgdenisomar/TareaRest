const express=require('express');
const router=express.Router();

const studentsApi=require('./students');

router.use('/students', studentsApi);

router.get('/', (req,res,next)=>{
    res.status(200).json({"ok":"Tarea de API Rest con Node.js"});
});

module.exports=router;