import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import { Button } from '../components/Button'

export const AnimationScene: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const sceneRef = useRef<HTMLDivElement>(null);
  
    const playAnimation = () => {
      setIsPlaying(true);
    };
  
    const pauseAnimation = () => {
      setIsPlaying(false);
    };

    const animationClass = isPlaying ? 'playingAnimation' : 'pausedAnimation';
  
    const takeSnapshot = async () => {
      if (sceneRef.current) {
        const canvas = await html2canvas(sceneRef.current);
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'scene-snapshot.png';
        link.click();
      }
    };
  
    return (
        <div>
            <div
                ref={sceneRef}
                data-testid="scene"
                className={`scene ${animationClass}`}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '400px',
                    height: '400px',
                    margin: '30px',
                    background: 'rgba(159, 48, 72, 1)',
                    color: 'white',
                    transition: 'background 0.5s ease',
                }}
                >
                <h3>Hello World!</h3>
            </div>
                <div className='buttonsContainer'>
                    <Button onClick={playAnimation} disabled={isPlaying}>Play</Button>
                    <Button onClick={pauseAnimation} disabled={!isPlaying}>Pause</Button>
                    <Button onClick={takeSnapshot}>Snapshot</Button>
                </div>
        </div>
    );
  };