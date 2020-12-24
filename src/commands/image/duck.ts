import type { Message, TextChannel } from "eris";
import { Command } from "../../classes/Command";
import axios from "axios";

export class DuckCommand extends Command {
  description = "Sends a random picture of a duck.";
  cooldown = 3000;
  allowdms = true;

  async run(msg: Message<TextChannel>) {
    const body = await axios.get("https://random-d.uk/api/v1/random");

    msg.channel.createMessage({
      embed: {
        title: `🦆 ${msg.string("image.DUCK")}`,
        color: msg.convertHex("general"),
        image: {
          url: body.data.url,
        },
        footer: {
          text: msg.string("global.RAN_BY", {
            author: this.bot.tagUser(msg.author),
            poweredBy: "random-d.uk",
          }),
          icon_url: msg.author.dynamicAvatarURL(),
        },
      },
    });
  }
}
