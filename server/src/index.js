import expressApp from './route';
const PORT = process.env.PORT || 3001;

expressApp.listen(PORT, () => {
  console.log(`Message-board-backend is listening on port ${PORT}!`);
});
