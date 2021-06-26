import Alert from "../components/alert";
import Footer from "./footer";
import Meta from "../components/meta";

export default function Layout({ alert, children }) {
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
}
