import SteamUser from 'steam-user';
import SteamTotp from 'steam-totp';

interface Account {
  username: string;
  password: string;
  sharedSecret: string;
  games: number[];
  status: 'Online' | 'Away' | 'Invisible' | 'Offline';
}

interface Config {
  accounts: Account[];
}

let config: Config = { accounts: [] };

try {
  config = require('../config.dev.json');
} catch (error) {
  console.error('Error reading the configuration file:', error);
  process.exit(1);
}

const steamUsers: SteamUser[] = [];

function login(account: Account): void {
  const steamUser = new SteamUser();

  steamUser.logOn({
    accountName: account.username,
    password: account.password,
    twoFactorCode: SteamTotp.generateAuthCode(account.sharedSecret),
  });

  steamUser.on('loggedOn', () => {
    console.log(`🟢 Logged in to Steam account: ${account.username}`);
    steamUser.setPersona(SteamUser.EPersonaState[account.status]);

    function playGamesWithDelay(games: number[], index: number) {
      if (index >= games.length) return;

      const gameAppId = games[index];
      console.log(`🕹️ Launching game with appid ${gameAppId} for account ${account.username}`);
      steamUser.gamesPlayed([gameAppId]);

      setTimeout(() => {
        playGamesWithDelay(games, index + 1);
      }, 700);
    }

    playGamesWithDelay(account.games, 0);
  });

  steamUsers.push(steamUser);
}

config.accounts.forEach(login);