import { useEffect, useState } from "react";
import BalanceComponent from "./BalanceComponent.js";
import TransActionComponent from "./TransActionComponent.js";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filteredItem, setFilteredItem] = useState(transactions);
  const [searchItem, setSearchItem] = useState('');

  const addTransAction = (formValue) => {
    console.log(formValue);
    const data = { ...formValue, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.map((t) => {
      t.type === "expense" ? (exp = exp + parseInt(t.amount)) : (inc = inc + parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);


  const FilterHandler = (searchValue) => {
    if(searchValue === ''){
      setFilteredItem(transactions)
      return
    }
   const filteredTransactions = transactions.filter(t => t.desc.toLowerCase().includes(searchValue.toLowerCase()))
   setFilteredItem(filteredTransactions)
  }

 const searchHandler = (e) => {
   setSearchItem(e.target.value)
   FilterHandler(e.target.value)
  }

  useEffect(() => {
    FilterHandler(searchItem)
  }, [transactions])

  return (
    <section className="container">
      <BalanceComponent
        expense={expense}
        income={income}
        addTransAction={addTransAction}
      />
      <TransActionComponent transactions={filteredItem} onChange={searchHandler}/>
    </section>
  );
};

export default ExpenseApp;
