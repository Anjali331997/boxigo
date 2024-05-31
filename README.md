<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boxigo React Assignment</title>
</head>
<body>
    <h1>Boxigo React Assignment</h1>

    <h2>Introduction</h2>
    <p>This project is a React JS application designed to consume an API and generate a user interface based on the provided data. The primary goal is to display move details dynamically by fetching data from the API and presenting it in an interactive and user-friendly manner.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#documentation">Documentation</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#troubleshooting">Troubleshooting</a></li>
        <li><a href="#contributors">Contributors</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="installation">Installation</h2>
    <p>To set up the project locally, follow these steps:</p>
    <ol>
        <li><strong>Clone the repository:</strong></li>
        <pre><code>git clone &lt;repository-url&gt;</code></pre>
        <li><strong>Navigate to the project directory:</strong></li>
        <pre><code>cd boxigo-react-assignment</code></pre>
        <li><strong>Install dependencies:</strong></li>
        <pre><code>npm install</code></pre>
    </ol>

    <h2 id="usage">Usage</h2>
    <p>To run the project, use the following command:</p>
    <pre><code>npm start</code></pre>
    <p>This will start the development server and open the application in your default web browser.</p>

    <h2 id="features">Features</h2>
    <ul>
        <li><strong>Consume API:</strong> Fetch data from the provided API.</li>
        <li><strong>Dynamic UI:</strong> Display move details dynamically based on the fetched data.</li>
        <li><strong>Interactive Elements:</strong> Expand and collapse sections to show/hide move details.</li>
    </ul>

    <h2 id="dependencies">Dependencies</h2>
    <ul>
        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
        <li><strong>Axios:</strong> Promise-based HTTP client for the browser and Node.js.</li>
    </ul>

    <h2 id="configuration">Configuration</h2>
    <p>No specific configuration is required for this project. Ensure that the API endpoint (<code>http://test.api.boxigo.in/sample-data/</code>) is accessible.</p>

    <h2 id="documentation">Documentation</h2>
    <ol>
        <li><strong>Step 1:</strong> Fetch data from the API and display it in a structured format.</li>
        <li><strong>Step 2:</strong> Implement an interactive element (e.g., a button) that, when clicked, expands to show detailed information about a move and collapses when clicked again.</li>
    </ol>

    <h2 id="examples">Examples</h2>
    <h3>Fetching Data:</h3>
    <pre><code>useEffect(() => {
  axios.get('http://test.api.boxigo.in/sample-data/')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the data!", error);
    });
}, []);</code></pre>

    <h3>Interactive UI Element:</h3>
    <pre><code>const handleToggle = (id) => {
  setExpanded(prevState => ({
    ...prevState,
    [id]: !prevState[id]
  }));
};</code></pre>

    <h2 id="troubleshooting">Troubleshooting</h2>
    <ul>
        <li><strong>Issue:</strong> API data not loading.</li>
        <li><strong>Solution:</strong> Check if the API endpoint is correct and accessible.</li>
        <li><strong>Issue:</strong> UI not updating on data fetch.</li>
        <li><strong>Solution:</strong> Ensure state is managed correctly and components re-render when state changes.</li>
    </ul>

    <h2 id="contributors">Contributors</h2>
    <p><a href="https://github.com/your-github-profile">Your Name</a></p>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
