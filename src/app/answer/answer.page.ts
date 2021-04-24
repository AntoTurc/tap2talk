import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {

  
  public gtext:string;
  constructor(private tts: TextToSpeech) { }

  speakthis(sentence:string){
    this.tts.speak(sentence);
  }
  
  speak(){
    this.tts.speak(this.gtext);
  }

  ngOnInit() {
  }

}
