import { useWindowWidth } from 'hooks/useWindowWidth';
import {
  FataMorganaDesktop,
  FataMorganaMobile
} from 'components';

export function FataMorgana() {
  const isDesktop = useWindowWidth(1024);

  return isDesktop ? <FataMorganaDesktop /> : <FataMorganaMobile />;
}
