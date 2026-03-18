import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDigitalGarden from 'starlight-digital-garden';
// import starlightThemeObsidian from 'starlight-theme-obsidian';

// import starlightSiteGraph from 'starlight-site-graph';

// https://astro.build/config
export default defineConfig({
	site: 'https://japan-grand-tour-garden.vercel.app', // 校准为 Vercel 实际部署域名
	integrations: [
		// starlightSiteGraph(), // 添加图谱集成 - 暂时禁用
		starlight({
			title: '扶桑乘槎录',
			description: '一种社会替代教育的旅行人类学实验',
			plugins: [], // starlightThemeObsidian() - 暂时禁用
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/stereobooster/astro-digital-garden' }
			],
			sidebar: [
				{
					label: '🎡 壮游启程',
					items: [
						{ label: '执行计画 (2026)', slug: 'experiment/papa-scaffold/04-itinerary-itinerant/202603061510-japan-grand-tour-execution-plan' },
						{ label: '科考宣言', slug: 'experiment/01-protocol-compass/202602251220-grand-tour-manifesto' },
						{ label: '研究方法论', slug: 'experiment/01-protocol-compass/202602251225-modernology-methodology' },
					],
				},
				{
					label: '🏮 专题研究 (Thematic)',
					autogenerate: { directory: 'experiment/papa-scaffold/03-thematic-research' },
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
