import { NextResponse } from "next/server";
// 유즈케이스를 이어주는 어댑터
export async function GET() {
  // 업로로직을 호출해서 그 결과를 UI 에게 반환환
  return NextResponse.json({ id: 1, name: "menu 1" });
}
