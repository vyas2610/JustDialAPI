const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


const index = async (req, res) => {

  let response = await prisma.articals.findMany();
  res.send(
    response
  );
};

 const  create = async  (req, res) => {
  try {
    let data = req.body;
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

const update = async (req, res) => {
  try {
      let data = req.body;
        await prisma.articals.update({
          where: {
            id: parseInt(req.params.id)
          },
          data
        })
    res.send({
      msg: "Data Updated..!",
    });

  }
  catch(error){
      res.send({
        error
      })
  }

};

const destory = async (req, res) => {
try {
    await prisma.articals.delete({
      where: {
        id:parseInt(req.params.id)
      }
    })
  res.send({
    msg: "Data Deleted..!",
  });

}catch(error) {

res.send({error})
}

  
};

const details = async (req, res) => {
  let response = await prisma.articals.findUnique({
    where :  {
      id: parseInt(req.params.id)
    }
  })
  res.send({
    response
  });
};

module.exports = { index, create, update, destory, details };
