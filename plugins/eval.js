const {
    Axl
} = require("../index.js");
const X = require("../config.js");
const util = require("util");
const axios = require("axios");

Axl(
    {
        on: "text",
        fromMe: true,
    },
    async ({
        client, msg, text
    }) => {
        if (text.startsWith(">")) {
            try {
                let evaled = await eval(`(async () => { ${text.replace(">", "")} })()`);
                if (typeof evaled !== "string") evaled = util.inspect(evaled);
                await msg.reply(`${'```'}${evaled}${'```'}`)
            } catch (err) {
                await msg.reply(`_${util.format(err)}_`);
            }
        }
    });
