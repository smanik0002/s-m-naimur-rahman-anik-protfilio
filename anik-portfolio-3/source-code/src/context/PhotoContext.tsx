import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoContextType {
  photo1: string; // Primary Avatar / Blue shirt
  photo2: string; // Secondary Portrait / Grey shirt
  setPhoto1: (dataUrl: string) => void;
  setPhoto2: (dataUrl: string) => void;
  resetPhotos: () => void;
  isCustomPhoto1: boolean;
  isCustomPhoto2: boolean;
  isUploadModalOpen: boolean;
  openUploadModal: () => void;
  closeUploadModal: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY_PHOTO1 = 'anik_portfolio_custom_photo1';
const STORAGE_KEY_PHOTO2 = 'anik_portfolio_custom_photo2';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photo1, setPhoto1State] = useState<string>(PERSONAL_INFO.images.profile);
  const [photo2, setPhoto2State] = useState<string>(PERSONAL_INFO.images.portrait);
  const [isCustomPhoto1, setIsCustomPhoto1] = useState<boolean>(false);
  const [isCustomPhoto2, setIsCustomPhoto2] = useState<boolean>(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for user-provided real photos
    try {
      const savedPhoto1 = localStorage.getItem(STORAGE_KEY_PHOTO1);
      if (savedPhoto1) {
        setPhoto1State(savedPhoto1);
        setIsCustomPhoto1(true);
      }
      const savedPhoto2 = localStorage.getItem(STORAGE_KEY_PHOTO2);
      if (savedPhoto2) {
        setPhoto2State(savedPhoto2);
        setIsCustomPhoto2(true);
      }
    } catch (e) {
      console.warn('Storage read failed', e);
    }
  }, []);

  const setPhoto1 = (dataUrl: string) => {
    setPhoto1State(dataUrl);
    setIsCustomPhoto1(true);
    try {
      localStorage.setItem(STORAGE_KEY_PHOTO1, dataUrl);
    } catch (e) {
      console.warn('Storage write failed', e);
    }
  };

  const setPhoto2 = (dataUrl: string) => {
    setPhoto2State(dataUrl);
    setIsCustomPhoto2(true);
    try {
      localStorage.setItem(STORAGE_KEY_PHOTO2, dataUrl);
    } catch (e) {
      console.warn('Storage write failed', e);
    }
  };

  const resetPhotos = () => {
    setPhoto1State(PERSONAL_INFO.images.profile);
    setPhoto2State(PERSONAL_INFO.images.portrait);
    setIsCustomPhoto1(false);
    setIsCustomPhoto2(false);
    try {
      localStorage.removeItem(STORAGE_KEY_PHOTO1);
      localStorage.removeItem(STORAGE_KEY_PHOTO2);
    } catch (e) {
      console.warn('Storage clear failed', e);
    }
  };

  return (
    <PhotoContext.Provider
      value={{
        photo1,
        photo2,
        setPhoto1,
        setPhoto2,
        resetPhotos,
        isCustomPhoto1,
        isCustomPhoto2,
        isUploadModalOpen,
        openUploadModal: () => setIsUploadModalOpen(true),
        closeUploadModal: () => setIsUploadModalOpen(false)
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
