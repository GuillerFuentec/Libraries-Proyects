const song = [{song: "LOZ_Arrow_Boomerang.wav"},
  {song: "LOZ_Bomb_Blow.wav"},
  {song: "LOZ_Bomb_Drop.wav"},
  {song: "LOZ_Candle.wav"},
  {song: "LOZ_MagicalRod.wav"},
  {song: "LOZ_Shield.wav"},
  {song: "LOZ_Sword_Combined.wav"},
  {song: "LOZ_Sword_Shoot.wav"},
  {song: "LOZ_Sword_Slash.wav"},
]
const bank = [1, 2];
const route = `../../media/audio/music/zelda/bank_${bank[0]}/${song[4]}`

export default function Button({ children }) {
  return (
      <div className="drum-pad grid gap-x-2 items-center container w-20 h-20 my-1 mx-12 mx-auto w-full" id={song[5].song}>
        <audio src={route} className="clip" id={children} />
        {children}
      </div>
  );
}
