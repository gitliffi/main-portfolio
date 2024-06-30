import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'projects',
        entry: '//localhost:3001', // URL of the projects MFE
        container: '#container',
        activeRule: '/projects',
    },
    {
        name: 'blog',
        entry: '//localhost:3002', // URL of the blog MFE
        container: '#container',
        activeRule: '/blog',
    },
    {
        name: 'album',
        entry: '//localhost:3003', // URL of the album MFE
        container: '#container',
        activeRule: '/album',
    },
]);

start();