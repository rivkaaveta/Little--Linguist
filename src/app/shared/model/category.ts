import { language } from "./language";
import { WordCategory } from "./word-category";

export class Category implements WordCategory {
    name: string;
    identifier: number;
    lastChangeDate: string;
    sourceLanguage: language=language.Hebrew
    targetLanguage: language=language.English
    wordPairs: Map<string, string>;
  
    constructor(
      name: string,
      identifier: number,
      lastChangeDate: string
    ) {
      this.name = name;
      this.identifier = identifier;
      this.lastChangeDate = lastChangeDate;
      this.wordPairs = new Map<string, string>();
    }
  
    addPairs(wordPairs: Map<string, string>): void {
      for (let [sourceWord, targetWord] of wordPairs.entries()) {
        this.wordPairs.set(sourceWord, targetWord);
      }
    }
  }