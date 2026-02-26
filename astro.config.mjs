import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDigitalGarden from 'starlight-digital-garden';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	site: 'https://moxiaoxia.github.io', // Placeholder for sitemap/graph generation
	integrations: [
		starlight({
			title: '扶桑乘槎录',
			description: '一种社会替代教育的旅行人类学实验',
			plugins: [starlightThemeObsidian()],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/stereobooster/astro-digital-garden' }
			],
			sidebar: [
				{
					label: '🎡 壮游启程',
					items: [
						{ label: '科考宣言', slug: 'experiment/01-protocol-compass/202602251220-grand-tour-manifesto' },
						{ label: '研究方法论', slug: 'experiment/01-protocol-compass/202602251225-modernology-methodology' },
					],
				},
				{
					label: '🏮 专题研究 (Thematic)',
					items: [
						{ label: '日本地理与分区', slug: 'experiment/03-thematic-research/japan-geography-culture/202602251330-japan-8-regions-overview' },
						{ label: '摄影生态与视觉', slug: 'experiment/03-thematic-research/01-photography-visual-culture/photography-ecology' },
						{ label: '农业CSA与社企', slug: 'experiment/03-thematic-research/02-agriculture-csa-social-biz/agriculture-csa-social-enterprise' },
						{ label: '极小住宅与士绅化', slug: 'experiment/03-thematic-research/03-urban-architecture-gentrification/urban-architecture' },
						{ label: '文学地形与书店', slug: 'experiment/03-thematic-research/04-literature-bookstores-topography/literary-topography' },
					],
				},
				{
					label: '🖋️ 夜抄读 (Reading Notes)',
					autogenerate: { directory: 'experiment/夜抄读' },
				},
				{
					label: '✍️ 田野日志 (Raw Notes)',
					autogenerate: { directory: 'experiment/02-field-notes-raw' },
				},
				{
					label: '🛠️ 数字人类学实验室',
					autogenerate: { directory: 'experiment/06-digital-ethnography-lab' },
				},
				{
					label: '📚 资源与模板',
					autogenerate: { directory: 'guides' },
				},
			],
			lastUpdated: true,
		}),
		starlightDigitalGarden(),
	],
});
