const ENV = {
	development: {
		REMOTE_FILE: 'remoteEntry.js',
		AUTH_URL: 'http://localhost:3001/',
		SHELL_URL: 'http://localhost:3002/',
		DASHBOARD_URL: 'http://localhost:3003/',
		SHARED_URL: 'http://localhost:3004/',
		ENGINEERING_URL: 'http://localhost:3005/',
	},
	production: {
		REMOTE_FILE: 'remoteEntry.js',
		AUTH_URL: 'https://aws-dev.localiza.dev/auth/',
		SHELL_URL: 'https://aws-dev.localiza.dev/engenharia-shell-poc/',
		DASHBOARD_URL: 'https://aws-dev.localiza.dev/engenharia-dashboard-poc/',
		SHARED_URL: 'https://aws-dev.localiza.dev/engenharia-shared-poc/',
		ENGINEERING_URL: 'https://aws-dev.localiza.dev/engenharia-engineering-poc/',
	}
};

const getEnv = (env = 'development') => {
	if (env === 'production') {
		return ENV.production;
	}

	// development
	return ENV.development;
};

module.exports = getEnv;
