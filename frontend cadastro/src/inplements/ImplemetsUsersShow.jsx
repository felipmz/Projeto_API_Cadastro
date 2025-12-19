import UserShow from "../componetes/UserShow";
import api from '../services/api';
import { useEffect, useState } from "react";

export default function ImplemetsUsersShow({ isMobile }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    // Inverte para o mais recente ficar no topo
    setUsers(usersFromApi.data.reverse());
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    setUsers(users.filter(user => user.id !== id));
    getUsers();
  }

  return (
    <div style={{
      display: 'grid',
      // PC: 3 colunas | Mobile: 1 coluna (Formato Lista)
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '20px',
      width: '100%'
    }}>
      {users.map((user) => (
        <UserShow 
          key={user.id} 
          id={user.id}           
          name={user.name} 
          age={user.age} 
          email={user.email}
          onDelete={deleteUsers} 
        />
      ))}
    </div>
  );
}