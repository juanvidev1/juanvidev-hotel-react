import React from "react";

import Bookings from "./Bookings";
import Header from "./Headings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  const manchester = {
    name: "Manchester",
    webSite: "www.visitmanchester.com",
    image:
      "https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg",
    imageName: "Manchester"
  };

  const glasgow = {
    name: "Glasgow",
    webSite: "www.peoplemakeglasgow.com",
    image:
      "https://media.istockphoto.com/id/830486350/es/foto/glasgow-escocia.jpg?s=612x612&w=0&k=20&c=FNFKklrQyaIL9yjXK2Rjtm--9qJ4hoTds9BxvGGyvtc="
  };

  const london = {
    name: "London",
    webSite: "www.visitlondon.com",
    image:
      "https://img.freepik.com/foto-gratis/big-ben-casa-parlamento-noche-londres-reino-unido_268835-1396.jpg?w=2000",
    imageName: "London"
  };

  return (
    <div className="App">
      <Header />
      <TouristInfoCards cities={[manchester, glasgow, london]} />
      <Bookings />
      <Restaurant />
      <Footer
        footerList={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
