import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

export default function Seo() {
  return <div>Seo</div>;
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
