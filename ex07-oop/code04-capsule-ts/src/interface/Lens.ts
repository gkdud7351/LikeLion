import ILens from "./ILens.js";

export default class Lens implements ILens {
  zoomIn(level: number): void {
    // 매개변수 level에 number타입만 들어올 수 있고 zoomin은 반환하는 타입이 없음
    console.log("zoom in");
  }
  zoomOut(level: number): void {
    console.log("zoom out");
  }
}
