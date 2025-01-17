export interface MenuDto {
  id: number;
  korName: string;
  engName: string;
  price: number;
  regDate: Date;
  categoryId: number;
  regMemberId: number;

  // 대표 이미지 하나만 필요
  img: string;
  // likeCount: number;

  // 자식으로 관계를 가지고 있는 객체 집합
  // 1:n 이라서 배열
  // images: MenuImage[];
}
