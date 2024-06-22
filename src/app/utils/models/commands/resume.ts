import { CommandView } from "../command-view";

const resumeLink = "https://github.com/piyush-hack/piyush-hack.github.io/raw/main/piyush%20puniya%20software%20engineer.pdf";
export const resume = new CommandView(["resume"], [
    () => window.open(resumeLink),
    `If download didn't start click <a target="_blank" href="${resumeLink}">here</a>`
])