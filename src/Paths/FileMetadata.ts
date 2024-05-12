export class FileMetadata {
  constructor(
    readonly filename: string,
    readonly timeOfAccess: number,
    readonly timeOfModification: number,
    readonly timeOfBirth: number,
  ) {}

  static new(filename: string): FileMetadata {
    const now = Date.now();
    return new FileMetadata(filename, now, now, now);
  }

  read(): FileMetadata {
    return new FileMetadata(this.filename, Date.now(), this.timeOfModification, this.timeOfBirth);
  }

  edit(): FileMetadata {
    return new FileMetadata(this.filename, this.timeOfAccess, Date.now(), this.timeOfBirth);
  }
}
