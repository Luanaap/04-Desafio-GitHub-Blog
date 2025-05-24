import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 Posts</span>
      </div>
      <input 
          type="text" 
          placeholder="Buscar conteúdo"
        />
    </SearchFormContainer>
  )
}