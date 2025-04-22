const tabs = {
  main: 'Main',
  'cex-api': 'CEX Api',
  'dex-api': 'DEX Api',
  'dev': 'dev',
}

const dev = [
  {
    name: 'crypto-io-bot',
    url: 'https://vscode.dev/tunnel/evgeniis-macbook-pro/Users/evnomad/node-projects/crypto-io-bot',
    image: '',
    tab: 'dev'
  },
  {
    name: 'listings-parser',
    url: 'https://vscode.dev/tunnel/evgeniis-macbook-pro/Users/evnomad/node-projects/listings-parser',
    image: '',
    tab: 'dev'
  },
  {
    name: 'homepage',
    url: 'https://vscode.dev/tunnel/evgeniis-macbook-pro/Users/evnomad/css-projects/Homepage',
    image: '',
    tab: 'dev'
  }
];

const cexApi = [
  {
    name: 'Bitrue',
    url: 'https://www.bitrue.com/api-docs#general-info',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Lbank',
    url: 'https://www.lbank.com/docs/index.html#introduction',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Poloniex',
    url: 'https://api-docs.poloniex.com/spot/',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Probit',
    url: 'https://docs-en.probit.com/docs/getting-started',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Coinex',
    url: 'https://docs.coinex.com/api/v2/spot/market/http/list-market',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Bitmart',
    url: 'https://developer-pro.bitmart.com/en/spot/#public-market-data',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Kucoin',
    url: 'https://www.kucoin.com/docs/beginners/introduction?x=th_TH',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Bybit',
    url: 'https://bybit-exchange.github.io/docs/v5/intro',
    image: '',
    tab: 'cex-api'
  }
];

const dexApi = [
  {
    name: '1inch',
    url: 'https://portal.1inch.dev/documentation/apis/authentication',
    image: '',
    tab: 'dex-api'
  },
  {
    name: 'Jupiter',
    url: 'https://dev.jup.ag/docs/api/swap-api',
    image: '',
    tab: 'dex-api'
  },
  {
    name: 'Odos',
    url: 'https://docs.odos.xyz/build/api_pricing',
    image: '',
    tab: 'dex-api'
  },
  {
    name: 'Sushi',
    url: 'https://docs.sushi.com/api/swagger',
    image: '',
    tab: 'dex-api'
  }
];


const main = [
  {
    name: 'Epoch Converter',
    url: 'https://www.epochconverter.com/',
    image: '',
    tab: 'main'
  },
  {
    name: 'Translate',
    url: 'https://translate.google.ru/?sl=en&tl=th&op=translate',
    image: '',
    tab: 'main'
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/',
    image: '',
    tab: 'main'
  },
  {
    name: 'Just NS',
    url: 'https://player.twitch.tv/?channel=just_ns&enableExtensions=true&muted=false&parent=twitch.tv&player=popout&quality=auto&volume=0.29',
    image: '',
    tab: 'main'
  },
  {
    name: 'Black UFA',
    url: 'https://player.twitch.tv/?channel=blackufa&enableExtensions=true&muted=false&parent=twitch.tv&player=popout&quality=chunked&volume=1',
    image: '',
    tab: 'main'
  }
];

const sites = [
  ...main,
  ...cexApi,
  ...dexApi,
  ...dev
];

export {
  tabs,
  sites
}