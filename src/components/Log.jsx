export default function Log({ turnArray }) {
  return (
    <ol id="log">
      {turnArray.map((turnDetail) => (
        <li key={`${turnDetail.square.row},${turnDetail.square.col}`}>
          {turnDetail.playerTurn} selected {turnDetail.square.row},{turnDetail.square.col}
        </li>
      ))}
    </ol>
  );
}
