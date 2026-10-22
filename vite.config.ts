import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          legal: path.resolve(__dirname, 'legal.html'),
          legalTerms: path.resolve(__dirname, 'legal/terms.html'),
          legalPrivacy: path.resolve(__dirname, 'legal/privacy.html'),
          legalAntiDiscrimination: path.resolve(__dirname, 'legal/anti-discrimination.html'),
          legalWarranty: path.resolve(__dirname, 'legal/warranty.html'),
          login: path.resolve(__dirname, 'login.html'),
          partnerDashboard: path.resolve(__dirname, 'partner-dashboard.html'),
          technicianLogin: path.resolve(__dirname, 'technician-login.html'),
          technicianDashboard: path.resolve(__dirname, 'technician-dashboard.html'),
          supportLogin: path.resolve(__dirname, 'support-login.html'),
          supportDashboard: path.resolve(__dirname, 'support-dashboard.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
