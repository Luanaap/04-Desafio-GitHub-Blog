import { SummaryContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface UserInfo {
  name: string;
  followers: number;
  gitHubUserName: string;
  company: string;
  url: string;
  imgUrl: string;
  description: string; 
}

export function Summary() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  async function fetchUsers() {
    const response = await api.get("users/Luanaap");
    const { name, followers, login, company, html_url, avatar_url, bio } =
      response.data;
    const newUserObj = {
      name,
      followers,
      gitHubUserName: login,
      company,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    };
    setUserInfo(newUserObj);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
      <SummaryContainer>
        <img width={148} height={148} src={userInfo?.imgUrl} alt="Foto de perfil pessoal" />

        <div>
          <header>
            <h1>{userInfo?.name}</h1>
            <a href={userInfo?.url} target="_blank">
              GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </header>

          <main>
            <p>{userInfo?.description}</p>
          </main>

          <footer>
              <span>
                <i className="fa-brands fa-github"></i>
                {userInfo?.gitHubUserName}
              </span>
              <span>
                <i className="fa-solid fa-building"></i>
                {userInfo?.company}
              </span>
              <span>
                <i className="fa-solid fa-user-group"></i>
                {userInfo?.followers} seguidores
              </span>
          </footer>

        </div>

      </SummaryContainer>
  );
}