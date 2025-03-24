import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router";

const CompanyResourcesList = () => {


    return (
        <>
            <NavBar target={'dashboard'}></NavBar>
            <main>
                <header>
                    company_resources
                </header>
                <section>
                    <ul>
                        <NavLink to='/orgchart'><li>org_chart</li></NavLink>
                        <NavLink to='/balancesheet'><li>balance_sheet</li></NavLink>
                        <NavLink to='/charter'><li>corporate_charter</li></NavLink>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default CompanyResourcesList