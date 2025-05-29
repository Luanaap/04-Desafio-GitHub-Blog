import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";


export function PostDetail() {

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </NavButton>
          <div>
            Ver no Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </header>
        <div>
          <h1>JavaScript data types and data structures</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            cameronwll
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            Há 1 dia
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            5 comentários
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        </div>
      </PostDetailContent>
    </PostDetailContainer>
  );
}