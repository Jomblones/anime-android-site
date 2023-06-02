import React from 'react'

function EpisodeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image} 
						alt="Anime images" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
		</article>
	)
}

export default EpisodeCard
