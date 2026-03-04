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
					autogenerate: { directory: 'experiment/03-thematic-research' },
				},
				{
					label: '🖋️ 夜抄读 (Reading Notes)',
					autogenerate: { directory: 'experiment/night-reading' },
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
// Forced rebuild at Thu Feb 26 16:17:35 CST 2026
