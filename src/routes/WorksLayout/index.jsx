import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';
import { WorksPageList } from '../../sections';

export const WorksLayout = withBgTitleFooterMenu(
  WorksPageList,
  'Our Best Works'
);
