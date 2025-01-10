import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="n-layout n-aside-size:full1 n-aside-float1 n-aside-pos:right1">
      <Header />
      <div className="xl:w:xlarge">
        <Aside />
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
