import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const index = (req, res) => {
  res.send({
    msg: "Hello Data Fetch From Index Method..!",
  });
};

 const  create = async  (req, res) => {
  try {
    let data = req.body;
    console.log('Data is:'  + data);
     await prisma.articals.create({
      data
     })
    res.send({
      msg: "Data Added..!",
    });
  }
  catch(error){
    res.send({
      error
    })
  }

};

const update = (req, res) => {
  res.send({
    msg: "Data Updated..!",
  });
};

const destory = (req, res) => {
  res.send({
    msg: "Data Deleted..!",
  });

  
};

const details = (req, res) => {
  res.send({
    msg: "Details Get ID Wise",
  });
};

module.exports = { index, create, update, destory, details };
