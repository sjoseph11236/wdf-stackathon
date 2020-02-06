import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = { 
      customers: []
    }
  }
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}));
  }

  render() {
    const { customers } = this.state;
    console.log("TCL: App -> render -> customers ", customers )
    
    return (
      <div className="App">
        <h1>WDF STACKATHON</h1>
        <ul>
          {customers.map(customer => {
            return <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
