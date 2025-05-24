import { SummaryContainer, SummaryWrapper } from "./styles";
import avatar from '../../assets/avatar.svg';


export function Summary() {
  return (
    <SummaryWrapper>
      <SummaryContainer>
        <img width={148} height={148} src={avatar} alt="Imagem Perfil" />

        <div>
          <header>
            <h1>Cameron Williamson</h1>
            <a href="#">Github</a>
          </header>
          <main>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
              dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </main>
          <footer>
            <span>Github</span>
            <span>Blog</span>
            <span>Linkedin</span>
          </footer>
        </div>
      </SummaryContainer>
    </SummaryWrapper>
  );
}