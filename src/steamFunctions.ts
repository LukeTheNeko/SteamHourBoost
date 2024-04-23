import SteamUser from 'steam-user';
import SteamTotp from 'steam-totp';
import axios from 'axios';
import { Account } from './types';

async function getGameName(appId: number): Promise<string> {
  try {
    const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
    const data = response.data;
    if (data[appId].success) {
      return data[appId].data.name;
    }
  } catch (error) {
    console.error('Error fetching game details:', error);
  }
  return 'Unknown';
}

export function login(account: Account): SteamUser {
  const steamUser = new SteamUser();

  const logOnOptions: any = {
    accountName: account.username,
    password: account.password,
  };

  if (account.sharedSecret) {
    logOnOptions.twoFactorCode = SteamTotp.generateAuthCode(account.sharedSecret);
  }

  steamUser.logOn(logOnOptions);

  steamUser.on('error', (error) => {
    console.error(`🔴 Error logging in to Steam account ${account.username}:`, error);
  });

  steamUser.on('loggedOn', () => {
    console.log(`🟢 Logged in to Steam account: ${account.username}`);
    steamUser.setPersona(SteamUser.EPersonaState[account.status]);

    async function playGamesWithDelay(games: number[], index: number) {
      if (index >= games.length) return;

      const gameAppId = games[index];
      const gameName = await getGameName(gameAppId);
      console.log(`🕹️  Launching ${gameName} (AppID: ${gameAppId}) for account ${account.username}`);
      steamUser.gamesPlayed([gameAppId]);

      setTimeout(() => {
        playGamesWithDelay(games, index + 1);
      }, 800);
    }

    playGamesWithDelay(account.games, 0);
  });

  return steamUser;
}