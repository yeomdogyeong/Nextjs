import React from "react";
import Link from "next/link";

interface Props {}

const HeaderComponent = ({}) => {
  return (
    <header>
      <div>
        <Link href="/">인프런로고</Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
