import { CommandView } from "../command-view";

export const help = new CommandView(["Navigate commands", "help"], [
    `   'about / experience'    -> Who am i ?`,
    `   'resume'                -> Get my latest updated resume`,
    `   'contact'               -> Get my contact info`,
    `   'projects'              -> List all projects`,
    `   'skills'                -> Show most of the skills`,
    `   'intro'                 -> Show the start info of terminal`,
    `   'clear'                 -> Clear terminal`,
], true)