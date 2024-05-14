
import {useState} from 'react';

export default function RangeDisplay() {
    const [volume, setVolume] = useState(40);

    const handleChange = (e) => {
        setVolume(e.target.value);
    }

    return (
        <div className='flex items-center p-px h-14 w-full'>
        <input type="range" min={0} max="100" value={volume} onChange={handleChange} className="range" />
        </div>
    );
  }
  