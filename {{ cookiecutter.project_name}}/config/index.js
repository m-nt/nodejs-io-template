"use strict";

module.exports = {
    '{{ cookiecutter.app}}_config': require('./{{ cookiecutter.app}}.config'),
    socket_config: require('./socket.config'),
    bridge_config: require('./bridge.config'),
}
