import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { Menu } from "@/domain/entities/Menu";

export class DfMenuService {
  // private repositpry : SbMenuRepository;
  // constructor() {
  //   this.repository=new SbMenuRepository()
  // }
  // 생성자에 보호모드 써주면 객체초기화가 자동으로 이루어진다
  // 아래 코드와 위 주석 코드는 같은 의미
  constructor(private repository: SbMenuRepository = new SbMenuRepository()) {}

  async getList(): Promise<MenuListModel[]> {
    const menus: Menu[] = await this.repository.findAll();
    return menus.map((menu) => {
      const model: MenuListModel = {
        ...menu,
        img: "default.svg",
      };
      return model;
    });
  }
}
