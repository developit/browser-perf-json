#!/usr/bin/env node

var browserPerf = require('browser-perf'),
	args = require('yargs').argv;

if (typeof args.browsers==='string') args.browsers = args.browsers.split(/\s*,\s*/);

browserPerf(args._[0], function(err, res) {
	if (err) {
		process.stdout.write(String(err));
	} else {
		process.stdout.write(JSON.stringify(res[0], null, '  '))
	}
}, args);
