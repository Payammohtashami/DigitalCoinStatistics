import React, { useContext } from 'react';
import styles from './assets/css/right.module.css';
import {ResultContext,DataContext} from '../../Context/Calculators';


const Rightsections = () => {


    const result = useContext(ResultContext)
    const data = useContext(DataContext)
    const symbol = data[8].toUpperCase()
    const DollarChange = data[0] * data[4]
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.mainChange}>{result[0]}<span>{symbol}</span></h1>
            </div>
            <div className={styles.changeList}>
                <div className={styles.listTitle}>
                    <table>
                        <tbody>
                            <tr className={styles.table}>
                                <td><span>{data[1]}</span> Price</td>
                                <td>{data[2]}$</td>
                            </tr >
                            <tr className={styles.table}>
                                <td><span>{data[3]}</span> Price</td>
                                <td>{data[4]}$</td>
                            </tr>
                            <tr className={styles.table}>
                                <td><span>{data[3]}</span> to Dollar</td>
                                <td>{DollarChange}$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Rightsections;