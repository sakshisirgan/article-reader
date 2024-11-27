import PropTypes from 'prop-types';

const StatusBlock = ({ title, value }) => (
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
      </div>
    </div>
  </div>
);


StatusBlock.propTypes = {
  title: PropTypes.string.isRequired, 
  value: PropTypes.number.isRequired, 
};

export default StatusBlock;
