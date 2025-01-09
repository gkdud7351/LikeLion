// 카메라와 렌즈 접점의 약속
export default interface ILens {
  zoomIn(level: number): void; // 반환하는게 없다
  zoomOut(level: number): void;
}
