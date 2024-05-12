export class FileMetadata {
  constructor(readonly timeOfAccess: number, readonly timeOfModification: number, readonly timeOfBirth: number) {}

  static new(): FileMetadata {
    const now = Date.now();
    return new FileMetadata(now, now, now);
  }

  read(): FileMetadata {
    return new FileMetadata(Date.now(), this.timeOfModification, this.timeOfBirth);
  }

  edit(): FileMetadata {
    return new FileMetadata(this.timeOfAccess, Date.now(), this.timeOfBirth);
  }
}
