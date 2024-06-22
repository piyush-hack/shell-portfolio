import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { SEOService } from './services/seo';
import { AllCommandsView, CommandsHandler } from './utils';
import { CommandView } from './utils/models/command-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements CommandsHandler {
  allCommandsView: AllCommandsView;

  @ViewChild('commandInput') commandInput !: any
  loading: boolean = true;
  commandsView: CommandView[] = []

  command: string = '';
  executedCommands: CommandView[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService,
  ) {
    this.allCommandsView = new AllCommandsView(this);
    this.commandsView = this.allCommandsView.getCommands()
  }

  async ngOnInit() {
    this.loading = true;
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        this.seoService.updateTitle(event['title']);
        this.seoService.updateDescription(event['canonicalURL']);
        this.seoService.updateDescription(event['title'] + event['description'])
      });

    const intitalCommands = this.commandsView.filter(command => command.init);
    for (const command of intitalCommands) {
      this.pushCommand(command);
    }

    this.loading = false;
  }

  executeCommand() {
    const command = this.commandsView.find(commandView => commandView.command.map(command => command.toLowerCase()).includes(this.command.toLowerCase()));
    this.pushCommand(command);
  }




  private pushCommand(command: CommandView | undefined) {
    if (command) {
      this.executedCommands.push({ ...command, command: [this.command || command.command[0]] });
      for (const response of command.response) {
        if (this.checkIfFunction(response)) {
          response();
        }
      }
    } else {
      try {
        const response = eval(this.command);
        this.executedCommands.push(new CommandView([this.command], [
          `<span class="fs-11">* Previous commands context not maintained for evaluation</span>`,
          `> ${response}`,
        ]));
      } catch (error) {
        this.executedCommands.push(new CommandView([this.command], [`<span class="theme-danger">Invalid command</span>`]));
      }
    }
    this.command = '';
    setTimeout(() => {
      const executedCommands = Array.from(document.querySelectorAll(".executed-commands"));
      executedCommands[executedCommands?.length - 1]?.scrollIntoView(true)
    }, 0);
  }

  checkIfFunction(value: any) {
    return typeof value === 'function';
  }

  clear(): void {
    this.executedCommands = [];
  }
}
