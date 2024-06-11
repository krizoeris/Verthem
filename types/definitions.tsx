export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type MenuItem = {
  title: string;
  icon: string;
  link: string;
};

export type PageTitleProps = {
  subText: string;
};
