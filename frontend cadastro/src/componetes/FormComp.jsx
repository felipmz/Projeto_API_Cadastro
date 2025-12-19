import BottonComp from "./BottonComp";
import DigiCamp from "./DigiCamp";
import { useRef } from "react";
import api from "../services/api";

export default function FormComp({}) {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  // Função de validação de email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function createUsers(){
    const name = inputName.current.value.trim();
    const age = inputAge.current.value;
    const email = inputEmail.current.value.trim().toLowerCase();

    // Verificação de espaço vazio
    if (!name || !email || !age) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Verificação de email válido
    if (!isValidEmail(email)) {
      alert("Por favor, insira um email válido");
      return;
    }

    // Verificação de idade abaixo de 200
    if (parseInt(age) > 200) {
      alert("A idade deve ser menor que 200 anos");
      return;
    }

    await api.post('/usuarios',{
      name: name.toLowerCase(),
      age: age,
      email: email
    })
     window.location.reload(); 
  }

  return (
    <div style={{
      backgroundColor: '#1a1a1a', 
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '20px',
      border: '1px solid #333'
    }}>
      <h1 style={{
        color: '#fff',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '28px',
        fontWeight: '600'
      }}>
        Cadastro de usuários
      </h1>
      
      <form style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px' 
      }}>
        <DigiCamp type="text" placeholder="Nome" ref={inputName} />
        <DigiCamp type="email" placeholder="Email" ref={inputEmail}/>
        <DigiCamp type="number" placeholder="Idade" ref={inputAge}/>
      </form>
      < BottonComp value="Cadastrar-se" onClick={createUsers} />
    </div>
  );
}