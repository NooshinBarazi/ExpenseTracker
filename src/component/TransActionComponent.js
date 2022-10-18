const TransActionComponent = ({ transactions, onChange }) => {
  return (
    <section className="transaction-section">
      <h3 className="transaction-title">Transactions</h3>
      <input type="text" placeholder="search..." className="serach-input" onChange={onChange}/>
      {transactions.map((t) => (
        <>
        <div
          key={t.id}
          className="transaction"
          style={{ borderRight: t.type === "expense" && "4px solid #dc2626" }}
        >
          <span>{t.desc}</span>
          <span>$ {t.amount}</span>
        </div>
        </>
      ))}
    </section>
  );
};

export default TransActionComponent;
