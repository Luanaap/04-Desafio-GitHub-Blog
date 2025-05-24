import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

export function Blog(){
  return (
    <div>
      <Header />
      <Summary/>


      <SearchForm/>
    </div>
  )
}