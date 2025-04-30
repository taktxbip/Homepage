const tabs = {
  main: 'Main',
  'cex-api': 'CEX Api',
  'dex-api': 'DEX Api',
  'dev': 'dev',
}

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
    color: '#9FB3DF', // blue
    tab: 'main'
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/',
    image: '',
    color: '#F75A5A', // red
    tab: 'main'
  },
  {
    name: 'Just NS',
    url: 'https://player.twitch.tv/?channel=just_ns&enableExtensions=true&muted=false&parent=twitch.tv&player=popout&quality=auto&volume=0.29',
    image: '',
    color: '#3D365C', // purple
    tab: 'main'
  },
  {
    name: 'Black UFA',
    url: 'https://player.twitch.tv/?channel=blackufa&enableExtensions=true&muted=false&parent=twitch.tv&player=popout&quality=chunked&volume=1',
    image: '',
    color: '#3D365C', // purple
    tab: 'main'
  },
  {
    name: 'Bitrefill',
    url: 'https://www.bitrefill.com/',
    image: '',
    tab: 'main'
  },
  {
    name: 'Travala',
    url: 'https://www.travala.com/',
    image: '',
    tab: 'main'
  },
  {
    name: 'Arbitrage Services',
    url: 'https://arbitrage-services.com/',
    image: '',
    tab: 'main'
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/ab/messages/rooms/',
    image: '',
    color: '#03A791',
    tab: 'main'
  },
  {
    name: 'Thaifriendly',
    url: 'https://www.thaifriendly.com/',
    image: '',
    color: '#9FB3DF',
    tab: 'main'
  },
  {
    name: 'Tinder',
    url: 'https://tinder.com/',
    image: '',
    color: '#FF6363', // pink
    tab: 'main'
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
    color: '#F5C45E', // yellow
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
    color: '#1DCD9F', // salad
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
    color: '#03A791', // green
    tab: 'cex-api'
  },
  {
    name: 'Bybit',
    url: 'https://bybit-exchange.github.io/docs/v5/intro',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'OKX',
    url: 'https://www.okx.com/docs-v5/en/#overview',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Bitget',
    url: 'https://www.bitget.com/api-doc/contract/market/Get-All-Symbol-Ticker',
    image: '',
    color: '#1DCD9F', // salad
    tab: 'cex-api'
  },
  {
    name: 'HTX',
    url: 'https://www.htx.com/en-us/opend/newApiPages/?id=8cb7c385-77b5-11ed-9966-0242ac110003',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Mexc',
    url: 'https://mexcdevelop.github.io/apidocs/contract_v1_en/#update-log',
    image: '',
    color: '#9FB3DF', // blue
    tab: 'cex-api'
  },
  {
    name: 'Gate',
    url: 'https://www.gate.io/docs/developers/apiv4/en/',
    image: '',
    tab: 'cex-api'
  },
  {
    name: 'Bitfinex',
    url: 'https://docs.bitfinex.com/docs/rest-general',
    image: '',
    color: '#03A791', // green
    tab: 'cex-api'
  },
  {
    name: 'Bingx',
    url: 'https://bingx-api.github.io/docs/#/en-us/spot/changelog',
    image: '',
    color: '#9FB3DF', // blue
    tab: 'cex-api'
  },
  {
    name: 'Binance',
    url: 'https://developers.binance.com/docs/binance-spot-api-docs',
    image: '',
    color: '#F5C45E', // yellow
    tab: 'cex-api'
  },
  {
    name: 'XT',
    url: 'https://doc.xt.com/',
    image: '',
    color: '#F5C45E', // yellow
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
    name: 'team-nerd-bot',
    url: 'https://vscode.dev/tunnel/evgeniis-macbook-pro/Users/evnomad/node-projects/team-nerd-bot',
    image: '',
    tab: 'dev'
  },
  {
    name: 'homepage',
    url: 'https://vscode.dev/tunnel/evgeniis-macbook-pro/Users/evnomad/css-projects/Homepage',
    image: '',
    tab: 'dev'
  },
  {
    name: 'Mongo DB',
    url: 'https://cloud.mongodb.com/v2/6317208790cdcd7e82c73246#/metrics/replicaSet/659e7b08c5c26b747eaf799e/explorer/CryptoIO',
    image: '',
    color: '#03A791', // green
    tab: 'dev'
  },
  {
    name: 'Github',
    url: 'https://github.com/taktxbip?tab=repositories',
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