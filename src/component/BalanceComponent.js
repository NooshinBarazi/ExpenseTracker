import { useState } from "react";
import TransActionForm from "./TransActionForm";

const BalanceComponent = ({ expense, income, addTransAction}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="top-section">
        <p>Balance: {income - expense}</p>
        <button className={`btn ${isShow? 'cancel' : ''}`} onClick={() => setIsShow(!isShow)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransAction={addTransAction} setIsShow = {setIsShow}/>}
      <div className="result-section">
        <div className="expenseBox">Expense<span>{expense} $</span></div>
        <div className="expenseBox">Income<span style={{color: '#15803d'}}>{income} $</span></div>
      </div>
    </div>
  );
};

export default BalanceComponent;


