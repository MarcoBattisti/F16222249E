export class GenericClicky <T> {

  type: string;
  dates: [{
    date: string;
    items: T[];
  }];
}
