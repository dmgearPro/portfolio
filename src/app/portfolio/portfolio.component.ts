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
      id: 0,
      name: "Game Boy Emulator",
      summary: "An emulator for the Game Boy, capable of running classic games. Developed using C, with a focus on accuracy of the original system.",
      description: "This is my ongoing project that I am currently developing. The Game Boy Emulator is a project designed to emulate the hardware of the original Game Boy. It features a CPU emulator for the Sharp SM83 processor, accurate rendering of graphics, and faithful reproduction of audio using an SDL2-based sound engine. The project prioritizes accuracy while maintaining efficient performance, making it a reliable platform for retro gaming enthusiasts.",
      projectLink: "https://github.com/dmgear/dmgearboy",
      tags: [],
      pictures: [
        "../../assets/gameboy_cpu.png",
        "../../assets/gb_register_def.png",
        "../../assets/gb_memory_map.png",
        ]    
    },
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
