/**
 * @file Index
 * @description Creates an instance of Hibiki
 * @license AGPL-3.0-or-later
 */

import type { ClientOptions } from "eris";
import { HibikiClient } from "./classes/Client";
import config from "../config.json";

new HibikiClient(config.token, config.eris as ClientOptions);


