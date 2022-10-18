import { useState } from "react"; 

 const TransActionForm = ({addTransAction, setIsShow}) => {
    const [formValue, setFormValue] = useState({
      amount: '',
      desc: "",
      type: "expense",
    });
  
    const changeHandler = (e) => {
      setFormValue({...formValue, [e.target.name]: e.target.value});
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      addTransAction(formValue);
      setFormValue({amount: '',
        desc: "",
        type: "expense",})
        setIsShow(false);
    };
  
    return (
      <form onSubmit={submitHandler}>
        <input
          type="number"
          onChange={changeHandler}
          value={formValue.amount}
          name="amount"
          placeholder="amount"
        />
        <input
          type="text"
          onChange={changeHandler}
          value={formValue.desc}
          name="desc"
          placeholder="description"
        />
        <div className="radioBox">
          <input
            type="radio"
            onChange={changeHandler}
            value="expense"
            name="type"
            checked={formValue.type === "expense"}
            id="expense"
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            onChange={changeHandler}
            value="income"
            name="type"
            checked={formValue.type === "income"}
            id = "income"
          />
          <label htmlFor="income">income</label>
        </div>
        <button className="btn primary" type="submit">Add TransAction</button>
      </form>
    );
  };

  export default TransActionForm;