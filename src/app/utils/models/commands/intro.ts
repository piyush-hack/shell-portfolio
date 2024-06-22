import { CommandView } from "../command-view";

export const intro = new CommandView(["Intro", "intro"], [
    `
    ███████╗██╗&nbsp;&nbsp;██╗███████╗██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╗
    ██╔════╝██║&nbsp;&nbsp;██║██╔════╝██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
    ███████╗███████║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
    ╚════██║██╔══██║██╔══╝&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
    ███████║██║&nbsp;&nbsp;██║███████╗███████╗███████╗
    ╚══════╝╚═╝&nbsp;&nbsp;╚═╝╚══════╝╚══════╝╚══════╝

    Welcome to <b class="theme-s-color" >Piyush puniya portfolio</b> v1.0.0
    Type <span class="command">'help'</span> for a list of all available commands.
    Type <span class="command">'repo'</span> to view the GitHub repository or click <a target="_blank" href="https://github.com/piyush-hack/shell-portfolio" target="_blank">here</a>.
    <br>`

], true)