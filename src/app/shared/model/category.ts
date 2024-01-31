import { language } from "./language";
import { TranslatedWord } from "./translatedword";


export class Category { 
    name: string;
    identifier: number;
    lastChangeDate: string;
    sourceLanguage: language=language.Hebrew
    targetLanguage: language=language.English
    wordPairs: Map<string, string>;
    lastUpdateDate = new Date();
    words : TranslatedWord[] = [];
    constructor(
      name: string,
      identifier: number,
      sourceLanguage : language,
      targetLanguage : language,
      lastChangeDate: string

    ) {
      this.name = name;
      this.identifier = identifier;
      this.sourceLanguage= sourceLanguage;
      this.targetLanguage= targetLanguage;
      this.lastChangeDate = lastChangeDate;
      this.wordPairs = new Map<string, string>();
    }
  
    addPairs(wordPairs: Map<string, string>): void {
      for (let [sourceWord, targetWord] of wordPairs.entries()) {
        this.wordPairs.set(sourceWord, targetWord);
      }
    }
  }