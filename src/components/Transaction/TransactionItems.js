import PropTypes from 'prop-types';

export const TransactionItems = ({ type, amount, currency }) => {
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

TransactionItems.protoType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
