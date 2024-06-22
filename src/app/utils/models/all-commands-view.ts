import { CommandView } from "./command-view";
import { CommandsHandler } from "./commands-handler.interface";
import { aboutme } from "./commands/aboutme";
import { contactme } from "./commands/contact";
import { help } from "./commands/help";
import { intro } from "./commands/intro";
import { projects } from "./commands/projects";
import { resume } from "./commands/resume";
import { skills } from "./commands/skills";

export class AllCommandsView {

    private commands = [
        new CommandView(["clear"], [() => this.commandsHandler.clear()]),
    ];

    constructor(private commandsHandler: CommandsHandler) {
        this.commands.push(intro)
        this.commands.push(help)
        this.commands.push(aboutme)
        this.commands.push(skills)
        this.commands.push(projects)
        this.commands.push(contactme)
        this.commands.push(resume)
    }

    getCommands() {
        return this.commands;
    }
}