import { FC } from 'react'

export const EmbeddedVideo: FC<{ url: string; title: string }> = ({ url, title }) => {
	return (
		<div className="flex justify-center">
			<iframe
				title={title}
				src={url}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="w-[100%] aspect-video bg-zinc-800"
				style={{ border: '0-moz-border-radius: 1rem', borderRadius: '1rem' }}
			/>
		</div>
	)
}
