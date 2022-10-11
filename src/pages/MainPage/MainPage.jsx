import Budget from "../../components/Budget";
import ExpenseTotal from "../../components/ExpenseTotal";
import ExpenseList from "../../components/ExpenseList";
import AddExpenseForm from "../../components/AddExpenseForm";
import RemainingBudget from "../../components/Remaining";
import Nav from "../../components/Nav";
import Dashboard from "../../components/Dashboard";

function MainPage() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="flex flex-col w-full px-8 md:px-24">
        <div className="flex flex-col md:flex-row stats bg-primary text-primary-content mt-4 mb-16">
          <Budget />
          <RemainingBudget />
          <ExpenseTotal />
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="grid h-[400px] flex-grow card bg-base-300 rounded-box mt-4 md:mt-0 md:mr-6">
            <div className="flex flex-col px-4 pt-4">
              <h3 className="text-lg">Expenses</h3>
              <div className="">
                <ExpenseList />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid flex-col h-[260px] card bg-base-300 rounded-box">
              <div className="flex flex-col px-4 pt-4">
                <h3 className="text-lg">Add Expense</h3>
                <div className="mt-4">
                  <AddExpenseForm />
                </div>
              </div>
            </div>
            <div className="grid flex-col card bg-base-300 pb-4 md:pb-0 rounded-box mt-4 md:mt-0">
              <div className="flex flex-col px-4 pt-2">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
