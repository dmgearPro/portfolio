import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    
    {
      id: 1,
      name: 'Go Chat room',
      summary: 'This is a simple terminal based chat room built using Go. It support mutliple client connections, separate chat rooms, and server roles!',
      description: 'A chat application built in Go that supports multiple chat rooms, with the ability to create unlimited rooms with access restrictions. Users can assign themselves specific chat server roles, and the system efficiently handles multiple client connections simultaneously.',
      projectLink: 'https://github.com/dmgear/go-tcp-chat-server',
      tags: [],
      pictures: [
        "../../assets/gochat_login.png",
        "../../assets/gochat_list.png",
        "../../assets/gochat_message.png",
        "../../assets/gochat_role.png"
      ]
    },
    {
      id: 2,
      name: 'Death Dotter',
      summary: 'A runelite plugin that hides your character when you are occupy the same location as another character. The purpose of this plugin is for use in PvP situations, where you want to be able to see your opponents character instead of your own.',
      description: 'This plugin works by drawing a transparent circle around all characters in the local client. There is a minimum threshhold (when the distance between two players is less than or equal to the sum of the two raddi surrounding both characters) that when crossed, the plugin will hide your character. ',
      projectLink: 'https://github.com/dmgear/deathdotterplugin',
      tags: [],
      pictures: [
        "../../assets/deathdotter_code.png",
        "../../assets/deathdotter_gif.gif",
        
      ]
    },
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
