import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { AnimationScene } from './pages/AnimationScene';

describe('AnimationScene', () => {
  test('starts with paused animation', () => {
    render(<AnimationScene />);
    const sceneElement = screen.getByTestId('scene');
    expect(sceneElement).toHaveClass('pausedAnimation');
  });

  test('play button starts the animation', () => {
    render(<AnimationScene />);
    const playButton = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);
    const sceneElement = screen.getByTestId('scene');
    expect(sceneElement).toHaveClass('playingAnimation');
    expect(sceneElement).not.toHaveClass('pausedAnimation');
  });

  test('pause button pauses the animation', () => {
    render(<AnimationScene />);
    const playButton = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(playButton);

    const pauseButton = screen.getByRole('button', { name: 'Pause' });
    fireEvent.click(pauseButton);
    const sceneElement = screen.getByTestId('scene');
    expect(sceneElement).toHaveClass('pausedAnimation');
  });
});
