export function colorConsole(message: string, color: string = 'orange') {
  console.log(
    `%c${message}`,
    `background: ${color}; padding: 5px 10px; border-radius: 5px;`
  );
}
