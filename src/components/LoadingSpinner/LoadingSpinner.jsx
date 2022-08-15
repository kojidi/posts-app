import './LoadingSpinner.scss';
import spinner from '../../assets/img/spinner.png';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
        <img src={spinner} alt="Loading ..." />
    </div>
  )
}

export default LoadingSpinner