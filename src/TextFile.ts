import { BaseServer } from "./Server/BaseServer";
import { Generic_fromJSON, Generic_toJSON, IReviverValue, constructorsForReviver } from "./utils/JSONReviver";
import { TextFilePath } from "./Paths/TextFilePath";
import { ContentFile } from "./Paths/ContentFile";
import { FileMetadata } from "./Paths/FileMetadata";

/** Represents a plain text file that is typically stored on a server. */
export class TextFile implements ContentFile {
  /** The full file name. */
  filename: TextFilePath;

  /** The content of the file. */
  text: string;

  timeOfModification: number;
  timeOfBirth: number;

  // Shared interface on Script and TextFile for accessing content
  get content() {
    return this.text;
  }
  set content(text: string) {
    this.text = text;
  }

  constructor(filename = "default.txt" as TextFilePath, txt = "") {
    this.filename = filename;
    this.text = txt;
    const time = Date.now();
    this.timeOfBirth = time;
    this.timeOfModification = time;
  }

  /** Serialize the current file to a JSON save state. */
  toJSON(): IReviverValue {
    return Generic_toJSON("TextFile", this);
  }

  /** Set the time of modification metadata to the current time.*/
  updateTimeOfModification(): number {
    this.timeOfModification = Date.now();
    return this.timeOfModification;
  }

  /** Retrieve metadata of the file. */
  metadata(): FileMetadata {
    return {
      filename: this.filename,
      timeOfModification: this.timeOfModification,
      timeOfBirth: this.timeOfBirth,
    };
  }

  deleteFromServer(server: BaseServer): boolean {
    if (!server.textFiles.has(this.filename)) return false;
    server.textFiles.delete(this.filename);
    return true;
  }

  /** Initializes a TextFile from a JSON save state. */
  static fromJSON(value: IReviverValue): TextFile {
    return Generic_fromJSON(TextFile, value.data);
  }
}

constructorsForReviver.TextFile = TextFile;
