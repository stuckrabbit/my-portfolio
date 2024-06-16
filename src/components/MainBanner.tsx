import styles from "./MainBanner.module.css";
import { motion } from 'framer-motion';

function MainBanner() {
    return (<motion.div className={styles.container}>
        <h1 className={styles.mainText}>Sajid Munir</h1>
        <p className={styles.text}>What I love most is solving problems and love the satisfaction which
            comes after systematically approaching a solution.
            <p>The best thing I love about Web development in particular is how evolving this field is.</p>
        </p>
    </motion.div>);
}

export default MainBanner;