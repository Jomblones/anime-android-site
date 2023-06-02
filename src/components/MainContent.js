import React from 'react'
import AnimeCard from './AnimeCard';
import EpisodeCard from './EpisodeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.id} />
				))}
			</div>
		</main>
	)
}

export default MainContent
