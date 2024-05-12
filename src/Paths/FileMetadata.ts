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

  copy(newFileName: string): FileMetadata {
    const now = Date.now();
    return new FileMetadata(newFileName, now, now, now, now);
  }

  copyOnto(otherFileMetadata: FileMetadata): FileMetadata {
    const now = Date.now();
    return new FileMetadata(
      otherFileMetadata.filename,
      otherFileMetadata.timeOfAccess,
      now,
      now,
      otherFileMetadata.timeOfBirth,
    );
  }

  move(newFileName: string): FileMetadata {
    return new FileMetadata(newFileName, this.timeOfAccess, this.timeOfModification, Date.now(), this.timeOfBirth);
  }

  moveOnto(newFileName: string): FileMetadata {
    return new FileMetadata(newFileName, this.timeOfAccess, this.timeOfModification, Date.now(), this.timeOfBirth);
  }
}
