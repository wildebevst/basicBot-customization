(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "lushbot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 120,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 2,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["hist", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["ua", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 90,
        motd: "Check us out: http://lushselects.tumblr.com | https://www.facebook.com/lushselects | https://www.youtube.com/user/lushselects | https://twitter.com/LushSelects |",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "Don't Be A Mark",
        themeLink: "http://lushselects.tumblr.com/genres",
        fbLink: "https://www.facebook.com/lushselects",
        youtubeLink: "http://goo.gl/jXXTbW",
        website: "Check us out: http://lushselects.tumblr.com | https://www.facebook.com/lushselects | https://www.youtube.com/user/lushselects | https://twitter.com/LushSelects |",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));
    
    cookieCommand: {
                command: 'drink',
                rank: 'user',
                type: 'startsWith',
                cookies: ['has given you a Strawberry Daiquiri',
                    'has given you a Bloody Mary',
                    'has given you an Irish Coffee',
                    'has given you a Whiskey Sour',
                    'has given you a Gin Rickey',
                    'has given you a Cherry Hooker',
                    'has given you an Alabama Slammer',
                    'has given you a Sidecar',
                    'has given you an Apple Martini',
                    'has given you a Cosmopolitan',
                    'has given you a Boulevardier',
                    'has given you a Tequila Sunrise',
                    'has given you a Vodka Red Bull',
                    'has given you a Rum & Coke',
                    'has given you a Brave Bull',
                    'has given you a Black Russian',
                    'has given you a Horny Bull',
                    'has given you a Colorado Bulldog',
                    'has given you a White Russian',
                    'has given you a Washington Apple',
                    'has given you a Vodka Martini-',
                    'has given you a Vodka Tonic',
                    'has given you a Bacardi Cocktail',
                    'has given you a Sex on the Beach',
                    'has given you a Lynchburg Lemonade',
                    'has given you a Pink Squirrel',
                    'has given you a Vodka Tonic',
                    'has given you a Buttery Nipple',
                    'has given you a Jell-O Shot',
                    'has given you a Jäger Bomb',
                    'has given you a Blow Job',
                    'has given you a Piña Colada',
                    'has given you a Blue Hawaiian',
                    'has given you a Flaming Dr. Pepper',
                    'has given you a Liquid Cocaine',
                    'has given you a Redheaded Slut',
                    'has given you a Tequila Shot ',
                    'has given you a Hot Buttered Rum',
                    'has given you a Three Wise Men',
                    'has given you a Tomahawk',
                    'has given you a Wine Spritzer',
            
                ],
                getCookie: function () {
                    var c = Math.floor(Math.random() * this.drinks.length);
                    return this.drinks[c];
                },
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        var msg = chat.message;

                        var space = msg.indexOf(' ');
                        if (space === -1) {
                            API.sendChat(basicBot.chat.eatdrink);
                            return false;
                        }
                        else {
                            var name = msg.substring(space + 2);
                            var user = basicBot.userUtilities.lookupUserName(name);
                            if (user === false || !user.inRoom) {
                                return API.sendChat(subChat(basicBot.chat.nouserdrink, {name: name}));
                            }
                            else if (user.username === chat.un) {
                                return API.sendChat(subChat(basicBot.chat.selfdrink, {name: name}));
                            }
                            else {
                                return API.sendChat(subChat(basicBot.chat.drink, {nameto: user.username, namefrom: chat.un, cookie: this.getCookie()}));
                            }
                        }
                    }
                }
            },


    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
