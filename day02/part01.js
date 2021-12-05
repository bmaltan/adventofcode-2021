import { movements } from './test.js';

function getLocDelta(movements) {
    let depth = 0;
    let horizontalPos = 0;

    movements.forEach(movement => {
        const vector = movement.split(' ');
        const delta = parseInt(vector[1]);

        switch (vector[0]) {
            case 'forward':
                horizontalPos += delta;
                break;
            case 'down':
                depth += delta;
                break;
            case 'up':
                depth -= delta;
                if (depth < 0) depth = 0;
                break;
            default:
        }
    })

    return depth * horizontalPos || horizontalPos;
}

getLocDelta(movements);