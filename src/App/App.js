import styled from "styled-components";
import Navigation from "../Components/Navigation";
import Contacts from "../Containers/Contacts/Contacts";
import Appointments from "../Containers/Appointments/Appointments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// mocking service worker
if (process.env.NODE_ENV === "development") {
  const { worker } = require("../mocks/browser");
  worker.start();
}
function App() {
  return (
    <Router>
      <AppWrapper>
        <Navigation />
        <Routes>
          <Route path="/">
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="appointments" element={<Appointments />}></Route>
          </Route>
        </Routes>
      </AppWrapper>
    </Router>
  );
}

const AppWrapper = styled.main`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
