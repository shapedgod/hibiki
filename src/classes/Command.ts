/**
 * @file Command
 * @description Base class for commands
 */

import type { Message } from "eris";
import type { HibikiClient } from "./Client";

// Main command class
export abstract class Command {
  aliases: string[] = [];
  args?: string;
  cooldown?: number;
  requiredkeys?: string[] = [];
  clientperms?: string[] = [];
  requiredperms?: string[] = [];
  allowdms = false;
  allowdisable = true;
  nsfw = false;
  owner = false;
  staff = false;
  voice = false;

  abstract description: string;
  
  constructor(protected bot: HibikiClient, public name: string, public category: string) {}
  /**
   * @param {Message} msg The message that invokes the commands.
   * @param {Array} args The arguments.
   */
  abstract run(msg: Message, pargs?: ParsedArgs[], args?: string[], ...extra: any): Promise<unknown>;
}
