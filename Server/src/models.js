import mongoose from 'mongoose';

const playerScoreData = mongoose.model('playerScore', {
  guess: Array,
  correctWord: String,
  correctWordLength: Number,
  includedDoubble: Boolean,
  playerName: String,
  gameTime: Number,
});

export { playerScoreData };
