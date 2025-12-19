import BottonComp from "./BottonComp";

export default function UserShow({ id, name, age, email, onDelete }) {
  return (
    <div style={{
      backgroundColor: '#2d2d2d',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #444',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '160px',
      boxSizing: 'border-box',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <div style={{ color: '#fff' }}>
        <p style={{ 
          margin: '0 0 8px 0', 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: '#646cff' 
        }}>
          {name}
        </p>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#e5e5e5', wordBreak: 'break-all' }}>
          {email}
        </p>
        <p style={{ margin: '4px 0', fontSize: '14px', color: '#aaa' }}>
          {age} anos
        </p>
      </div>
      
      <div style={{ marginTop: '15px', borderTop: '1px solid #444', paddingTop: '10px' }}>
        <BottonComp value="Excluir" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}