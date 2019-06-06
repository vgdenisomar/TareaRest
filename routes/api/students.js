const express=require('express');
var router = express.Router();

var studentsCollection=[];

var studentsStruct={
    "_id":'',
    "nombres":'',
    "apellidos":'',
    "correo":'',
    "telefono":''

};

studentsCollection.push(
    Object.assign(
        studentsStruct,
        {
            "_id":"1",
            "nombres":"Denis Omar",
            "apellidos":'Velasquez Guardado',
            "correo":'vgdenisomar@gmail.com',
            "telefono":"94926063"

        }
    )
    
);

router.get('/',(req,res,next)=>{
    res.status(200).json(studentsCollection)
});

router.post('/',(req,res,next)=>{
    var newElement=Object.assign({},studentsStruct, req.body);
    studentsCollection.push(newElement);
    res.status(200).json(newElement)
});


router.put('/:_id',(req,res,next)=>{
    const requestId=req.params._id;
    
    let studentsStruct=studentsCollection.filter(studentsStruct=>{
        return studentsStruct._id==requestId;
    })[0];

    const index=studentsCollection.indexOf(studentsStruct);
    const keys=Object.keys(req.body);
    keys.forEach(key=>{
        studentsStruct[key]=req.body[key];
    })
    studentsCollection[index]=studentsStruct;
    res.json(studentsCollection[index]);
});


router.delete('/:_id',(req,res,next)=>{
    const requestId=req.params._id;
    
    let studentsStruct=studentsCollection.filter(studentsStruct=>{
        return studentsStruct._id==requestId;
    })[0];

    const index=studentsCollection.indexOf(studentsStruct);
    var stude=studentsCollection[index];
    studentsCollection.splice(index,1);
    res.status(200).json({elimado:stude,coleccion:studentsCollection});
});


module.exports=router;