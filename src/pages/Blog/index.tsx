import { useEffect, useState } from "react";
import { Summary } from "../../components/Summary";
import { HomeContainer, HomeContent, ListSection, SearchForm } from "./styles";
import { api } from "../../lib/axios";
import { PostCard } from "./components/PostCard";

export interface Post {
  title: string;
  body: string;
  created_at: string;
  number: number;
}


export function Blog(){
  const [posts, setPosts] = useState<Post[]>([] as Post[]);
  const [postsCounter, setPostsCounter] = useState(0);

  async function fetchPosts(query = "") {
    const response = await api.get(`search/issues?q=${query ? query :  ""
      }%20repo:${"Luanaap"}/04-Desafio-GitHub-Blog`
    );
    setPosts(response.data.items);
    setPostsCounter(response.data.total_count);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <Summary/>
      <HomeContent>
        <SearchForm>
          <div>
            <span>Publicações</span>
            <small>{postsCounter} publicações</small>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onBlur={(e) => fetchPosts(e.target.value)}
          />
        </SearchForm>
        <ListSection>
          {posts &&
          posts.map((post) => (
            <PostCard 
              key={`${post.title}-${post.number}`}
              post={post}>
            </PostCard>
          ))}
        </ListSection>
      </HomeContent>
    </HomeContainer>
  )
}