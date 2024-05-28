import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Tema nesnesi
const theme = {
  colors: {
    white: "#FFFFFF",
    transparentBlack2: "rgba(0, 0, 0, 0.2)",
    // Diğer renk tanımlarını buraya ekleyebilirsiniz.
  }
};

// Styled Components
const Group1000001746 = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 10px 695px 10px 10px;
  box-shadow: 0 0 60px 30px ${props => props.theme.colors.transparentBlack2};
  position: relative;
`;

const Frame1 = styled.div`
  width: calc(100% - 153px);
  height: calc(100% - 76px);
  background-color: rgba(1, 28, 43, 1);
  overflow: hidden;
  border-radius: 10px;
  padding: 40px 114px 36px 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const ContactInformation = styled.p`
  max-width: 291px;
  font-family: "Poppins";
  font-size: 28px;
  font-weight: 600;
  line-height: normal;
  color: ${props => props.theme.colors.white};
  margin-bottom: 6px;
  margin-left: 1px;
`;

const SaySomethingToStartALiveChat = styled.p`
  max-width: 307px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: rgba(201, 201, 201, 1);
  margin-bottom: 111px;
  margin-left: 1px;
`;

// React Component
const Group1000001766 = () => {
  return (
    <Group1000001746>
      <Frame1>
        <ContactInformation>
          Contact Information
        </ContactInformation>
        <SaySomethingToStartALiveChat>
          Say something to start a live chat!
        </SaySomethingToStartALiveChat>
        {/* Diğer JSX componentlerini buraya ekleyebilirsiniz */}
      </Frame1>
    </Group1000001746>
  );
};

// Uygulama ana bileşeni
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Group1000001766 />
    </ThemeProvider>
  );
};

export default App;
