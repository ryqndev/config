export const global = () => {

    return [
        {
            rules: {
                'no-restricted-globals': [
                    'error',
                    {
                        name: 'close',
                        message: 'Use window.close if the global is wanted',
                    },
                ],
            }
        }
    ]
}