import { getCollection } from "astro:content";
import { siteConfig } from "@/site.config";
import rss from "@astrojs/rss";

export const GET = async () => {
	const projects = await getCollection("project");

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: projects.map((project) => ({
			title: project.data.title,
			pubDate: project.data.publishDate,
			link: `projects/${project.id}/`,
		})),
	});
};
