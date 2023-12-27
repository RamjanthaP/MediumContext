export interface Person {
  name: string;
  email?: string;
  phone?: string;
  title?: string;
  image: ImageProps;
}

export interface ButtonHelper {
  minDesktopScreen: number;
  windowSize: number;
  setBtnSize: ButtonSizes;
}
