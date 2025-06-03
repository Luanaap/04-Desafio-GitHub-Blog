import { useEffect, useState } from "react";
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../../../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import remarkGfm from "remark-gfm";

interface PostDetail {
  title: string;
  comments: number;
  createdAt: string;
  gitHubUserName: string;
  url: string;
  body: string;
}

export function PostDetail() {
  const [ posts, setPosts ] = useState<PostDetail>({} as PostDetail);
  const { id } = useParams();

  async function fetchPost() {
    const response = await api.get(`/repos/Luanaap/04-Desafio-GitHub-Blog/issues/${id}`);
    const { title, comments, created_at, user, html_url, body } = response.data;
    const newPostObj = {
      title,
      gitHubUserName: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: html_url,
      body,
    }
    setPosts(newPostObj);
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </NavButton>
          <a href={posts.url} target="_blank">
            Ver no GitHub
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>{posts.title}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {posts.gitHubUserName}
          </span>
           <span>
            <i className="fa-solid fa-calendar"></i>
            {posts.createdAt}
          </span>
           <span>
            <i className="fa-solid fa-comment"></i>
            {posts.comments} comentários
          </span>
        </footer>  
      </PostDetailCard>

      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{posts.body}</ReactMarkdown>
        </div>
      
      </PostDetailContent>
    </PostDetailContainer>
  );
}