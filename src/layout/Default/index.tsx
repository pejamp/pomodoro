import { Container } from "./DefaultStyles";
import { ReactNode } from 'react';

type DefaultProps = {
  children: ReactNode; 
};

export function Default({ children }: DefaultProps) {
  return (
    <Container>{children}</Container>
  )
}
