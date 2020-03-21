// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '+#:';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }}

// ——————————————————————————————————————————————————
// wet
// ——————————————————————————————————————————————————
var wet = `<div><span>
           .o oOOOOOOOo                                            OOOo
           Ob.OOOOOOOo  OOOo.      oOOo.                      .adOOOOOOO
           OboO"""""""""""".OOo. .oOOOOOo.    OOOo.oOOOOOo.."""""""""'OO
           OOP.oOOOOOOOOOOO "POOOOOOOOOOOo.   "OOOOOOOOOP,OOOOOOOOOOOB'
            O'OOOO'      OOOOo"OOOOOOOOOOO  .adOOOOOOOOO"oOOO'     OOOOo
           .OOOO'             OOOOOOOOOOOOOOOOOOOOOOOOOO'             OO
           OOOOO                 '"OOOOOOOOOOOOOOOO"                 oOO
          oOOOOOba.                .adOOOOOOOOOOba               .adOOOOo.
         oOOOOOOOOOOOOOba.    .adOOOOOOOOOO@^OOOOOOOba.     .adOOOOOOOOOOOO
        OOOOOOOOOOOOOOOOO.OOOOOOOOOOOOOO"   '"OOOOOOOOOOOOO.OOOOOOOOOOOOOO
        "OOOO"       "YOoOOOOOOOOOOOOO"   .   '"OOOOOOOOOOOOoOY"     "OOO"
           Y           'OOOOOOOOOOOOOO: .oOOo. :OOOOOOOOOOO?'         : 
           :            .oO%OOOOOOOOOOo.OOOOOO.oOOOOOOOOOOOO?         .
           .            oOOP"%OOOOOOOOoOOOOOOO?oOOOOO?OOOO"OOo
                        '%o  OOOO"%OOOO%"%OOOOO"OOOOOO"OOO':
                              $"   OOOO' O"Y '  OOOO'  o             .
          .                  .     OP"          : o     .
                      :::       :::::::::::::::::::::::::::      
                      :+:       :+::+:           :+:    :+:      
                      +:+       +:++:+           +:+    +:+         
                      +#+  +:+  +#++#++:++#      +#+    +#+  +:+ 
                      +#+ +#+#+ +#++#+           +#+    +#+ +#+#   
                       #+#+# #+#+# #+#           #+#     #+#+# #  
                         ###   ###  ##########    ###      ###   
    _,,ÖssSSSSSSssss···,_    ^^§§,    . .    ,§§^^    _,···ssssSSSSSSssÖ,,_
,-§^  ,s§$$§^          ^§§s,        2 0 2 0        ,s§§^.         ^§$$§s,  ^§-, 
     ,§ $'                  '         . .         '                  '$ §,
     $$$$                                                             $$$$
     $$$$                     welcome 2 nohri.net!                    $$$$
     $$$$                                                             $$$$
     $$$$sSSSSSSssss···,_    ^^§§,           ,§§^^    _,···ssssSSSSSSs$$$$
     $$$$                                                             $$$$
     $$$$  Num. Disks : xx/03            Release Date : 11/06/2019    $$$$
     $$$$    NFO Time : 23:24:27             NFO Date : 03/20/2020    $$$$
     $$$$                                                             $$$$
     $$$$     Cracker : <a href="https://studionabla.com/">studio nabla</a>                                  $$$$
     $$$$    Supplier : <a href="https://www.notruceway.com/">no truce records</a>                              $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$sSSSSSSssss···,_    ^^§§,  I N F O  ,§§^^    _,···ssssSSSSSSs$$$$
     $$$$                                                             $$$$
     $$$$  Nohri is a Brooklyn based producer and visual artist. No-  $$$$
     $$$$  hri's first full-length release, Realms, was an experime-  $$$$
     $$$$  ntal and diverse instrumental project featuring a handfu-  $$$$
     $$$$  l of close collaborators and friends. His ensuing EP, MT1  $$$$
     $$$$  , was a more house & break-beat inspired record that sho-  $$$$
     $$$$  wcased Nohri’s ability to weave club-heavy percussion wi-  $$$$
     $$$$  th more ethereal and unorthodox melodies. In early 2020,   $$$$
     $$$$  Nohri plans to release a prequel to his most ambitious a-  $$$$
     $$$$  lbum yet, wetWare.                                         $$$$
     $$$$                                                             $$$$
     $$$$sSSSSSSssss···,_    ^^§§,  N A M E  ,§§^^    _,···ssssSSSSSSs$$$$
     $$$$                                                             $$$$
     $$$$                             *                               $$$$
     $$$$                           **                     *          $$$$
     $$$$                           **                    ***         $$$$
     $$$$                           **                     *          $$$$
     $$$$                   ****    **      ***  ****                 $$$$
     $$$$    ***  ****     * ***  * **  ***  **** **** * ***          $$$$
     $$$$     **** **** * *   ****  ** * ***  **   ****   ***         $$$$
     $$$$      **   **** **    **   ***   *** **           **         $$$$
     $$$$      **    **  **    **   **     ** **           **         $$$$
     $$$$      **    **  **    **   **     ** **           **         $$$$
     $$$$      **    **  **    **   **     ** **           **         $$$$
     $$$$      **    **  **    **   **     ** **           **         $$$$
     $$$$      **    **   ******    **     ** ***          **         $$$$
     $$$$      ***   ***   ****     **     **  ***         *** *      $$$$
     $$$$       ***   ***            **    **               ***       $$$$
     $$$$                                  *                          $$$$
     $$$$                                 *                           $$$$
     $$$$                                *                            $$$$
     $$$$                               *                             $$$$
     $$$$                                                             $$$$
     $$$$                          (noh-ree)                          $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     |$§,$'$            ^                             ^            $'$,§$|
     $' |$ $ $$s,^§, :  :::::: ..             .. ::::::  : ,§^ ,$$ $ $|  $
        $$, ' ^§§$$ss,   ::                         ::   ,ss$$§§^'  ,$$  '
        |$! , :.  |$$$|  .                           :  |$$$|  .: , !$|
    _,,ÖssSSSSSSssss···,_    ^^§§,  L I N K  ,§§^^    _,···ssssSSSSSSssÖ,,_
,-§^  ,s§$$§^          ^§§s,     . . . : . . .     ,s§§^          ^§$$§s,  ^§-,
     ,§ $'                  '            '        '                  '$ §,
     $$$$                                                             $$$$
     $$$$            ███▄ ▄███▓█    ██  ██████ ██▓▄████▄              $$$$
     $$$$           ▓██▒▀█▀ ██▒██  ▓██▒██    ▒▓██▒██▀ ▀█              $$$$
     $$$$           ▓██    ▓██▓██  ▒██░ ▓██▄  ▒██▒▓█    ▄             $$$$
     $$$$           ▒██    ▒██▓▓█  ░██░ ▒   ██░██▒▓▓▄ ▄██▒            $$$$
     $$$$           ▒██▒   ░██▒▒█████▓▒██████▒░██▒ ▓███▀ ░            $$$$
     $$$$           ░ ▒░   ░  ░▒▓▒ ▒ ▒▒ ▒▓▒ ▒ ░▓ ░ ░▒ ▒  ░            $$$$
     $$$$           ░  ░      ░░▒░ ░ ░░ ░▒  ░ ░▒ ░ ░  ▒               $$$$
     $$$$           ░      ░   ░░░ ░ ░░  ░  ░  ▒ ░                    $$$$
     $$$$                  ░     ░          ░  ░ ░ ░                  $$$$
     $$$$                                        ░                    $$$$
     $$$$                         BUY MUSIC                           $$$$
     $$$$                                                             $$$$
     $$$$  *bandcamp*                                                 $$$$
     $$$$    URL : <a href="https://nohri.bandcamp.com">https://nohri.bandcamp.com</a>                         $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$                        STREAM MUSIC                         $$$$
     $$$$                                                             $$$$
     $$$$  *apple music*                                              $$$$
     $$$$    URL : <a href="https://apple.co/32ni7UE">https://apple.co/32ni7UE</a>                           $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$  *spotify*                                                  $$$$
     $$$$    URL : <a href="https://spoti.fi/32ni0bG">https://spoti.fi/32ni0bG</a>                           $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$  *soundcloud*                                               $$$$
     $$$$    URL : <a href="https://soundcloud.com/7nohri">https://soundcloud.com/7nohri</a>                      $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
     $$$$                                                             $$$$
      $§,$'$            ^                             ^            $'$,§$
     $' |$ $ $$s,^§, :  :::::: ..             .. ::::::  : ,§^ ,$$ $ $|  $
    _,,ÖssSSSSSSssss···,_    ^^§§,  T A L K  ,§§^^    _,···ssssSSSSSSssÖ,,_
,-§^  ,s§$$§^          ^§§s,     . . . : . . .     ,s§§^          ^§$$§s,  ^§-,
     ,§ $'                  '            '        '                  '$ §,
     $$$$                                                             $$$$
     $$$$  If you want to contact me for any reason, then feel free   $$$$
     $$$$       to do so using the email supplied below.              $$$$
     $$$$                                                             $$$$
     $$$$                     <a href="mailto:nohrihere@gmail.com">nohrihere@gmail.com</a>                     $$$$
      $§,$'$            ^                             ^            $'$,§$
     $' |$ $ $$s,^§, :  :::::: ..             .. ::::::  : ,§^ ,$$ $ $|  $
    _,,ÖssSSSSSSssss···,_    ^^§§,  . . . .  ,§§^^    _,···ssssSSSSSSssÖ,,_
,-§^  ,s§$$§^          ^§§s,     . . . : . . .     ,s§§^          ^§$$§s,  ^§-,
     ,§ $'                  '            '         '                  '$ §,
    ^§$$§s,       😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂         ,s§$$§^
        ^§$$§s,     😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂        ,s§$$§^
             ^§§s,   😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂        ,s§§^
                $$                                            $$
                 :        Last updated: 20. Mar 2020.         :
                 .                                            .</span>
  </div>
`;

function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if ( viewport ) {
    viewport.content = "initial-scale=0.9";
    viewport.content = "width=425";
  }
}

const phrases = [wet];
const el = document.querySelector('.wet');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 24000);
  });
  counter = (counter + 1) % phrases.length;
    zoomOutMobile();
};

next();
