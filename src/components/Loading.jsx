import Header from "./header";
import Footer from "./Footer";

import "./Loading.css";

const Loading = () => {
  return (
    <div>
      {/* Header components */}
      <Header />
      {/*== Header components ==*/}

      {/* main */}
      <main>
        <div className="loading"></div>
      </main>
      {/*== main content ==*/}

      {/* Footer component */}
      <Footer />
      {/*== Footer component ==*/}
    </div>
  );
};

export default Loading;
