import { P5brush } from "@/components/P5brush";
import { Button } from "@/components/ui/button";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Script from "next/script";

export default function Home() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      Hello 🐼!
      <Flex gap="3">
        <Button variant="solid">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
      </Flex>
      <br />
      <P5brush />
    </div>
  );
}
