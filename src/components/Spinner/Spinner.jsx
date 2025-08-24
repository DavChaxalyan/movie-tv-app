import styles from  "./Spinner.module.css"

function Spinner({loadingMovieId}) {
    return loadingMovieId && <div className={styles.spinnerContainer}><div className={styles.spinner}></div></div>   
}

export default Spinner