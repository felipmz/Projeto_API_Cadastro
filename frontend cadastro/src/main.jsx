import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import FormComp from './componetes/FormComp.jsx'
import ImplemetsUsersShow from './inplements/ImplemetsUsersShow.jsx'
import './index.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Detecta mudança de tamanho de tela em tempo real
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layoutStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Mobile: Coluna | PC: Lado a Lado
    gap: '40px',
    padding: isMobile ? '20px' : '50px',
    maxWidth: '1600px',
    margin: '0 auto',
    alignItems: 'start'
  };

  const formContainerStyle = {
    width: isMobile ? '100%' : '400px',
    position: !isMobile ? 'sticky' : 'relative',
    top: '20px'
  };

  return (
    <div style={layoutStyle}>
      {/* CADASTRO NO TOPO (MOBILE) OU ESQUERDA (PC) */}
      <div style={formContainerStyle}>
        <FormComp />
        {isMobile && <hr style={{ border: '0.5px solid #333', margin: '30px 0' }} />}
      </div>

      {/* USUÁRIOS ABAIXO (MOBILE) OU DIREITA (PC) */}
      <div style={{ flex: 1, width: '100%' }}>
        <ImplemetsUsersShow isMobile={isMobile} />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)