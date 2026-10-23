//  Glyph Loot Filter by levinium
//  Based on D2R Simple Loot Filter by Cbraqz (nexusmods.com/diablo2resurrected/mods/54)
//  and its D2RMM conversion by kabobist (nexusmods.com/diablo2resurrected/mods/205)


// Color reference (warlock update)
//
// ÿc0 - white          ÿc= - white1
// ÿc5 - gray           ÿcK - gray1           ÿcI - gray2
// ÿc6 - black          ÿcM - black1
// ÿc1 - red            ÿcE - lightred        ÿcS - darkred         ÿcT - darkred2 (was skyblue pre-warlock)
// ÿc8 - orange         ÿc@ - orange1         ÿcJ - orange2         ÿcL - orange3
// ÿc7 - tan
// ÿc9 - yellow         ÿcR - yellow1
// ÿc4 - gold           ÿcD - gold1           ÿcH - lightgold
// ÿc2 - green          ÿcQ - green1          ÿcC - green2          ÿc< - green3
// ÿcA - darkgreen      ÿc: - darkgreen2
// ÿcN - turquoise
// ÿc3 - blue           ÿcB - blue1           ÿcU - lightblue (was red1 pre-warlock)
// ÿcF - lightblue1 (broken)    ÿcP - pink2
// ÿc; - purple
// ÿcO - pink           ÿcG - lightpink

const colors = {
  // Whites
  white: 'ÿc0',
  white1: 'ÿc=',
  // Grays
  grey: 'ÿc5',
  grey1: 'ÿcK',
  grey2: 'ÿcI',
  // Blacks
  black: 'ÿc6',
  black1: 'ÿcM',
  // Reds
  red: 'ÿc1',
  lightred: 'ÿcE',
  darkred: 'ÿcS',
  darkred2: 'ÿcT',     // was skyblue pre-warlock
  // Oranges
  orange: 'ÿc8',
  orange1: 'ÿc@',
  orange2: 'ÿcJ',
  orange3: 'ÿcL',
  // Tan
  tan: 'ÿc7',
  // Yellows
  yellow: 'ÿc9',
  yellow1: 'ÿcR',
  // Golds
  gold: 'ÿc4',
  gold1: 'ÿcD',
  lightgold: 'ÿcH',
  // Greens
  green: 'ÿc2',
  green1: 'ÿcQ',
  green2: 'ÿcC',
  green3: 'ÿc<',
  darkgreen: 'ÿcA',
  darkgreen2: 'ÿc:',
  // Turquoise
  turquoise: 'ÿcN',
  // Blues
  blue: 'ÿc3',
  blue1: 'ÿcB',
  lightblue: 'ÿcU',    // was red1 pre-warlock
  // lightblue1 'ÿcF' - broken
  pink2: 'ÿcP',
  // Purple
  purple: 'ÿc;',
  // Pinks
  pink: 'ÿcO',
  lightpink: 'ÿcG',
  // Utility
  close: 'ÿc0',
}

// Confirmed broken symbols/colors in D2R (do not use):
// ◻ emptymedsquare    ⬤ largecircle    ➜ heavyarrow
// ✧ emptystar4        ✦ star4          ✪ star2
// ◊ emptydiamond      ♦ diamond        ⬦ emptymeddiamond
// ⚷ key               ✝ cross
// ⬢ solidhexagon      ⬡ hexagon         ⬟ pentagon
// ✱ asterisk2          ✶ star3            ❂ circledopenstar
// ⊛ circledasterisk    ❇ sparkle          ❋ heavyflorette
// ✿ flower
// ÿcF lightblue1

