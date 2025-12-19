import express from 'express'; // import ecxpress
import { json } from 'stream/consumers';
//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma'
import cors from 'cors';



const prisma = new PrismaClient()

const app = express(); // permite o uso dos recursos da biblioteca via variavel
const porta = 3000; // variavel que indica a porta
app.use(cors());
//const users:any = [];


app.use(express.json()); //indica o uso de JSON pelo express pois por padrão não é usado
app.use(cors())
app.post('/usuarios',async (req,res) => { // função assincrona que depende de uma resposta
    //console.log(req.body);
    //const {nome,email,age}: usuarioDados = req.body;

   // users.push(req.body);  // adiciona as requisições via body no array 

   await prisma.user.create({
    data: {
      email: req.body.email,
      name:req.body.name,
      age: req.body.age
    }
})

    res.status(201).json(req.body); // ao salvar minha resposta é 201 e o envio do usuario criado
})


app.get('/usuarios',async (req,res)  => {  // retorna a lista de usuários cadastrados
   //console.log(req.query);

   let usersList = [];
   if(req.query){ // se existir o resultado do pesquisa
        usersList = await prisma.user.findMany({ //meu array o resultado da pesquisa
            where:{  // parametros de pesquisa
                name: req.query.name as string | undefined, // parametros declarados como string ou underfined
                email: req.query.email as string | undefined,
                age: req.query.age as string | undefined
            }
        });
   }else{
    usersList = await prisma.user.findMany(); //se não for achado retorna todo o meu DB
   }
   res.status(200).json(usersList);

})

app.put('/usuarios/:id',async (req,res) => {
 
   console.log(req);
   await prisma.user.update({
    where:{
        id: req.params.id
    },
    data: {
      email: req.body.email,
      name:req.body.name,
      age: req.body.age
    }
})
    res.status(201).json(req.body); 
})


app.delete('/usuarios/:id',async (req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message:'Usuario deletado com sucesso !'});
})


app.listen(porta, () => {
    console.log(`✅ Servidor rodando em http://localhost:${porta}`);
});