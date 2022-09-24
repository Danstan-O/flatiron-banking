
import Transaction from "./Transaction";

function TransactionsList({transactions, setTransactions, search}) {

  // Here, we know that array sort in javascript accepts a callback that takes two items; a, and b
  // and returns 1 if the item that is passed as the first argument is bigger, -1 if the second 
  // item is the bigger one, and 0 if they are equal. As such, we are using -1 as the sort strategies
  // for all items, which means that on the first click, the items will be sorted in the ascending
  // order. Multiple clicks toggle the order in which sorting is done by converting the value of
  

  let transactionList = "Loading..." 

  if(transactions){

    // filters displayed list on description and category

    const filteredTransactions = transactions.filter(transaction => {
      return (
        transaction.description.toLowerCase().includes(search.toLowerCase())) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
    })

    transactionList = filteredTransactions.map(transaction => {
      return <Transaction key={transaction.id} transaction={transaction} setTransactions={setTransactions}/>
    })
  }


  

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th style={{backgroundColor: "blue)", cursor: "pointer"}}>
            <h3 className="ui center aligned header" >Date</h3>
          </th>
          <th style={{backgroundColor: "blue)", cursor: "pointer"}}>
            <h3 className="ui center aligned header" >Description</h3>
          </th>
          <th style={{backgroundColor: "blue)", cursor: "pointer"}}>
            <h3 className="ui center aligned header" >Category</h3>
          </th>
          <th style={{backgroundColor: "blue)", cursor: "pointer"}}>
            <h3 className="ui center aligned header" >Amount</h3>
          </th>
        </tr>
        {transactionList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
