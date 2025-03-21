import { Link } from 'react-router';
import './WelcomeScreen.css';

const WelcomeScreen = () => {

  return (
    <main>
      <h1>Welcome to Event Horizon Liability Solutions</h1>
      <p>Congratulations on your induction into EHLS. As our newest cybersecurity operative, your expertise is critical to safeguarding our network's integrity.</p>
      <p>Your first directive: Navigate to Missions to retrieve your daily objectives. Each task is time-sensitive and requires precision. Upon completion, submit a detailed report to verify your execution.</p>
      <p>If you require guidance, access the Org Chart should you need to decipher internal protocols.</p>
      <p>Your station is now active. Proceed with caution.</p>
      <Link to="/missions"><button>View Missions</button></Link>
    </main>
  );
};

export default WelcomeScreen;