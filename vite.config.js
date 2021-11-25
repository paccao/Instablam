import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			includeAssets: [
				"favicon.svg",
				"favicon.ico",
				"robots.txt",
				"apple-touch-icon.png",
			],
			manifest: {
				name: "Instablam",
				short_name: "Instablam",
				author: "Joel",
				description:
					"Take pictures with your phone or computer's webcam and scroll through your gallery of pictures. You can also download the images you've taken.",
				theme_color: "#333",
				default_locale: "en",
				icons: [
					{
						src: "favicon-16x16.png",
						sizes: "16x16",
						type: "image/png",
					},
					{
						src: "favicon-32x32.png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "maskable_icon.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
})
