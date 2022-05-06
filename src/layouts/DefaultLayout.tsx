import { ReactNode } from "react";
import Header from "./Header/Header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 10px",
        gap: 20,
        width: 960,
        margin: "auto",
      }}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
