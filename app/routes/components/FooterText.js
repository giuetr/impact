import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		&copy; { props.year } All Rights Reserved {/* This is the &quot;{ props.name }&quot; built with { props.desc }. 
		Designed and implemented by{' '} */} 
		<a
			href="https://www.dataspark.org"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			dataspark.org
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2021",
    name: "Admin Theme",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
