import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/Angular";
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
})
export class CustomPage implements OnInit {

  constructor(private alertCtrl:AlertController, private tts: TextToSpeech) { }

  sentences: Array<string> = ["","","","","","","",""];

  x = 1;

  ngOnInit() {

  }
  
  speak(value){
    this.tts.speak(this.sentences[value]);
    
      
  }


  CreatePrompt()
  {
    
    this.alertCtrl.create({
      header:"Please enter your personalized sentence and a name to describe it.",
      inputs:[{
        placeholder:"Could I have a cup of coffee please",
        name:"text"
      },{
        placeholder:"Coffee",
        name: "title"
      }
    ],
      
      buttons:[
        {
          text:"OK",
          handler:(data)=>{
            this.sentences[this.x] = data.text;
            console.log("yay");
            let s:string = this.x.toString();
            (<HTMLElement>document.querySelector('#\\3'+s)).style.display = 'inline';
            (<HTMLElement>document.querySelector('#\\3'+s)).innerHTML = data.title;
            this.x++;
            
          }
        },
        {
          text:"Cancel"
         
        }
      ]

    }).then((promptElement)=>{promptElement.present();})
  }

}
