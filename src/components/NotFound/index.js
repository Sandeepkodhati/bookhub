import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647250727/Screenshot_30_uavmge.png"
      alt="not found"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-paragraph">
      we are sorry, the page you requested could not be found
    </p>
    <Link to="/">
      <button className="go-back-home-btn" type="button">
        Go Back to Home
      </button>
    </Link>
  </div>
)

export default NotFound
