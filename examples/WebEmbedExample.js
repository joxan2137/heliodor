const WebEmbed = require("../WebEmbed");
const Util = require("../Util");

module.exports = {
    name: "webembed",
    aliases: [ "embedexample", "webex" ],
    description: "WebEmbed example",
    func: (msg, args) => {
        Util.sendWebEmbed(msg.channel, new WebEmbed({shorten: true, hidden: true})
            .setTitle({ name: 'WebEmbed'})
            .setColor('GREEN')
            .setDescription("Example"));
    }
};