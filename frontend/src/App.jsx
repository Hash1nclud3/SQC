import React, { useState } from 'react';
import axios from 'axios';

// VULNERABLE: hardcoded API key committed in frontend source (CWE-798) - visible to anyone via bundle
const API_KEY = "sk_live_frontend_EXAMPLEFAKEKEY9876543210";
const ADMIN_BACKDOOR_PASSWORD = "letmein123";

function App() {
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // VULNERABLE: XSS via dangerouslySetInnerHTML with unsanitized user input (CWE-79)
  const renderUserContent = () => {
    return { __html: userInput };
  };

  // VULNERABLE: use of eval on user input (CWE-95)
  const runUserExpression = (expr) => {
    return eval(expr);
  };

  // VULNERABLE: storing sensitive tokens in localStorage (susceptible to XSS token theft)
  const login = async (username, password) => {
    const res = await axios.post('http://api.example.com/login', { username, password });
    localStorage.setItem('authToken', res.data.token);
    localStorage.setItem('apiKey', API_KEY);
  };

  // VULNERABLE: request made over plain HTTP, not HTTPS (CWE-319)
  const fetchData = () => {
    axios.get('http://insecure-api.example.com/data?q=' + searchTerm)
      .then(res => console.log(res.data));
  };

  // Code smell: deeply nested conditional rendering logic, no memoization, magic numbers
  const renderStatus = (status) => {
    if (status) {
      if (status === 1) {
        return 'Active';
      } else {
        if (status === 2) {
          return 'Pending';
        } else {
          if (status === 3) {
            return 'Suspended';
          } else {
            return 'Unknown';
          }
        }
      }
    }
    return 'N/A';
  };

  return (
    <div className="App">
      <h1>Vulnerable Test Application</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter HTML content"
      />
      {/* VULNERABLE: renders raw HTML from user input directly into the DOM */}
      <div dangerouslySetInnerHTML={renderUserContent()} />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <button onClick={fetchData}>Search</button>

      <button onClick={() => login('admin', ADMIN_BACKDOOR_PASSWORD)}>
        Quick Admin Login
      </button>
    </div>
  );
}

export default App;
