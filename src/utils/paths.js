// This file provides the public path for assets
export const getPublicPath = () => {
  return window.location.pathname.startsWith('/durga') ? '/durga/' : '/';
};

export const getAssetPath = (assetPath) => {
  return getPublicPath() + assetPath;
};
