import { NavLink } from 'react-router';

const WelcomeScreen = () => {

  return (
    <>
      <header>
        <h4>Event Horizon Liability Solutions, Inc.</h4>
      </header>
      <main>
        <h1>Welcome to Event Horizon Liability Solutions, Incorporated</h1>
        <article>Congratulations on your induction into EHLS. As our newest cybersecurity operative, your expertise is critical to safeguarding our network's integrity.</article>
        <article>Your first directive: Navigate to Missions to retrieve your daily objectives. Each task is time-sensitive and requires precision. Upon completion, submit a detailed report to verify your execution.</article>
        <article>If you require guidance, access the Org Chart should you need to decipher internal protocols.</article>
        <article>Your station is now active. Proceed with caution.</article>
        <br />
        <br />
        <NavLink to="/missions">view_missions</NavLink>
      </main>
    </>
  );
};

export default WelcomeScreen;