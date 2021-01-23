export function useMousePositions() {
  const [isSliding, setIsSliding] = useState(false);

  const handleMouseDown = (e) => {
    if (e.target.dataset.handle) {
      setIsSliding(true);
      const horizontalMousePosition = event.clientX;
      console.log(horizontalMousePosition);
    }
  };
  const handleMouseUp = (e) => {
    if (isSliding) {
      const horizontalMousePosition = event.clientX;
      console.log(horizontalMousePosition);
      setIsSliding(false);
    }
  };
}
