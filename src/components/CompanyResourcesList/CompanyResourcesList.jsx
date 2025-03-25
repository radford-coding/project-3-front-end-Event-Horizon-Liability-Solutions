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
                        <NavLink to='/orgchart'><li className="typewriter">org_chart</li></NavLink>
                        <NavLink to='/balancesheet'><li className="typewriter">balance_sheet</li></NavLink>
                        <NavLink to='/charter'><li className="typewriter">corporate_charter</li></NavLink>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default CompanyResourcesList