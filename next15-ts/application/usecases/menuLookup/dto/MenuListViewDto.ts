import { MenuDto } from "./MenuListDto";

export interface MenuListDto {
  menus: MenuDto[];
  // pager를 위한 데이터
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  pages: number[];
}
