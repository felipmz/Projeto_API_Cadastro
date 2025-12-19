import DigiCamp from "./DigiCamp";
import BottonComp from "./BottonComp";

export default function SearchBar({ onSearch, placeholder = "Pesquisar..." }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    onSearch(searchValue);
  };

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
      border: '1px solid #333',
      
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{ 
          display: 'flex', 
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <div style={{ flex: 1 }}>
          <DigiCamp 
            type="text" 
            name="search"
            placeholder={placeholder}
          />
        </div>
        
        <div style={{ width: '116px' }}>
          <BottonComp 
            type="submit"
            value="Pesquisar" 
          />
        </div>
      </form>
    </div>
  );
}