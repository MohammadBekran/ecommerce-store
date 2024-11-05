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

export type { TPropsWithChildren, IBillboard, ICategory };
