const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
   commands: [
     {
       name: 'Google',
       key: '*',
       url: 'https://www.google.com',
       search: '/search?q={}'
     },
     {
       category: 'General',
       name: 'Gmail',
       key: 'gm',
       url: 'https://mail.google.com',
       color: 'linear-gradient(195deg, #DC4D41, #E8938B)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'General',
       name: 'iCloud',
       key: 'ic',
       url: 'https://icloud.com',
       search: '/{}',
       color: 'linear-gradient(197deg, #323232, #5E5E5E)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'General',
       name: 'Proton',
       key: 'pr',
       url: 'https://beta.protonmail.com',
       color: 'linear-gradient(195deg, #262A33, #636C82)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'General',
       name: 'Seedbox',
       key: 'se',
       url: 'https://psb24909.seedbox.io/',
       color: 'linear-gradient(135deg, #2B2B2B, #474747)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'General',
       name: 'WhatsApp',
       key: 'wh',
       url: 'https://web.whatsapp.com/',
       color: 'linear-gradient(180deg, #009688, #4AEE69)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'Entertainment',
       name: 'Netflix',
       key: 'ne',
       url: 'https://www.netflix.com',
       color: 'linear-gradient(135deg, #E50914, #CB020C)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Entertainment',
       name: 'Reddit',
       key: 're',
       url: 'https://reddit.com',
       search: '/search?q={}',
       color: 'linear-gradient(45deg, #FF8456, #FF4500)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Entertainment',
       name: 'Spotify',
       key: 'sp',
       url: 'https://open.spotify.com/',
       search: '/search/{}',
       color: 'linear-gradient(50deg, #1DB954, #282828)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Entertainment',
       name: 'Twitch',
       key: 'tw',
       url: 'https://www.twitch.tv',
       search: '/directory/game/{}',
       color: 'linear-gradient(270deg, #6441a5, #4b367c)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Entertainment',
       name: 'Youtube',
       key: 'yo',
       url: 'https://youtube.com/',
       search: '/results?search_query={}',
       color: 'linear-gradient(225deg, #cd201f, #cd4c1f)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       name: 'Youtube',
       key: 'you',
       url: 'https://youtube.com/',
       search: '/results?search_query={}',
       color: 'linear-gradient(225deg, #cd201f, #cd4c1f)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Amp',
       key: 'am',
       url: 'https://amp.hyper.re',
       color: 'linear-gradient(135deg, #173850, #24577C)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       name: 'Amp',
       key: 'amp',
       url: 'https://amp.hyper.re',
       color: 'linear-gradient(135deg, #173850, #24577C)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Jellyfin',
       key: 'je',
       url: 'https://jellyfin.hyper.re',
       color: 'linear-gradient(230deg, #9E61C5, #4E90DB)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Lidarr',
       key: 'li',
       url: 'https://lidarr.hyper.re',
       color: 'linear-gradient(135deg, #00A65B, #464747)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Plex',
       key: 'pl',
       url: 'https://plex.hyper.re',
       color: 'linear-gradient(175deg, #CC7B19, #E19D0E)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Radarr',
       key: 'ra',
       url: 'https://radarr.hyper.re',
       color: 'linear-gradient(135deg, #FFC230, #464747)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Sonarr',
       key: 'so',
       url: 'https://sonarr.hyper.re',
       color: 'linear-gradient(135deg, #36C6F4, #464747)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Tautulli',
       key: 'ta',
       url: 'https://tautulli.hyper.re',
       color: 'linear-gradient(300deg, #E5A00D, #DF9C0D)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Amazon',
       key: 'ama',
       url: 'https://smile.amazon.de',
       search: '/s?k={}',
       color: 'linear-gradient(270deg, #FF9900, #F3A847)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Google Drive',
       key: 'gd',
       url: 'https://drive.google.com',
       search: '/drive/search?q={}',
       color: 'linear-gradient(25deg, #FFD04B, #1EA362, #4688F3)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Google Maps',
       key: 'ma',
       url: 'https://maps.google.com/',
       search: '/maps/search/{}',
       color: 'linear-gradient(25deg, #FFBB1B, #DD4B39, #427FED, #65B045)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Google Photos',
       key: 'gp',
       url: 'https://photos.google.com/',
       search: '/search/{}',
       color: 'linear-gradient(225deg, #FFBB1B, #DD4B39, #427FED, #65B045)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Google Translate',
       key: 'tr',
       url: 'https://translate.google.com',
       color: 'linear-gradient(20deg, #E4ECFA, #4284F3)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: '1337x',
       key: '13',
       url: 'https://1337x.to',
       color: 'linear-gradient(350deg, #b92700, #DF6238)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Rarbg',
       key: 'rb',
       url: 'https://rarbg.to',
       search: '/torrents.php?search={}',
       color: 'linear-gradient(180deg, #3860BB, #D7DFF2)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       name: 'Speedtest',
       key: 'speed',
       url: 'https://speedtest.net',
       color: 'linear-gradient(180deg, #3860BB, #D7DFF2)',
       icon: 'circle',
       quickLaunch: false,
     },


   ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: '·',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};