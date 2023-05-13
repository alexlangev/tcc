const removeFileExtension = (fileName) => {
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex > 0 && dotIndex < fileName.length - 1) {
    return fileName.substring(0, dotIndex);
  }
  return fileName;
};

export { removeFileExtension };
