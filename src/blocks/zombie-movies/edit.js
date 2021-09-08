import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @author WebDevStudios
 * @since  2.0.0
 * @see    https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param  {Object} [props] Properties passed from the editor.
 * @return {WPElement}      Element to render.
 */
function Edit( props ) {
	const {
		attributes: {
			zombieData,
		},
		className,
		setAttributes,
	} = props;

	fetch( 'https://api.themoviedb.org/3/search/movie?api_key=3e8a7e24db22c5675f4f88acf1537fb5&language=en-US&page=1&include_adult=false&query=zombies&sort_by=vote_average.desc' )
		.then( ( response ) => {
			return response.json();
		} )
		.then( ( data ) => {
			setAttributes( { zombieData: data } );
		} );

	return (
		<>
			<div className={ `${ className } zombie-movies` }>
				{ undefined !== zombieData?.results && Array.isArray( zombieData?.results ) && zombieData?.results?.map( ( movies ) => {
					return (
						<div key={ movies.id }>
							<h2>{ movies.title }</h2>
							<p>{ movies.overview }</p>
						</div>
					);
				} ) }
			</div>
		</>
	);
}

export default Edit;
