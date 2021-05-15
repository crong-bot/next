import Styles from '../styles/Layout.module.css';
import Nav from '../components/nav.js';

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={Styles.container}>
        <main className={Styles.main}>{children}</main>
      </div>
    </>
  );
};

export default layout;
