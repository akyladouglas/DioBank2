import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
