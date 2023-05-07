import { About } from '../../sections';
import { withBgTitleFooterMenu } from '../../HOC/withBgTitleFooterMenu';

export const AboutLayout = withBgTitleFooterMenu(About, 'Who we are', true);
