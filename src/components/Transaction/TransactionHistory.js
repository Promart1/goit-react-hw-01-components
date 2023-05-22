import { TransactionItems } from './TransactionItems';
import css from './Transaction.module.css';

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
