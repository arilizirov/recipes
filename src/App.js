import Pages from './pages/Pages';
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
<<<<<<< HEAD
import styled from "styled-components";
import {Link} from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
=======
>>>>>>> 57768ba19c742fd1320c1a0b0a179a908a42b091

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>delicioso</Logo>
      </Nav>
=======
>>>>>>> 57768ba19c742fd1320c1a0b0a179a908a42b091
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster', cursive;
`;

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`;

export default App;

//to fix: Japanese page not working, search bar not working, text in search bar, sliders 1:44