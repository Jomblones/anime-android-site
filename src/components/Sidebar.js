import React from 'react'

function Sidebar({ topAnime }) {
	return (
		<div className='sidebar'>
			<nav>
				<center> <h1>Top Anime List</h1></center>
				<div className='media-scroller'>
				{topAnime.map(anime => (
					<div className='element'>
						<a 
						href={anime.url} 
						target="_blank"
						key={anime.id} 
						rel="noreferrer">
							{ anime.title }
						</a>
					</div>
				))}
				</div>
			</nav>
		</div>
	)
}

export default Sidebar
