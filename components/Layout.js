import Alert from "./Alert2";
import { Footer } from "./Footer";
import { Meta } from "./Meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert alert={alert} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
