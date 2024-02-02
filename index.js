const fs = require('fs');
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');

let config = {};

try {
  config = require('./config.json');
} catch (error) {
  console.error('Error reading the configuration file:', error);
  process.exit(1);
}

const steamUsers = [];

function login(account) {
  const steamUser = new SteamUser();

  steamUser.logOn({
    accountName: account.username,
    password: account.password,
    twoFactorCode: SteamTotp.generateAuthCode(account.sharedSecret),
  });

  steamUser.on('loggedOn', () => {
    console.log(`Logged in to Steam account: ${account.username}`);
    steamUser.setPersona(SteamUser.EPersonaState.Online);
    account.games.forEach((gameAppId) => {
      console.log(`Launching game with appid ${gameAppId}`);
      steamUser.gamesPlayed([gameAppId]);
    });
  });

  steamUsers.push(steamUser);
}

config.accounts.forEach(login);

function keepGamesRunning() {
  steamUsers.forEach((steamUser) => {
    steamUser.gamesPlayed(config.accounts.map((account) => account.games).flat());
  });
}

setInterval(keepGamesRunning, 60000);

const startTime = new Date();

setInterval(() => {
  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  process.stdout.write(`Elapsed time ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s \r`);
}, 1000);
