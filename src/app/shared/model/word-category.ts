import{language} from "./language"
export interface WordCategory {
    name: string;
    identifier: number;
    lastChangeDate: string;
    sourceLanguage: language;
    targetLanguage:language;
    wordPairs: Map<string, string>;
  }
