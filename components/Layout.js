import { Alert } from "./Alert";
import { Footer } from "./Footer";
import { Meta } from "./Meta";

export const Layout = ({ alert, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert alert={alert} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
