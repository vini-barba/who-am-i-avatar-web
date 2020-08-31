import io from 'socket.io-client';

export const socket = io.connect('https://who-am-i-avatar.herokuapp.com/');

socket.on('error', function (err: any) {
  console.log('received socket error:');
  console.log(err);
});

export function joinRoom(roomId: string) {
  socket.emit('join', roomId);
}
export function sendMessage(msg: any) {
  socket.emit('chat message', msg);
}
