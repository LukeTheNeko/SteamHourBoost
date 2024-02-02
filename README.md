<div align="center">
  <img src="./docs/imgs/GameHourBoost.png" alt="" height="65">
</div>

<h2>Introduction</h2>
<p>Game Hour Boost is a simple JavaScript program designed to simulate your games being open in your account. This allows you to farm hours in the games registered in the <code>config.json</code> file.</p>

<h2>Features</h2>
<ul>
  <li>Unlimited Accounts support</li>
  <li>Up to 32 Games per account</li>
  <li>Custom In-Game Title</li>
</ul>

<h2>Getting Started</h2>
<ol>
  <li>Install the latest version of NodeJS from the <a href="https://nodejs.org/en">official website</a>.</li>
  <li>Run <code>install.bat</code> and wait until it installs all required modules.</li>
  <li>Open the <code>config.json</code> file and fill in all the required fields.</li>
  <li>Run the script by executing <code>node index.js</code> or use <code>start.bat</code> to launch the script.</li>
</ol>

<p>Feel free to customize the <code>config.json</code> to suit your preferences.</p>

<h2>Configuration (config.json)</h2>
<pre>
<code>
{
  "accounts": [
    {
      "username": "your_username",
      "password": "your_password",
      "games": [
        {
          "name": "Game1",
          "customTitle": "Custom Title 1"
        },
        {
          "name": "Game2",
          "customTitle": "Custom Title 2"
        },
        // Add more games as needed
      ]
    },
    // Add more accounts as needed
  ]
}
</code>
</pre>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>