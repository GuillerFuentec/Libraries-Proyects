
import {useState} from 'react';

export default function RangeDisplay() {
    const [volume, setVolume] = useState(40);

    const handleChange = (e) => {
        setVolume(e.target.value);
    }

    return (
        <div className='p-px w-10/12'>
        <input type="range" min={0} max="100" value={volume} onChange={handleChange} className="range" />
        </div>
    );
  }
  