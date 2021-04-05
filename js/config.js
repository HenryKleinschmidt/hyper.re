const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   {
     name: 'Google',
     key: '*',
     url: 'https://www.google.com',
     search: '/search?q={}'
   },
   {
     name: 'Bing',
     key: '*',
     url: 'https://www.bing.com',
     search: '/search?q={}'
   },
   {
     name: 'DuckDuckGo',
     key: '*',
     url: 'https://duckduckgo.com',
     search: '/?q={}}'
   },
   {
       name: 'Startpage',
       key: '*',
       url: 'https://www.startpage.com',
       search: '/do/search?query={}'
     },

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
       name: 'N26',
       key: '26',
       url: 'https://n26.com',
       color: 'linear-gradient(360deg, #48AC98, #3FAC88)',
       icon: 'circle',
       quickLaunch: true,
     },
     {
       category: 'General',
       name: 'Proton',
       key: 'pr',
       url: 'https://beta.protonmail.com',
       search: '/all-mail?keyword={}',
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
       name: 'Plex',
       key: 'pl',
       url: 'https://plex.hyper.re',
       color: 'linear-gradient(175deg, #CC7B19, #E19D0E)',
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
       color: 'linear-gradient(360deg, #1DB954, #6FF29D)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Entertainment',
       name: 'Unsplash',
       key: 'un',
       url: 'https://unsplash.com',
       search: '/s/photos/{}',
       color: 'linear-gradient(270deg, #0C7186, #1B9A98)',
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
       name: 'Bitwarden',
       key: 'bw',
       url: 'https://bitwarden.hyper.re',
       color: 'linear-gradient(20deg, #D3DFF2, #4E90DB)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Self Hosted',
       name: 'Data',
       key: 'da',
       url: 'https://data.hyper.re',
       color: 'linear-gradient(330deg, #35414A, #00AB44)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
      category: 'Self Hosted',
      name: 'Drive',
      key: 'dr',
      url: 'https://drive.hyper.re',
      color: 'linear-gradient(73deg, #2266BB, #4E90DB)',
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
       name: 'Amazon',
       key: 'am',
       url: 'https://smile.amazon.de',
       search: '/s?k={}',
       color: 'linear-gradient(270deg, #FF9900, #F3A847)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       name: 'Amazon',
       key: 'ama',
       url: 'https://smile.amazon.de',
       search: '/s?k={}',
       color: 'linear-gradient(270deg, #FF9900, #F3A847)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
      name: 'Cloudflare',
      key: 'cl',
      url: 'https://dash.cloudflare.com/',
      color: 'linear-gradient(230deg, #FF9900, #F3A847)',
      icon: 'circle',
      quickLaunch: false,
    },
     {
       category: 'Miscellaneous',
       name: 'Translate',
       key: 'tr',
       url: 'https://www.deepl.com/',
       search: '/translator#de/en/{}',
       color: 'linear-gradient(20deg, #E4ECFA, #0f2b46)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       name: 'Translate to German',
       key: 'tre',
       url: 'https://www.deepl.com/',
       search: '/translator#en/de/{}',
       color: 'linear-gradient(20deg, #E4ECFA, #0f2b46)',
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
       category: 'Miscellaneous',
       name: 'Speedtest',
       key: 'st',
       url: 'https://speedtest.net',
       color: 'linear-gradient(360deg, #896DFF, #AE70FF)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
       category: 'Miscellaneous',
       name: 'Thingiverse',
       key: 'th',
       url: 'https://www.thingiverse.com',
       search: '/search?q={}',
       color: 'linear-gradient(294deg, #248BFB, #0063CE)',
       icon: 'circle',
       quickLaunch: false,
     },
     {
      name: 'Help',
      key: 'help',
      url: 'https://github.com/Ozencb/tilde-enhanced',
      color: 'linear-gradient(294deg, #FF0000, #FF0000)',
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
  searchDelimiter: ' ',

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
