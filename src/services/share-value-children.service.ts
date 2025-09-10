export class ShareValueChildren {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: string) {
    if ( value.length < 1) {
      throw new Error('Invalid value type');
    }
    this.value = value;
  }
}

export const shareValueChildren = new ShareValueChildren('');