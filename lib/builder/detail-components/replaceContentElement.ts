export default function replaceContentElement($: cheerio.Root, componentElement: cheerio.Cheerio) {
	const contentElement = $('content').first();

	if (contentElement.length > 0) {
		contentElement.replaceWith(componentElement.html()!);
	}
}
