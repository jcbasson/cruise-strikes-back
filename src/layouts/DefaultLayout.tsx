import { ReactNode } from "react";
import Header from "./Header/Header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 10px",
        gap: 20,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
