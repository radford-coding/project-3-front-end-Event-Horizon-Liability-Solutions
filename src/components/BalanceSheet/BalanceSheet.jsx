import NavBar from "../NavBar/NavBar";
import './BalanceSheet.css';
import { useEffect, useState } from "react";

const BalanceSheet = () => {

    const [bsNums] = useState({
        year: Math.floor(Math.random() * 500) + 2063,
        credits: Math.floor(Math.random() * 10000),
        gruyere: Math.floor(Math.random() * 10000),
        income: Math.floor(Math.random() * 10000),
        debt: -Math.floor(Math.random() * 10000),
        wages: -Math.floor(Math.random() * 10000),
        gruyereDeficit: -Math.floor(Math.random() * 10000),
    });

    return (
        <>
            <NavBar target={'company-resources'}></NavBar>
            <main>
                <header>balance_sheet</header>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>{`fiscal year ${bsNums.year}`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>credits in bank</td>
                            <td>{`╫ ${bsNums.credits}`}</td>
                        </tr>
                        <tr>
                            <td>gruyere on hand</td>
                            <td>{`╫ ${bsNums.gruyere}`}</td>
                        </tr>
                        <tr>
                            <td>investment income</td>
                            <td>{`╫ ${bsNums.income}`}</td>
                        </tr>
                        <tr>
                            <td>short-term debt</td>
                            <td>{`╫ ${bsNums.debt}`}</td>
                        </tr>
                        <tr>
                            <td>wages owed</td>
                            <td>{`╫ ${bsNums.wages}`}</td>
                        </tr>
                        <tr>
                            <td>gruyere deficit</td>
                            <td>{`╫ ${bsNums.gruyereDeficit}`}</td>
                        </tr>
                        <tr style={{fontWeight: 'bold'}}>
                            <td>total</td>
                            <td>{`╫ ${bsNums.credits + bsNums.gruyere + bsNums.income + bsNums.debt + bsNums.wages + bsNums.gruyereDeficit}`}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    );
};

export default BalanceSheet