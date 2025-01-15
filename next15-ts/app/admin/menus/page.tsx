"use client";

import { useEffect, useState } from "react";

const List = () => {
  // 데이터를 가져오는 부분은 서비스를 호출하지않고
  // 어댑터를 사용
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    //서비스호출:어댑터
    const fetcData = async () => {
      const res = await fetch("/api/menus");
      const data = await res.json();
      setMenus(data);
    };
    fetcData();
  }, []);

  return (
    <div>
      <h2>Admin Menu List Page</h2>
      <pre>{JSON.stringify(menus, null, 2)}</pre>
    </div>
  );
};
export default List;
