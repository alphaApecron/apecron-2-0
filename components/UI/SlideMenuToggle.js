import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SlideMenuToggle = (props) => {
	return (
		<>
			<div className='slide-menu-toggle'>
				<Link
					to='#'
					className='menu-icon'
					color='#fff'
					onClick={props.handleClick}
				>
					<MenuIcon />
				</Link>
			</div>
		</>
	);
};

export default SlideMenuToggle;
