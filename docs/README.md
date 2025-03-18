<div align="center">
  <img src="./imgs/SteamHourBoost.png" height="75">
</div>

<h2>Introduction</h2>
<p>Game Hour Boost is a simple JavaScript program designed to simulate your games being open in your account. This allows you to boost hours in the games registered in the <code>config.json</code> file.</p>

<h2>Features</h2>
<ul>
  <li>Unlimited Accounts support</li>
  <li>Up to 32 Games per account</li>
  <li>You can choose the status between Online, Away, Invisible and Offline</li>
</ul>

<h2>Getting Started</h2>
<ol>
  <li>Install the LTS version of NodeJS from the <a href="https://nodejs.org/en">official website</a>.</li>
  <li>Install using <code>npm install</code> and wait until it installs all required modules.</li>
  <li>Open the <code>config.json</code> file and fill in all the required fields.</li>
  <li>To start the script, use: <code>npm run dev</code> Starts the project in development mode</li>
  <li>To compile the project, use: <code>npm run build</code> Builds the project</li>
</ol>

<h2>Configuration (config.json)</h2>
<pre>
<code>
{
    "accounts": [
      {
        "username": "username1",
        "password": "password1",
        "sharedSecret": "sharedSecret1",
        "games": [ 730, 440, 570 ]
        "status": "Invisible"
      },
      {
        "username": "username2",
        "password": "password2",
        "sharedSecret": "sharedSecret2",
        "games": [ 730, 440, 570 ]
        "status": "Online"
      }
    ]
  }
</code>
</pre>

<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
