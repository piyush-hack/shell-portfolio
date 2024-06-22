import { CommandView } from "../command-view";

export const repo = new CommandView(["Repo"], [
    () => window.open("https://github.com/piyush-hack/shell-portfolio")
])