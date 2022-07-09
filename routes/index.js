var express = require('express');
var router = express.Router();

/* GET home page. */
const students = [{
  name:"Saravana1",
  mobile:1234
},
{
  name:"Saravana2",
  mobile:1234
},
{
  name:"Saravana3",
  mobile:1234
}
]

router.get('/',(req, res) => {
  res.send({
      statusCode:200,
      data:students
  });
})

router.get('/:id',(req, res) => {
  if (req.params.id<students.length){
      res.send({
          statusCode:200,
          data:students[req.params.id]
      });
  }
  else{
      res.send({
          statusCode:400,
          message:"Invalid ID"
      });
  }
})

router.post('/add',(req, res) => {
  students.push(req.body)
  console.log(req.body)
  res.send({
      statusCode:201,
      message:"Student Added Successfully"
  })
})

router.put('/edit/:id',(req, res) => {
  if (req.params.id<students.length)
  {   
  students.splice(req.params.id,1,req.body)

      res.send({
          statusCode:200,
          message:"Student Edited Successfully"
      });
  }
  else{
      res.send({
          statusCode:400,
          message:"Invalid ID"
      });
  }
})

router.delete('/delete/:id',(req, res) => {
  if (req.params.id<students.length)
  {   
  students.splice(req.params.id,1)

      res.send({
          statusCode:200,
          message:"Student Delete Successfully"
      });
  }
  else{
      res.send({
          statusCode:400,
          message:"Invalid ID"
      });
  }
})

module.exports = router;
