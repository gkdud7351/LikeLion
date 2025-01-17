import { DfMenuListUsecase } from "@/application/usecases/menuLookup/DfMenuListUsecase";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { NextResponse } from "next/server";

// 어댑터
export async function GET() {
  // 업무로직을 호출해서 그 결과를 UI 에게 반환
  const SbMenuRepository: MenuRepository = new SbMenuRepository();
  const menuListUsecase: MenuListUsecase = new DfMenuListUsecase();
  // execute는 유스케이스를 호출하는 진입점 역할, 외부에서 유스케이스를 실행할 때 사용용
  const menuListDto: MenuListDto[] = await menuListUsecase.execute();
  return NextResponse.json(menuListDto);
}
