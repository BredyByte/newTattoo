import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';
import { ImgLinkCardList } from '../../components';

export const OurTeamListLayout = withBgTitleFooterMenu(
  ImgLinkCardList,
  'Our Cracks',
  true
);