// Symbols library
// Status key:
//   (no tag)                      = confirmed working in D2R
//   //unconfirmed - likely works  = has glyph in blizzardglobal font, not yet tested in-game
//   //unconfirmed - likely broken = no glyph in any D2R font, not yet tested in-game
//   // broken                     = confirmed broken in-game
const symbols = {
  // Dots
  dot: '•',

  // Circles
  circle: '●',
  emptycircle: '○',
  ring: '◯',
  // largecircle '⬤' - broken
  fisheye: '◉',            //unconfirmed - likely broken
  bullseye: '◎',           //unconfirmed - likely works
  circleddot: '⊙',        //unconfirmed - likely works
  doublecircle: '⊚',      //unconfirmed - likely broken

  // Squares
  square: '■',
  emptysquare: '□',
  medsquare: '◼',          //unconfirmed - likely broken
  // emptymedsquare '◻' - broken
  smallsquare: '▪',        //unconfirmed - likely broken
  emptysmallsquare: '▫',  //unconfirmed - likely broken

  // Triangles
  triangle: '▲',
  emptytriangle: '△',
  triangledown: '▼',      //unconfirmed - likely works
  emptytriangledown: '▽', //unconfirmed - likely works
  triangleright: '▶',     //unconfirmed - likely works
  emptytriangleright: '▷', //unconfirmed - likely works
  triangleleft: '◀',      //unconfirmed - likely works
  emptytriangleleft: '◁', //unconfirmed - likely works
  smalltriangle: '▴',     //unconfirmed - likely broken
  smalltriangledown: '▾', //unconfirmed - likely broken

  // Diamonds
  // diamond '♦' - broken
  // emptydiamond '◊' - broken
  diamond: '◆',
  emptylargediamond: '◇',
  meddiamond: '⬥',        //unconfirmed - likely broken
  // emptymeddiamond '⬦' - broken

  // Stars
  star: '★',
  emptystar: '☆',
  // star2 '✪' - broken
  // star3 '✶' - broken
  // star4 '✦' - broken
  // emptystar4 '✧' - broken
  star6: '✡',              //unconfirmed - likely broken
  // asterisk '✳' - broken (no glyph in any D2R font)
  // asterisk2 '✱' - broken

  // Hearts
  heart: '♥',
  emptyheart: '♡',

  // Card suits
  spade: '♠',
  emptyspade: '♤',
  club: '♣',
  emptyclub: '♧',

  // Crosses & checks
  plus: '✚',
  x: '✖',
  // cross '✝' - broken
  dagger: '†',
  check: '✓',
  heavycheck: '✔',         //unconfirmed - likely broken
  heavyx: '✘',             //unconfirmed - likely broken
  ballot: '✗',             //unconfirmed - likely broken
  maltesecross: '✠',       //unconfirmed - likely broken

  // Arrows
  arrowright: '→',
  arrowup: '↑',
  arrowdown: '↓',
  arrowleft: '←',
  arrowupdown: '↕',       //unconfirmed - likely works
  arrowleftright: '↔',    //unconfirmed - likely works
  doublearrowright: '⇒',  //unconfirmed - likely works
  doublearrowleft: '⇐',   //unconfirmed - likely broken
  trianglearrow: '➤',     //unconfirmed - likely broken
  // heavyarrow '➜' - broken

  // Math & misc symbols
  plusminus: '±',
  degree: '°',
  infinity: '∞',
  approx: '≈',             //unconfirmed - likely broken (in formal436bt only)
  noteq: '≠',              //unconfirmed - likely works
  lteq: '≤',               //unconfirmed - likely works
  gteq: '≥',               //unconfirmed - likely works
  divides: '÷',            //unconfirmed - likely works
  multiply: '×',

  // Dingbats & icons (text-only, no emoji)
  moon: '☽',               //unconfirmed - likely broken
  portal: 'ʘ',             //unconfirmed - likely broken
  block: '█',              //unconfirmed - likely broken
  crown: '♛',              //unconfirmed - likely broken
  emptycrown: '♕',         //unconfirmed - likely broken
  rook: '♜',               //unconfirmed - likely broken
  knight: '♞',             //unconfirmed - likely broken
  // key '⚷' - broken
  hourglass: '⧗',          //unconfirmed - likely broken
  music: '♫',              //unconfirmed - likely broken
  note: '♪',               //unconfirmed - likely works

  // Bars & blocks
  halfblock: '▌',          //unconfirmed - likely broken
  lightshade: '░',         //unconfirmed - likely broken
  medshade: '▒',           //unconfirmed - likely works
  darkshade: '▓',          //unconfirmed - likely broken
  overline: '‾',           //unconfirmed - likely works
  underline: '_',

  // Brackets & decorative
  langle: '⟨',             //unconfirmed - likely broken
  rangle: '⟩',             //unconfirmed - likely broken
  ldoublangle: '《',       //unconfirmed - likely works
  rdoublangle: '》',       //unconfirmed - likely works
  lozenge: '⬠',            //unconfirmed - likely broken
  // hexagon '⬡' - broken
  // pentagon '⬟' - broken
}

// Gem quality symbols (change these to update all gems at once)
const gemSymbolMapping = {
  chip:     symbols.triangle,        // ▲
  flawed:   symbols.diamond,         // ◆
  normal:   symbols.square,          // ■
  flawless: symbols.emptystar,          // ☆
  perfect:  symbols.star,            // ★
}

