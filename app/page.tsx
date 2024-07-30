import { css } from "styled-system/css/css";
import { VStack } from "styled-system/jsx";

export default function Home() {
  return (
    <main>
      <VStack gap="12px">
        <h2 className={css({ fontSize: "3rem" })}> frontend test</h2>
      </VStack>
    </main>
  );
}
