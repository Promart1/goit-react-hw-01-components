import { TransactionItems } from '../TransactionItems/TransactionItems';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionhHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map(({ id, type, amount, currency }) => (
            <TransactionItems
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
