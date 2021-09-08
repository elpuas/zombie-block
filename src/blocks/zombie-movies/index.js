import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PREFIX } from '../../utils/config';
import Icon from './utils/icon';
import './frontend/style.scss';

/**
 * Register block type definition.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( `${ PREFIX }/zombie-movies`, {
	title: __( 'Zombie Movies', 'wdsblocks' ),
	description: __(
		'A Zombie Movies Fetcher block with a RichText heading and color options.',
		'wdsblocks'
	),
	icon: Icon,
	category: 'wds-blocks',
	keywords: [ __( 'zombie, movies, richtext', 'wdsblocks' ) ],
	attributes: {
		zombieData: {
			type: 'object',
		},
	},
	supports: {
		align: [ 'full', 'wide', 'left', 'center', 'right' ],
		anchor: true,
		html: false,
	},
	example: {
		attributes: {
			backgroundStyle: {
				backgroundColor: '#40403F',
			},
			contentStyle: {
				color: '#F47C48',
				textAlign: 'center',
			},
			title: __( 'Zombie Movies', 'wdsblocks' ),
		},
	},
	edit,
	save,
} );
