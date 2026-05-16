import React from 'react';

interface LogoColorsProps {
  size?: number;
  className?: string;
}

export const LogoColorsIcon: React.FC<LogoColorsProps> = ({ 
  size = 25, 
  className = "" 
}) => {
  return (
    <svg 
      viewBox="6 6 12 12" 
      height={size} 
      width={size}
      className={className}
    >
      {/* 상단 왼쪽 - 빨간색 원 */}
      <path d="M6 9 A3 3 0 0 0 12 9 A3 3 0 0 0 6 9 Z" fill="#df6767" />

      {/* 상단 오른쪽 - 노란색 원 */}
      <path d="M12 9 A3 3 0 0 0 18 9 A3 3 0 0 0 12 9 Z" fill="#fed867" />

      {/* 하단 왼쪽 - 초록색 원 */}
      <path d="M6 15 A3 3 0 0 0 12 15 A3 3 0 0 0 6 15 Z" fill="#6ba750" />

      {/* 하단 오른쪽 - 파란색 도형 (직사각형에 둥근 하단) */}
      <path d="M12 12 L18 12 L18 15 A3 3 0 0 1 12 15 Z" fill="#6e9dea" />
    </svg>
  );
};
