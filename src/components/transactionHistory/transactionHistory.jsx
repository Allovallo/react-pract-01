import css from './transactionHistory.module.css'

const TableRow = ({ type, amount, currency }) => {
    return (
        <tr className={css.tr}>
            <td className={css.td}>{ type }</td>
            <td className={css.td}>{ amount }</td>
            <td className={css.td}>{ currency }</td>
        </tr>
    )
}

export const TransactionHistory = ({ items }) => {
    const tableRows = items.map(({ id, type, amount, currency }) =>
        <TableRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
        />
    );
    
    return (
        <table className={css.table}>
            <thead>
                <tr className={css.tr}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}