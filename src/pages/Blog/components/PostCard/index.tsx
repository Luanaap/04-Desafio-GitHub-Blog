import { formatDistanceToNow } from "date-fns";
import type { Post } from "../..";
import { PostCardContainer } from "./styles";
import { ptBR } from "date-fns/locale";
import { formatText } from "../../../../utils/formatText";

interface PostCard { 
  post: Post;
}


export function PostCard({post }: PostCard) {
  const { created_at, body, title, number } = post;
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </PostCardContainer>
  )
}