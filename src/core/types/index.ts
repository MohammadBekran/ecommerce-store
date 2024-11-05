import { PropsWithChildren } from "react";

type TPropsWithChildren = PropsWithChildren;

interface IBillboard {
  id: string;
  label: string;
  imageUrl: string;
}

interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}

interface IProduct {
  id: string;
  name: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  category: ICategory;
  size: ISize;
  color: IColor;
  images: IImage[];
}

interface IImage {
  id: string;
  url: string;
}

interface ISize {
  id: string;
  name: string;
  value: string;
}

interface IColor {
  id: string;
  name: string;
  value: string;
}

export type {
  TPropsWithChildren,
  IBillboard,
  ICategory,
  IProduct,
  IImage,
  ISize,
  IColor,
};
