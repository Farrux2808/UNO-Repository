import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Language } from './../../models/language-model'; 
import 'rxjs/add/operator/map';


@Injectable()
export class LanguageProvider {

  supportedLanguages : Array<Language> =[];
  constructor(public http: Http) {
    
    this.supportedLanguages.push(
      {name : "Русскый", code : "ru"},
      {name : "O'zbek", code : "uz"}
    );
  }

  getSupportedLanguages(){
    return this.supportedLanguages;
  }


}
