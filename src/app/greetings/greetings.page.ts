import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.page.html',
  styleUrls: ['./greetings.page.scss'],
})
export class GreetingsPage implements OnInit {

  public gtext:string;
  constructor(private tts: TextToSpeech) { }

  test(){
    this.tts.speak('This is a test');
  }

  speakthis(sentence:string){
    this.tts.speak(sentence);
  }
  
  speak(){
    this.tts.speak(this.gtext);
  }

  ngOnInit() {
  }

}
