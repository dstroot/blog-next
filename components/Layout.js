// import Alert from "../components/alert";
import { Footer } from "./Footer";
import { Meta } from "./Meta2";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert alert={alert} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
