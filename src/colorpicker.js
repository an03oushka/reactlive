import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [showColorList, setShowColorList] = useState(false);

  const colors = [
    'red',
    'rgb(37, 236, 37)',
    'blue',
    'yellow',
    'rgb(250, 56, 146)',
    'rgb(18, 245, 215)',
    'rgb(252, 182, 52)',
    'purple',
    'rgb(248, 152, 167)',
    'darkgreen',
    'rgba(247, 134, 99, 0.884)',
    'rgb(6, 173, 240)',
    'brown',
    'rgb(238, 138, 8)',
    'rgb(74, 116, 179)',
    'rgb(255, 208, 0)',
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColorList(false); 
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  return (
    <div className="container" style={{ backgroundColor: selectedColor }}>
      <div className="title">Color Picker</div>
      <div className="color-boxes">
        {colors.map((color) => (
          <div
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
            key={color}
          ></div>
        ))}
      </div>
      <button className="pick-button" onClick={toggleColorList}>Pick a Color</button>
    </div>
  );
};

export default ColorPicker;
