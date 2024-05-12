export class FileMetadata {
  constructor(
    readonly filename: string,
    readonly timeOfAccess: number,
    readonly timeOfModification: number,
    readonly timeOfChange: number,
    readonly timeOfBirth: number,
  ) {}

  static new(filename: string): FileMetadata {
    const now = Date.now();
    return new FileMetadata(filename, now, now, now, now);
  }

  read(): FileMetadata {
    return new FileMetadata(this.filename, Date.now(), this.timeOfModification, this.timeOfChange, this.timeOfBirth);
  }

  edit(): FileMetadata {
    const now = Date.now();
    return new FileMetadata(this.filename, this.timeOfAccess, now, now, this.timeOfBirth);
  }
}
