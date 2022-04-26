import './index.css'

const React = require('react');

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <h1>Welcome</h1>
        <h1>The Date is {  new Date().toString() }</h1>
      </div>
    )
  }
}

export default App;