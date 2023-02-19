import { randomUUID } from 'crypto';
import { environment } from 'environment/environment';
import { UploadedFile } from 'express-fileupload';
import { join } from 'path';
import { rm } from 'fs/promises';

const imagesPath = join(process.cwd(), environment.staticFilesLocation, environment.imagesLocation);

const getFileExtension = (name: string) => name.split('.').pop();

const generateRandomFileName = (name: string) => `${randomUUID()}.${getFileExtension(name)}`;

export const getImageName = (imageUrl: string) => {
  return imageUrl.replace(`${environment.imagesLocation}/`, '');
};

export const saveUploadedFile = async (file: UploadedFile): Promise<string> => {
  const fileName = generateRandomFileName(file.name);
  const filePath = join(imagesPath, fileName);
  await file.mv(filePath);
  return fileName;
};

export const deleteImageFile = async (imageName: string): Promise<void> => {
  const path = join(imagesPath, imageName);
  await rm(path);
};
