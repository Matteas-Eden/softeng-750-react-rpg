const tiles = [
    [5, 6, 4, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 6, 5, 5, 5, 0, 5, 5, 5],
    [5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5],
    [5, 5, 0, 6, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 5],
    [5, 5, 0, 0, 0, 0, 0, 0, 9, 5, 5, 5, 5, 0, 0, 6, 4, 6, 0, 0],
    [5, 5, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 5],
    [5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5],
    [5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 0, 2, 0, 5, 5, 5, 5, 0, 3, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'purple';

const monsters = [
    {
        type: 'fire spirit',
        position: [2, 2],
    },
    {
        type: 'poison cloud',
        position: [8, 1],
    },
    {
        type: 'warlock',
        position: [11, 4],
    },
    {
        type: 'imp',
        position: [13, 7],
    },
    {
        type: 'poison cloud',
        position: [19, 7],
    },
];

const stairs = {
    up: '3_3',
    down: '3_1',
};

const message = {
    title: 'The flames flickered brightly.',
    body: `<> cocked their head to the side and frowned.  'Who was lighting them?'`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
