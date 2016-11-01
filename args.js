const argv = require('yargs')
.wrap(null) //  specify no column limit (no right-align)
.usage('Usage: $0 <command> [options]')
.help('h')
.alias('h', 'help')
.version()
.alias('v', 'version')
.boolean('json')
.alias('j', 'json')
.describe('json', 'Force JSON output');

module.exports = argv.argv;
