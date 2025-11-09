import { useState, useCallback } from 'react';
import './App.css'; 
import rtx5070ti from  "./image/RTX5070TI.png"
import rtx4070 from  "./image/4070.png"
import rtx4090 from  "./image/4090.png"
import rtx5080 from  "./image/5080.png"
import rtx5090 from  "./image/5090.png"

const graphicsCards = [
  {
    id: 0,
    image: rtx4070,
    name: "RTX 4070",
    subtitle: "PERFORMANCE REDEFINED",
    description: "Высокопроизводительная видеокарта для геймеров, обеспечивающая отличный баланс между ценой и производительностью. Идеальна для игр в разрешении 1440p с максимальными настройками и поддержкой трассировки лучей."
  },
  {
    id: 1,
    image: rtx4090,
    name: "RTX 4090",
    subtitle: "ULTIMATE POWER",
    description: "Флагманская видеокарта с невероятной производительностью. Максимальная мощность для 4K игр, профессиональной работы с 3D и машинным обучением. Абсолютный лидер в своем классе."
  },
  {
    id: 2,
    image: rtx5070ti,
    name: "RTX 5070 TI",
    subtitle: "WHAT WE KNOW SO FAR!",
    description: "Мощная видеокарта нового поколения с передовыми технологиями трассировки лучей и искусственного интеллекта. Идеальное решение для геймеров и творческих профессионалов."
  },
  {
    id: 3,
    image: rtx5080,
    name: "RTX 5080",
    subtitle: "NEXT GENERATION",
    description: "Продвинутая видеокарта следующего поколения с улучшенной архитектурой. Превосходная производительность для требовательных игр и профессиональных задач. Будущее графики уже здесь."
  },
  {
    id: 4,
    image: rtx5090,
    name: "RTX 5090",
    subtitle: "LEGENDARY PERFORMANCE",
    description: "Вершина технологий NVIDIA. Непревзойденная производительность для самых требовательных игр в 4K и 8K, профессиональной визуализации и AI-вычислений. Для тех, кто требует максимум."
  }
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');
  
  const currentCard = graphicsCards[currentImageIndex];
  
  const changeCard = useCallback((newIndex, dir) => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 600);
  }, [isTransitioning]);
  
  const handlePrevious = () => {
    const newIndex = currentImageIndex === 0 ? graphicsCards.length - 1 : currentImageIndex - 1;
    changeCard(newIndex, 'backward');
  };
  
  const handleNext = () => {
    const newIndex = currentImageIndex === graphicsCards.length - 1 ? 0 : currentImageIndex + 1;
    changeCard(newIndex, 'forward');
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <div 
          className={`product-card-wrapper ${isTransitioning ? (direction === 'forward' ? 'slide-out-left' : 'slide-out-right') : (direction === 'forward' ? 'slide-in-right' : 'slide-in-left')}`}
        >
          <div className="product-content-left">
            <div className="product-description">
              <h1 className="product-main-title">GeForce {currentCard.name}</h1>
              <h2 className="product-tagline">{currentCard.subtitle}</h2>
              <p className="product-text">
                {currentCard.description}
              </p>
            </div>
          </div>
          
          <div className="product-image-right">
            <div className="neon-image-container">
              <img 
                key={currentImageIndex}
                src={currentCard.image}
                alt={currentCard.name} 
                className="neon-image"
              />
            </div>
          </div>
        </div>
        
        <div className={`wave-pattern ${isTransitioning ? (direction === 'forward' ? 'slide-out-left' : 'slide-out-right') : (direction === 'forward' ? 'slide-in-right' : 'slide-in-left')}`}></div>
        
        <div className={`image-gallery-controls ${isTransitioning ? (direction === 'forward' ? 'slide-out-left' : 'slide-out-right') : (direction === 'forward' ? 'slide-in-right' : 'slide-in-left')}`}>
          <button 
            className="glass-button prev-button" 
            onClick={handlePrevious}
            disabled={isTransitioning}
          >
            ←
          </button>
          
          <button 
            className="glass-button next-button" 
            onClick={handleNext}
            disabled={isTransitioning}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;