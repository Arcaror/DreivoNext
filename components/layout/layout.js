import styles from './layout.module.css';
import Header from '../header/header.js'
import Footer from '../footer/footer.js'

// This default export is required in a new `pages/_app.js` file.
export default function Layout({ children }) {
    return (
        <div className={styles.container}>

            <Header> </Header>
            
            {children}

            <Footer></Footer>

        </div>)
}

