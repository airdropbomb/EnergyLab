# Energylabs Login

A Node.js script for automating Energylabs tasks including login, faucet claims, swaps, and staking.

## Registration

New users can register at: [Energylabs Registration](https://defi-energylabs.com/index?ref=BK6QBY01)

## Features

- Automated login functionality
- Daily faucet claiming
- Token swapping (ENRG ↔ WENRG)
- Staking automation
- Multi-account support
- Colorful console output
- Error handling and retry mechanisms

## Setup

1. Clone this repository:
```bash
git clone https://github.com/himanshusaroha648/EnergyLab.git
```

2. Install dependencies:
```bash
npm install
```

3. Create an `account.txt` file with your accounts in format:
```
username:password
username2:password2
```

4. Run the script:
```bash
node login.js
```

## Features Details

### Login
- Secure login with session management
- Multi-account support
- Error handling and retry mechanisms

### Faucet
- Daily faucet claiming
- Status checking
- Error handling

### Swaps
- Automated token swaps
- Alternating swap directions (ENRG ↔ WENRG)
- Random amount generation
- 5 swaps per day

### Staking
- Automated staking
- Amount: 1 token
- Status checking
- Error handling

## Files

- `login.js` - Main script file
- `account.txt` - Account credentials file
- `package.json` - Project dependencies
- `README.md` - Documentation

## API Endpoints

The script uses the following API endpoints:
- Login: https://defi-energylabs.com/index
- Faucet: https://defi-energylabs.com/faucet
- Swap: https://defi-energylabs.com/swap
- Staking: https://defi-energylabs.com/staking

## Note

- Make sure you have Node.js installed
- Keep your account.txt file secure
- The script includes delays to prevent rate limiting
- Use responsibly and in accordance with the platform's terms of service

## GitHub Repository

[View on GitHub](https://github.com/himanshusaroha648/EnergyLab.git) 
