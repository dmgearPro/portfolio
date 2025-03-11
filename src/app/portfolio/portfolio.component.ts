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
      description: '.',
      projectLink: 'https://github.com/dmgear/go-tcp-chat-server',
      tags: [],
      pictures: [
        "../../assets/gochat_login.png",
        "../../assets/gochat_list.png",
        "../../assets/gochat_message.png",
        "../../assets/gochat_role.png"
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
