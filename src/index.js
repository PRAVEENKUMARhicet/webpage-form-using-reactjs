import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';
import Footer from './components/footer';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function MyApp(){
  return(
    <div>
      <Header/>
      <Table/>
      <Form/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<MyApp />,document.getElementById("root"));