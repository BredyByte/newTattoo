import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';
import { ImgLinkCardList } from '../../components';

export const ServicesLayout = withBgTitleFooterMenu(
  ImgLinkCardList,
  'Our Services'
);
