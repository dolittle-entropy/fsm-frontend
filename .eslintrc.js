// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'header',
    ],
    rules: {
        'header/header': [2, 'line', [' Copyright (c) Dolittle. All rights reserved.', ' Licensed under the MIT license. See LICENSE file in the project root for full license information.'], 2],
        'eol-last': ['error', 'always'],
    }
};
