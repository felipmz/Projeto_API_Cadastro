export default function BottonComp({value = "Excluir",onClick}) {
  return (
    <div style={{
      padding: '5px',
      borderRadius: '6px'
    }}>
      <input 
        style={{
          width: '100%',
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: '#dc2626',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          transition: 'background-color 0.2s',
          minWidth: '80px'
        }} 
        type="button" 
        value={value}
        onClick={onClick} 
        onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}

      />
    </div>
  );
}