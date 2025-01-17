import { MenuRepository } from "@/domain/repositories/MenuRepository";

export class DfMenuListUsecase {
  constructor(private repository: MenuRepository) {}

  async execute() {
    await this.repository.findAll();

    return {}; // MenuListDto로 변환해서 반환
  }
}
