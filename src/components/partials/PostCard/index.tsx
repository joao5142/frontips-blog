import ChevronRight from "@/components/icons/ChevronRight/index";
import Button from "@/components/ui/Button/index";
import Link from "next/link";
import { useState } from "react";

type PropsType = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  action?: Function;
  postId: number;
};

export default function PostCard(props: PropsType) {
  const [isButtonActive, setIsButtonActive] = useState<boolean>();
  return (
    <>
      <h4 className="mb-3">How to deal with subjective feedback from client</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod possimus voluptatibus nesciunt ea dolor
        accusantium consectetur sint repudiandae deleniti, dolores repellendus itaque facilis sapiente ipsam labore
        saepe quae reprehenderit! Esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod possimus
        voluptatibus nesciunt ea dolor accusantium consectetur sint!
      </p>
      <Link href={"/posts/" + props.postId}>
        <Button mouseMove={(e: boolean) => setIsButtonActive(e)} className="mt-4">
          <span className="me-2">Read more</span> <ChevronRight color={isButtonActive ? "#fff" : ""} />
        </Button>
      </Link>
    </>
  );
}
