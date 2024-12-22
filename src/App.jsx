import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, Home, Top, WatchList } from "./Components"
import GlobleStyle from "./GloblesStyles"
import { store } from "./Redux/store"
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #f0f4f8; // Light background color
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 80px; // To ensure content doesn't overlap with the navbar
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <GlobleStyle />
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/WatchList" element={<WatchList />} />
              <Route path="/Top" element={<Top />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  )
}

export default App
