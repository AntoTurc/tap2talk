import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

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
