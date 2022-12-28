export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }
  static error(msg: string) {
    console.error(`%c ${msg}`, "color: red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: black; background: yellow");
  }

  static debug(msg: string) {
    console.log(`${msg}`);
  }
}
