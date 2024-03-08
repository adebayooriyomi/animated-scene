import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { AnimationScene } from './pages/AnimationScene';

describe('AnimationScene', () => {
  test('starts with paused animation', async () => {
    render(<AnimationScene />);
    const sceneElement = await screen.findByTestId('scene');
    expect(sceneElement).toHaveClass('pausedAnimation');
  });

  test('play button starts the animation', async () => {
    render(<AnimationScene />);
    const playButton = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);

    // Use waitFor to wait for the state to update
    await waitFor(() => {
      const sceneElement = screen.getByTestId('scene');
      expect(sceneElement).toHaveClass('playingAnimation');
      expect(sceneElement).not.toHaveClass('pausedAnimation');
    });
  });

  test('pause button pauses the animation', async () => {
    render(<AnimationScene />);
    const playButton = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);

    const pauseButton = screen.getByRole('button', { name: 'Pause' });
    fireEvent.click(pauseButton);

    // Use waitFor to wait for the state to update
    await waitFor(() => {
      const sceneElement = screen.getByTestId('scene');
      expect(sceneElement).toHaveClass('pausedAnimation');
    });
  });
});