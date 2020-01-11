const moveToTopRightCornerWithScale = (movableBlock, moveContainer, scaleRate = 1) => {
  const { style } = movableBlock;

  const startX = 0;
  const startY = moveContainer.offsetHeight - movableBlock.offsetHeight;

  style.top = `${startY}px`;
  style.left = `${startX}px`;
  style.transform = `scale(${scaleRate})`;

  const delta = movableBlock.offsetHeight * scaleRate - movableBlock.offsetHeight;
  const endX = Math.floor(moveContainer.offsetWidth - movableBlock.offsetHeight * scaleRate + delta / 2);
  const endY = Math.floor(delta / 2);

  movableBlock.style.top = `${endY}px`;
  movableBlock.style.left = `${endX}px`;
};

const animationService = {
  moveToTopRightCornerWithScale,
};

export default animationService;
