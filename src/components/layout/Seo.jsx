import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

export default function SEO() {
  return <div>Seo</div>;
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