const itemNamesMods = [
  // Add more for item-names.json (Key -> enUS string, supports special chars):
  // TIP: For apostrophes ': Use double quotes for key - { key: "Gheed's Fortune", newName: "ÿc7Gheed's Fortune" }
  //     For line breaks in tooltips: "Line1\nLine2"
  // { key: 'itemkey', newName: 'itemstring' },
  { key: 'gpl', newName: 'Gas Pot ÿc21' },
  { key: 'opl', newName: 'Fire Pot ÿc81' },
  { key: 'gpm', newName: 'Gas Pot ÿc22' },
  { key: 'opm', newName: 'Fire Pot ÿc82' },
  { key: 'gps', newName: 'Gas Pot ÿc23' },
  { key: 'ops', newName: 'Fire Pot ÿc83' },
  // We shorten these to be consistent with hp/mp potions
  { key: 'tsc', newName: `=ÿc3${symbols.emptycircle}ÿc0=` },
  { key: 'isc', newName: `=ÿc1${symbols.emptycircle}ÿc0=` },
  { key: 'vps', newName: 'Stamina' },
  { key: 'yps', newName: 'ÿc:Antidote' },
  { key: 'rvs', newName: `ÿc;${symbols.emptyheart}ÿc0` },
  { key: 'rvl', newName: `ÿc;${symbols.heart}ÿc0` },
  { key: 'key', newName: `${colors.grey}${symbols.dagger}${colors.close}` },
  { key: 'aqv', newName: `${colors.grey}${symbols.arrowright}${symbols.arrowright}${colors.close}` },
  { key: 'cqv', newName: `${colors.grey}${symbols.doublearrowright}${symbols.doublearrowright}${colors.close}` },
  // Amethyst (purple)
  { key: 'gcv', newName: `${colors.purple}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfv', newName: `${colors.purple}${gemSymbolMapping.flawed}${colors.close}` },
  { key: 'gsv', newName: `${colors.purple}${gemSymbolMapping.normal}${colors.close}` },
  { key: 'gzv', newName: `${colors.purple}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpv', newName: `${colors.purple}${gemSymbolMapping.perfect}${colors.close}` },
  // Topaz (yellow)
  { key: 'gcy', newName: `${colors.yellow}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfy', newName: `${colors.yellow}${gemSymbolMapping.flawed}${colors.close}` },
  { key: 'gsy', newName: `${colors.yellow}${gemSymbolMapping.normal}${colors.close}` },
  { key: 'gly', newName: `${colors.yellow}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpy', newName: `${colors.yellow}${gemSymbolMapping.perfect}${colors.close}` },
  // Sapphire (lightblue)
  { key: 'gcb', newName: `${colors.lightblue}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfb', newName: `${colors.lightblue}${gemSymbolMapping.flawed}${colors.close}` },
  // gsb normal Sapphire - moved to itemNameaffixesMods
  { key: 'glb', newName: `${colors.lightblue}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpb', newName: `${colors.lightblue}${gemSymbolMapping.perfect}${colors.close}` },
  // Emerald (green)
  { key: 'gcg', newName: `${colors.green}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfg', newName: `${colors.green}${gemSymbolMapping.flawed}${colors.close}` },
  // gsg normal Emerald - moved to itemNameaffixesMods
  { key: 'glg', newName: `${colors.green}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpg', newName: `${colors.green}${gemSymbolMapping.perfect}${colors.close}` },
  // Ruby (red)
  { key: 'gcr', newName: `${colors.red}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfr', newName: `${colors.red}${gemSymbolMapping.flawed}${colors.close}` },
  // gsr normal Ruby - moved to itemNameaffixesMods
  { key: 'glr', newName: `${colors.red}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpr', newName: `${colors.red}${gemSymbolMapping.perfect}${colors.close}` },
  // Diamond (white)
  { key: 'gcw', newName: `${colors.white}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'gfw', newName: `${colors.white}${gemSymbolMapping.flawed}${colors.close}` },
  // gsw normal Diamond - moved to itemNameaffixesMods
  { key: 'glw', newName: `${colors.white}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'gpw', newName: `${colors.white}${gemSymbolMapping.perfect}${colors.close}` },
  { key: 'hp1', newName: 'ÿc11ÿc0HP' },
  { key: 'hp2', newName: 'ÿc12ÿc0HP' },
  { key: 'hp3', newName: 'ÿc13ÿc0HP' },
  { key: 'hp4', newName: 'ÿc14ÿc0HP' },
  { key: 'hp5', newName: `ÿc1${symbols.heart}ÿc0` },
  { key: 'mp1', newName: 'ÿc31ÿc0MP' },
  { key: 'mp2', newName: 'ÿc32ÿc0MP' },
  { key: 'mp3', newName: 'ÿc33ÿc0MP' },
  { key: 'mp4', newName: 'ÿc34ÿc0MP' },
  { key: 'mp5', newName: `ÿc3${symbols.heart}ÿc0` },
  // Skull (grey)
  { key: 'skc', newName: `${colors.grey}${gemSymbolMapping.chip}${colors.close}` },
  { key: 'skf', newName: `${colors.grey}${gemSymbolMapping.flawed}${colors.close}` },
  { key: 'sku', newName: `${colors.grey}${gemSymbolMapping.normal}${colors.close}` },
  { key: 'skl', newName: `${colors.grey}${gemSymbolMapping.flawless}${colors.close}` },
  { key: 'skz', newName: `${colors.grey}${gemSymbolMapping.perfect}${colors.close}` },
  // desirable bases for runewords begins
  { key: '7ar', newName: '=Suwayyah=' },
  { key: '7wb', newName: '=Wrist Sword=' },
  { key: '7xf', newName: '=War Fist=' },
  { key: '7cs', newName: '=Battle Cestus=' },
  { key: '7lw', newName: '=Feral Claws=' },
  { key: '7tw', newName: '=Runic Talons=' },
  { key: '7qr', newName: '=Scissors Suwayyah=' },
  { key: '7ha', newName: '=Tomahawk=' },
  { key: '7ax', newName: '=Small Crescent=' },
  { key: '72a', newName: '=Ettin Axe=' },
  { key: '7mp', newName: '=War Spike=' },
  { key: '7la', newName: '=Feral Axe=' },
  { key: '7ba', newName: '=Silver-edged Axe=' },
  { key: '7bt', newName: '=Decapitator=' },
  { key: '7ga', newName: '=Champion Axe=' },
  { key: '7gi', newName: '=Glorious Axe=' },
  { key: '7wn', newName: '=Polished Wand=' },
  { key: '7yw', newName: '=Ghost Wand=' },
  { key: '7bw', newName: '=Lich Wand=' },
  { key: '7gw', newName: '=Unearthed Wand=' },
  { key: '7cl', newName: '=Truncheon=' },
  { key: '7sc', newName: '=Mighty Scepter=' },
  { key: '7qs', newName: '=Seraph Rod=' },
  { key: '7ws', newName: '=Caduceus=' },
  { key: '7sp', newName: '=Tyrant Club=' },
  { key: '7ma', newName: '=Reinforced Mace=' },
  { key: '7mt', newName: '=Devil Star=' },
  { key: '7fl', newName: '=Scourge=' },
  { key: '7wh', newName: '=Legendary Mallet=' },
  { key: '7m7', newName: '=Ogre Maul=' },
  { key: '7gm', newName: '=Thunder Maul=' },
  { key: '7ss', newName: '=Falcata=' },
  { key: '7sm', newName: '=Ataghan=' },
  { key: '7sb', newName: '=Elegant Blade=' },
  { key: '7fc', newName: '=Hydra Edge=' },
  { key: '7cr', newName: '=Phase Blade=' },
  { key: '7bs', newName: '=Conquest Sword=' },
  { key: '7ls', newName: '=Cryptic Sword=' },
  { key: '7wd', newName: '=Mythical Sword=' },
  { key: '72h', newName: '=Legend Sword=' },
  { key: '7cm', newName: '=Highland Blade=' },
  { key: '7gs', newName: '=Balrog Blade=' },
  { key: '7b7', newName: '=Champion Sword=' },
  { key: '7fb', newName: '=Colossus Sword=' },
  { key: '7gd', newName: '=Colossus Blade=' },
  { key: '7kr', newName: '=Fanged Knife=' },
  { key: '7bl', newName: '=Legend Spike=' },
  { key: '7sr', newName: '=Hyperion Spear=' },
  { key: '7tr', newName: '=Stygian Pike=' },
  { key: '7br', newName: '=Mancatcher=' },
  { key: '7st', newName: '=Ghost Spear=' },
  { key: '7p7', newName: '=War Pike=' },
  { key: '7o7', newName: '=Ogre Axe=' },
  { key: '7vo', newName: '=Colossus Voulge=' },
  { key: '7s8', newName: '=Thresher=' },
  { key: '7pa', newName: '=Cryptic Axe=' },
  { key: '7h7', newName: '=Great Poleaxe=' },
  { key: '7wc', newName: '=Giant Thresher=' },
  { key: '6ss', newName: '=Walking Stick=' },
  { key: '6ls', newName: '=Stalagmite=' },
  { key: '6cs', newName: '=Elder Staff=' },
  { key: '6bs', newName: '=Shillelagh=' },
  { key: '6ws', newName: '=Archon Staff=' },
  { key: '6sb', newName: '=Spider Bow=' },
  { key: '6hb', newName: '=Blade Bow=' },
  { key: '6lb', newName: '=Shadow Bow=' },
  { key: '6cb', newName: '=Great Bow=' },
  { key: '6s7', newName: '=Diamond Bow=' },
  { key: '6l7', newName: '=Crusader Bow=' },
  { key: '6sw', newName: '=Ward Bow=' },
  { key: '6lw', newName: '=Hydra Bow=' },
  { key: '6lx', newName: '=Pellet Bow=' },
  { key: '6mx', newName: '=Gorgon Crossbow=' },
  { key: '6hx', newName: '=Colossus Crossbow=' },
  { key: '6rx', newName: '=Demon Crossbow=' },
  { key: 'obb', newName: '=Heavenly Stone=' },
  { key: 'obc', newName: '=Eldritch Orb=' },
  { key: 'obd', newName: '=Demon Heart=' },
  { key: 'obe', newName: '=Vortex Orb=' },
  { key: 'obf', newName: '=Dimensional Shard=' },
  { key: 'amb', newName: '=Matriarchal Bow=' },
  { key: 'amc', newName: '=Grand Matron Bow=' },
  { key: 'amd', newName: '=Matriarchal Spear=' },
  { key: 'ame', newName: '=Matriarchal Pike=' },
  { key: 'ci2', newName: '=Tiara=' },
  { key: 'ci3', newName: '=Diadem=' },
  { key: 'uhm', newName: '=Spired Helm=' },
  { key: 'urn', newName: '=Corona=' },
  { key: 'usk', newName: '=Demonhead=' },
  { key: 'uui', newName: '=Dusk Shroud=' },
  { key: 'uea', newName: '=Wyrmhide=' },
  { key: 'ula', newName: '=Scarab Husk=' },
  { key: 'utu', newName: '=Wire Fleece=' },
  { key: 'ung', newName: '=Diamond Mail=' },
  { key: 'ucl', newName: '=Loricated Mail=' },
  { key: 'uhn', newName: '=Boneweave=' },
  { key: 'urs', newName: '=Great Hauberk=' },
  { key: 'upl', newName: '=Balrog Skin=' },
  { key: 'ult', newName: '=Hellforge Plate=' },
  { key: 'uld', newName: '=Kraken Shell=' },
  { key: 'uth', newName: '=Lacquered Plate=' },
  { key: 'uul', newName: '=Shadow Plate=' },
  { key: 'uar', newName: '=Sacred Armor=' },
  { key: 'utp', newName: '=Archon Plate=' },
  { key: 'uuc', newName: '=Heater=' },
  { key: 'uml', newName: '=Luna=' },
  { key: 'urg', newName: '=Hyperion=' },
  { key: 'uit', newName: '=Monarch=' },
  { key: 'uow', newName: '=Aegis=' },
  { key: 'uts', newName: '=Ward=' },
  { key: 'uh9', newName: '=Bone Visage=' },
  { key: 'ush', newName: '=Troll Nest=' },
  { key: 'upk', newName: '=Blade Barrier=' },
  { key: 'dre', newName: '=Sky Spirit=' },
  { key: 'drc', newName: '=Sun Spirit=' },
  { key: 'drd', newName: '=Earth Spirit=' },
  { key: 'drb', newName: '=Blood Spirit=' },
  { key: 'drf', newName: '=Dream Spirit=' },
  { key: 'bab', newName: '=Carnage Helm=' },
  { key: 'bac', newName: '=Fury Visor=' },
  { key: 'bad', newName: '=Destroyer Helm=' },
  { key: 'bae', newName: '=Conqueror Crown=' },
  { key: 'baf', newName: '=Guardian Crown=' },
  { key: 'pab', newName: '=Sacred Targe=' },
  { key: 'pac', newName: '=Sacred Rondache=' },
  { key: 'pae', newName: '=Zakarum Shield=' },
  { key: 'paf', newName: '=Vortex Shield=' },
  { key: 'neb', newName: '=Minion Skull=' },
  { key: 'neg', newName: '=Hellspawn Skull=' },
  { key: 'ned', newName: '=Overseer Skull=' },
  { key: 'nee', newName: '=Succubus Skull=' },
  { key: 'nef', newName: '=Bloodlord Skull=' },
  { key: 'pad', newName: '=Kurast Shield=' },
  { key: 'wab', newName: '=Forgotten Volume=' },
  { key: 'wac', newName: '=Occult Tome=' },
  { key: 'wad', newName: '=Occult Codex=' },
  { key: 'wae', newName: '=Blasphemous Compendium=' },
  { key: 'waf', newName: '=Blasphemous Grimoire=' },
  // desirable bases for runewords ends
  { key: 'jew', newName: '••Jewel••' },
  { key: 'cm1', newName: '••Small Charm••' },
  { key: 'cm3', newName: '••Grand Charm••' },
  // We're restoring the 'unique' color of these charms after they're identified
  { key: "Gheed's Fortune", newName: "ÿc7Gheed's Fortune" },
  { key: 'Annihilus', newName: 'ÿc7Annihilus' }

  // { key: 'itemkey', newName: 'itemstring' },
];

const itemModifiersMods = [
  // Add for item-modifiers.json (Key -> enUS string, supports special chars):
  // { key: 'modifierkey', newName: 'modifierstring' },
  { key: 'ModStr1h', newName: 'ÿcT•%+d to Attack Rating•ÿc3' },
  { key: 'ModStr1j', newName: 'ÿc1•Fire Resist %+d%%•ÿc3' },
  { key: 'ModStr1k', newName: 'ÿcU•Cold Resist %+d%%•ÿc3' },
  { key: 'ModStr1l', newName: 'ÿc9•Lightning Resist %+d%%•ÿc3' },
  { key: 'ModStr1m', newName: 'ÿc8•Magic Resist %+d%%•ÿc3' },
  { key: 'ModStr1n', newName: 'ÿc2•Poison Resist %+d%%•ÿc3' },
  { key: 'ModStr2y', newName: 'ÿcT•%d%% Mana stolen per hit•ÿc3' },
  { key: 'ModStr2z', newName: 'ÿcT•%d%% Life stolen per hit•ÿc3' },
  { key: 'ModStr3a', newName: 'ÿc4•%+d to Amazon Skill Levels•ÿc3' },
  { key: 'ModStr3b', newName: 'ÿc4•%+d to Paladin Skill Levels•ÿc3' },
  { key: 'ModStr3c', newName: 'ÿc4•%+d to Necromancer Skill Levels•ÿc3' },
  { key: 'ModStr3d', newName: 'ÿc4•%+d to Sorceress Skill Levels•ÿc3' },
  { key: 'ModStr3e', newName: 'ÿc4•%+d to Barbarian Skill Levels•ÿc3' },
  { key: 'ModStr3k', newName: 'ÿc4•%+d to All Skills•ÿc3' },
  { key: 'ModStr3m', newName: 'ÿcT•%+d%% Chance of Open Wounds•ÿc3' },
  { key: 'ModStr3y', newName: "ÿc4•Ignore Target's Defense•ÿc3" },
  { key: 'ModStr4a', newName: 'ÿc4•Prevent Monster Heal•ÿc3' },
  { key: 'ModStr4m', newName: 'ÿcT•%+d%% Increased Attack Speed•ÿc3' },
  { key: 'ModStr4p', newName: 'ÿc0•%+d%% Faster Hit Recovery•ÿc3' },
  { key: 'ModStr4s', newName: 'ÿc0•%+d%% Faster Run/Walk•ÿc3' },
  { key: 'ModStr4v', newName: 'ÿc0•%+d%% Faster Cast Rate•ÿc3' },
  { key: 'ModStr5b', newName: 'ÿcT•Damage %+d•ÿc3' },
  { key: 'ModStr5c', newName: 'ÿcT•%+d%% Chance of Crushing Blow•ÿc3' },
  { key: 'ModStr5f', newName: 'ÿc0•%+d to Mana after each Kill•ÿc3' },
  { key: 'ModStr5q', newName: 'ÿcT•%+d%% Deadly Strike•ÿc3' },
  { key: 'ModStr5z', newName: 'ÿc4•Cannot Be Frozen•ÿc3' },
  { key: 'strModEnhancedDamage', newName: 'ÿcT•%+d%% Enhanced Damage•ÿc3' },
  { key: 'strModAllResistances', newName: 'ÿc4•All Resistances %+d•ÿc3' },
  { key: 'strModAllSkillLevels', newName: 'ÿc4•%+d to All Skill Levels•ÿc3' },
  { key: 'Moditem2allattrib', newName: 'ÿc0•%+d to all Attributes•ÿc3' },
  { key: 'ModitemHPaK', newName: 'ÿc0•%+d Life after each Kill•ÿc3' },
  { key: 'ModitemSMRIP', newName: 'ÿc4•Slain Monsters Rest in Peace•ÿc3' },
  { key: 'Moditemenrescoldsk', newName: 'ÿcU•-%d%% to Enemy Cold Resistance•ÿc3' },
  { key: 'Moditemenresfiresk', newName: 'ÿc1•-%d%% to Enemy Fire Resistance•ÿc3' },
  { key: 'Moditemenresltngsk', newName: 'ÿc9•-%d%% to Enemy Lightning Resistance•ÿc3' },
  { key: 'Moditemenrespoissk', newName: 'ÿc2•-%d%% to Enemy Poison Resistance•ÿc3' },
  { key: 'ModStr1x', newName: 'ÿc4•%d%% Better Chance of Getting Magic Items•ÿc3' },
  { key: 'ModStr4c', newName: 'ÿcT•%d%% Bonus to Attack Rating•ÿc3' },
  { key: 'ModStre8b', newName: 'ÿc4•%+d to Assassin Skill Levels•ÿc3' },
  { key: 'ModStre8a', newName: 'ÿc4•%+d to Druid Skill Levels•ÿc3' },
  { key: 'ModStre9v', newName: 'ÿc4•Replenishes quantity•ÿc3' },
  // was previously "+%d to Warlock Skills" changed to the below to be consistent
  { key: 'ModStrge9', newName: 'ÿc4•+%d to Warlock Skill Levels•ÿc3' }

  // { key: 'modifierkey', newName: 'modifierstring' },
];

const itemNameaffixesMods = [
  // Add for item-nameaffixes.json (Key -> enUS string, supports special chars):
  // { key: 'affixkey', newName: 'affixstring' },
  // These are nearly redundant with warlock dlc's new item filter
  { key: 'Low Quality', newName: 'ÿc5•ÿc6' },
  { key: 'Damaged', newName: 'ÿc5•ÿc6' },
  { key: 'Cracked', newName: 'ÿc5•ÿc6' },
  { key: 'Crude', newName: 'ÿc5•ÿc6' },
  // Normal quality gems (these live in nameaffixes, not item-names)
  { key: 'gsb', newName: `${colors.lightblue}${gemSymbolMapping.normal}${colors.close}` },  // Sapphire
  { key: 'gsg', newName: `${colors.green}${gemSymbolMapping.normal}${colors.close}` },      // Emerald
  { key: 'gsr', newName: `${colors.red}${gemSymbolMapping.normal}${colors.close}` },        // Ruby
  { key: 'gsw', newName: `${colors.white}${gemSymbolMapping.normal}${colors.close}` },      // Diamond

  // { key: 'affixkey', newName: 'affixstring' },
];

const itemRunesMods = [
  // Add for item-runes.json (Key -> enUS string, supports special chars):
  // Tip: Remember: "\n" for a line break
  // Line breaks don't appear in D2RMM logs, however they are applied within files
  // [gem+count] after (lvl) shows cube upgrade recipe: gem needed + number of runes
  // { key: 'runekey', newName: 'runestring' },
  { key: 'r16', newName: `Io Rune ÿc9(ÿc316ÿc9) [${colors.yellow}${gemSymbolMapping.flawed}ÿc0+ÿc83ÿc9]` },
  { key: 'r13', newName: `Shael Rune ÿc9(ÿc313ÿc9) [${colors.red}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r31', newName: `ÿcUJah Rune ÿc9(ÿc131ÿc9) [${colors.red}${gemSymbolMapping.flawless}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r33', newName: 'ÿcUZod Rune ÿc9(ÿc133ÿc9)\nÿc;•Pick  Up•ÿc0' },
  { key: 'r32', newName: `ÿcUCham Rune ÿc9(ÿc132ÿc9) [${colors.green}${gemSymbolMapping.flawless}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r30', newName: `ÿcUBer Rune ÿc9(ÿc130ÿc9) [${colors.lightblue}${gemSymbolMapping.flawless}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r29', newName: `ÿcUSur Rune ÿc9(ÿc129ÿc9) [${colors.purple}${gemSymbolMapping.flawless}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r28', newName: `ÿcULo Rune ÿc9(ÿc128ÿc9) [${colors.yellow}${gemSymbolMapping.flawless}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r27', newName: `ÿcUOhm Rune ÿc9(ÿc127ÿc9) [${colors.white}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r26', newName: `ÿcUVex Rune ÿc9(ÿc126ÿc9) [${colors.green}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r25', newName: `ÿcUGul Rune ÿc9(ÿc125ÿc9) [${colors.red}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r24', newName: `ÿcUIst Rune ÿc9(ÿc824ÿc9) [${colors.lightblue}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r23', newName: `ÿcUMal Rune ÿc9(ÿc823ÿc9) [${colors.purple}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r22', newName: `ÿcUUm Rune ÿc9(ÿc822ÿc9) [${colors.yellow}${gemSymbolMapping.normal}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r21', newName: `ÿcUPul Rune ÿc9(ÿc821ÿc9) [${colors.white}${gemSymbolMapping.flawed}ÿc0+ÿc82ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r20', newName: `ÿcULem Rune ÿc9(ÿc820ÿc9) [${colors.green}${gemSymbolMapping.flawed}ÿc0+ÿc83ÿc9]\nÿc;•Pick  Up•ÿc0` },
  { key: 'r19', newName: `Fal Rune ÿc9(ÿc819ÿc9) [${colors.red}${gemSymbolMapping.flawed}ÿc0+ÿc83ÿc9]` },
  { key: 'r18', newName: `Ko Rune ÿc9(ÿc818ÿc9) [${colors.lightblue}${gemSymbolMapping.flawed}ÿc0+ÿc83ÿc9]` },
  { key: 'r17', newName: `Lum Rune ÿc9(ÿc817ÿc9) [${colors.purple}${gemSymbolMapping.flawed}ÿc0+ÿc83ÿc9]` },
  { key: 'r15', newName: `Hel Rune ÿc9(ÿc315ÿc9) [${colors.white}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r14', newName: `Dol Rune ÿc9(ÿc314ÿc9) [${colors.green}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r12', newName: `Sol Rune ÿc9(ÿc312ÿc9) [${colors.lightblue}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r11', newName: `Amn Rune ÿc9(ÿc311ÿc9) [${colors.purple}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r10', newName: `Thul Rune ÿc9(ÿc310ÿc9) [${colors.yellow}${gemSymbolMapping.chip}ÿc0+ÿc83ÿc9]` },
  { key: 'r09', newName: 'Ort Rune ÿc9(ÿc39ÿc9)' },
  { key: 'r08', newName: 'Ral Rune ÿc9(ÿc08ÿc9)' },
  { key: 'r07', newName: 'Tal Rune ÿc9(ÿc07ÿc9)' },
  { key: 'r06', newName: 'Ith Rune ÿc9(ÿc06ÿc9)' },
  { key: 'r05', newName: 'Eth Rune ÿc9(ÿc05ÿc9)' },
  { key: 'r04', newName: 'Nef Rune ÿc9(ÿc04ÿc9)' },
  { key: 'r03', newName: 'Tir Rune ÿc9(ÿc03ÿc9)' },
  { key: 'r02', newName: 'Eld Rune ÿc9(ÿc02ÿc9)' },
  { key: 'r01', newName: 'El Rune ÿc9(ÿc01ÿc9)' }

  // { key: 'runekey', newName: 'runestring' },
];

// Function to apply modifications to a file (only if enabled in config)
function applyMods(filePath, mods, configKey) {
  if (!config[configKey]) {
    console.log(`Skipped ${filePath} (disabled in config)`);
    return 0;
  }
  
  const data = D2RMM.readJson(filePath);
  let modifiedCount = 0;
  
  for (const mod of mods) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Key === mod.key) {
        data[i].enUS = mod.newName;
        // console.log(`Modified ${filePath} ${mod.key} to "${mod.newName}"`); -- for debugging
        modifiedCount++;
        break;
      }
    }
  }
  
  if (modifiedCount > 0) {
    D2RMM.writeJson(filePath, data);
    console.log(`Saved ${modifiedCount} changes to ${filePath}`);
  }
  
  return modifiedCount;
}

// Apply modifications based on config toggles
let totalMods = 0;
totalMods += applyMods('local/lng/strings/item-names.json', itemNamesMods, 'itemNames');
totalMods += applyMods('local/lng/strings/item-modifiers.json', itemModifiersMods, 'itemModifiers');
totalMods += applyMods('local/lng/strings/item-nameaffixes.json', itemNameaffixesMods, 'itemNameaffixes');
totalMods += applyMods('local/lng/strings/item-runes.json', itemRunesMods, 'itemRunes');

console.log(`${totalMods} total modifications. Toggle each file in the Glyph Loot Filter settings.`);
