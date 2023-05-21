import PropTypes from 'prop-types';

export const TransactionItems =({ type, amount, currency }) => {
    return (
        <>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

        </>
    )
}

TransactionItems.protoType = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}