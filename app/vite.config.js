import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',  // Ensure it's bound to all network interfaces
		port: 5173,       // Change if needed
		strictPort: true, // Prevent auto-changing ports
	  }
});