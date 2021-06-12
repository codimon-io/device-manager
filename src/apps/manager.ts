import { io } from 'socket.io-client';

const socket = io('http://localhost:3003');

function main() {
  socket.emit('device:info', {
    message: 'holiiiii',
  });
}

main();
