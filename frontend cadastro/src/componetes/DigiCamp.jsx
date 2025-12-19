export default function DigiCamp({type = "text", placeholder = "Digito",ref}) {
  return (
    <div style={{
      backgroundColor: '#2d2d2d',
      borderRadius: '8px',
      padding: '4px'
    }}>
      <input 
        type={type}
        name="digito" 
        id="digito"
        placeholder={placeholder}
        ref={ref}
      
                // Altere apenas o estilo do input dentro do DigiCamp
        style={{ 
          padding: '12px',
          width: '100%', // Mudado de 90% para 100%
          boxSizing: 'border-box', // Garante que o padding não quebre a largura
          backgroundColor: '#1a1a1a',
          border: '1px solid #444',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '16px'
        }}
      />  
    </div>
  );
}