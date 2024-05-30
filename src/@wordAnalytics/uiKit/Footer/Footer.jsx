import { calculateLastActivity } from '../../services/helpers/calculateLastActivity';
import './Footer.css';

function Footer({ lastEditedDate }) {
  return (
    <footer className="footer">
      <small>&copy; Copyright by stanjke. All rights reserved.</small>
      <small>Last checked limits: {calculateLastActivity(lastEditedDate)}</small>
    </footer>
  );
}

export default Footer;
